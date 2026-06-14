import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const folders = [
  ["public", "images"],
  ["public", "Images"],
  ["Public", "images"],
  ["Public", "Images"]
];

const files = [
  { name: "logo.webp", type: "image/png" },
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
  for (const folder of folders) {
    for (const fileInfo of files) {
      try {
        const file = await readFile(join(process.cwd(), ...folder, fileInfo.name));

        return new NextResponse(new Uint8Array(file), {
          headers: {
            "Content-Type": fileInfo.type,
            "Cache-Control": "public, max-age=0, must-revalidate"
          }
        });
      } catch {
        // Try the next common folder/name combination.
      }
    }
  }

  return new NextResponse(
    `<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="160" height="160" rx="80" fill="#F4B942"/><text x="80" y="104" text-anchor="middle" font-family="Arial, sans-serif" font-size="82" font-weight="900" fill="#12355B">S</text></svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=0, must-revalidate"
      }
    }
  );
}
