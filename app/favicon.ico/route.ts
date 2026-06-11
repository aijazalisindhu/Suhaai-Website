import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const candidates = [
  { name: "logo.png", type: "image/png" },
  { name: "Logo.png", type: "image/png" },
  { name: "logo.jpg", type: "image/jpeg" },
  { name: "Logo.jpg", type: "image/jpeg" },
  { name: "logo.jpeg", type: "image/jpeg" },
  { name: "Logo.jpeg", type: "image/jpeg" },
  { name: "logo.webp", type: "image/webp" },
  { name: "Logo.webp", type: "image/webp" },
  { name: "logo.svg", type: "image/svg+xml" },
  { name: "Logo.svg", type: "image/svg+xml" }
];

export async function GET() {
  for (const candidate of candidates) {
    try {
      const file = await readFile(join(process.cwd(), "public", "images", candidate.name));

      return new NextResponse(new Uint8Array(file), {
        headers: {
          "Content-Type": candidate.type,
          "Cache-Control": "public, max-age=0, must-revalidate"
        }
      });
    } catch {
      // Try the next common logo filename/format.
    }
  }

  return new NextResponse(
    `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#F4B942"/><text x="32" y="41" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="900" fill="#12355B">S</text></svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=0, must-revalidate"
      }
    }
  );
}
