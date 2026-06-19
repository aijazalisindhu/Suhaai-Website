import { NextResponse } from "next/server";
import tls from "node:tls";

export const runtime = "nodejs";

type ContactPayload = {
  type?: unknown;
  name?: unknown;
  email?: unknown;
  contact?: unknown;
  role?: unknown;
  message?: unknown;
};

type EmailMessage = {
  type: "message" | "feedback";
  name: string;
  contact: string;
  replyTo?: string;
  role?: string;
  message: string;
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";

  return value
    .replace(/\r/g, "")
    .replace(/\0/g, "")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function dotStuff(message: string) {
  return message.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

function openTlsSocket(host: string, port: number) {
  return new Promise<tls.TLSSocket>((resolve, reject) => {
    function onError(error: Error) {
      reject(error);
    }

    const socket = tls.connect(
      {
        host,
        port,
        servername: host
      },
      () => {
        socket.off("error", onError);
        resolve(socket);
      }
    );

    socket.setTimeout(15000, () => {
      socket.destroy(new Error("SMTP connection timed out"));
    });

    socket.once("error", onError);
  });
}

async function sendEmail({ type, name, contact, replyTo, role, message }: EmailMessage) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || "suhaaisindh@gmail.com";
  const from = process.env.SMTP_FROM || user;

  if (!user || !pass || !from) {
    throw new Error("Email service is not configured");
  }

  const socket = await openTlsSocket(host, port);
  let buffer = "";

  function readResponse() {
    return new Promise<string>((resolve, reject) => {
      function cleanup() {
        socket.off("data", onData);
        socket.off("error", onError);
      }

      function onError(error: Error) {
        cleanup();
        reject(error);
      }

      function onData(chunk: Buffer) {
        buffer += chunk.toString("utf8");

        const lines = buffer.split(/\r?\n/);
        for (let index = 0; index < lines.length - 1; index += 1) {
          if (/^\d{3} /.test(lines[index])) {
            const response = lines.slice(0, index + 1).join("\n");
            buffer = lines.slice(index + 1).join("\r\n");
            cleanup();
            resolve(response);
            return;
          }
        }
      }

      socket.on("data", onData);
      socket.once("error", onError);
    });
  }

  async function command(value: string, expectedCodes: number[]) {
    socket.write(`${value}\r\n`);
    const response = await readResponse();
    const code = Number(response.slice(0, 3));

    if (!expectedCodes.includes(code)) {
      throw new Error(`SMTP command failed: ${response}`);
    }
  }

  try {
    await readResponse();
    await command("EHLO suhaai.org", [250]);
    await command("AUTH LOGIN", [334]);
    await command(Buffer.from(user).toString("base64"), [334]);
    await command(Buffer.from(pass).toString("base64"), [235]);
    await command(`MAIL FROM:<${from}>`, [250]);
    await command(`RCPT TO:<${to}>`, [250, 251]);
    await command("DATA", [354]);

    const subject =
      type === "feedback"
        ? `New feedback for Suhaai review - ${name}`
        : `New message from Suhaai website - ${name}`;
    const body = [
      type === "feedback"
        ? "New feedback was submitted from the Suhaai website for review and approval."
        : "A new message was submitted from the Suhaai website contact form.",
      "",
      `Name: ${name}`,
      `${type === "feedback" ? "Email or WhatsApp" : "Email"}: ${contact}`,
      ...(role ? [`Role / Relationship: ${role}`] : []),
      "",
      type === "feedback" ? "Feedback:" : "Message:",
      message
    ].join("\r\n");

    const emailContent = [
      `From: ${encodeHeader("Suhaai Website")} <${from}>`,
      `To: <${to}>`,
      ...(replyTo ? [`Reply-To: ${encodeHeader(name)} <${replyTo}>`] : []),
      `Subject: ${encodeHeader(subject)}`,
      "MIME-Version: 1.0",
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      dotStuff(body),
      "."
    ].join("\r\n");

    socket.write(`${emailContent}\r\n`);
    const dataResponse = await readResponse();
    const dataCode = Number(dataResponse.slice(0, 3));

    if (dataCode !== 250) {
      throw new Error(`SMTP message failed: ${dataResponse}`);
    }

    await command("QUIT", [221]);
  } finally {
    socket.end();
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid form submission." },
      { status: 400 }
    );
  }

  const name = cleanText(payload.name, 120);
  const email = cleanText(payload.email, 180);
  const contact = cleanText(payload.contact, 180);
  const role = cleanText(payload.role, 120);
  const message = cleanText(payload.message, 3000);
  const type = payload.type === "feedback" ? "feedback" : "message";

  if (type === "feedback") {
    if (!name || !contact || !role || !message) {
      return NextResponse.json(
        {
          message:
            "Please fill in your name, contact details, role, and feedback message."
        },
        { status: 400 }
      );
    }

    try {
      await sendEmail({
        type,
        name,
        contact,
        replyTo: isValidEmail(contact) ? contact : undefined,
        role,
        message
      });

      return NextResponse.json({
        message: "Thank you. Your feedback has been sent to Suhaai for review."
      });
    } catch (error) {
      console.error(error);

      return NextResponse.json(
        {
          message:
            "Feedback could not be sent right now. Please email suhaaisindh@gmail.com directly."
        },
        { status: 500 }
      );
    }
  }

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  try {
    await sendEmail({
      type,
      name,
      contact: email,
      replyTo: email,
      message
    });

    return NextResponse.json({
      message: "Thank you. Your message has been sent to Suhaai."
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Message could not be sent right now. Please email suhaaisindh@gmail.com directly."
      },
      { status: 500 }
    );
  }
}
