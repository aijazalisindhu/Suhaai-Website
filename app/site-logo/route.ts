import { readFile } from "fs/promises";
import path from "path";

const logoCandidates = [
  ["public", "images", "logo.webp"],
  ["public", "Images", "logo.webp"],
  ["Public", "Images", "logo.webp"],
  ["Public", "images", "logo.webp"],
];

export async function GET() {
  for (const candidate of logoCandidates) {
    const filePath = path.join(process.cwd(), ...candidate);

    try {
      const logo = await readFile(filePath);

      return new Response(logo, {
        headers: {
          "Content-Type": "image/webp",
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch {
      // Try the next possible folder/name casing.
    }
  }

  return new Response("Logo not found", { status: 404 });
}
