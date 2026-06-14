import { readFile } from "fs/promises";
import path from "path";

const logoCandidates = [
  ["public", "Images", "logo.png"],
  ["public", "images", "logo.png"],
  ["Public", "Images", "logo.png"],
  ["Public", "images", "logo.png"],
  ["public", "Images", "logo.webp"],
  ["public", "images", "logo.webp"],
  ["Public", "Images", "logo.webp"],
  ["Public", "images", "logo.webp"],
  ["public", "Images", "logo.jpg"],
  ["public", "images", "logo.jpg"],
  ["Public", "Images", "logo.jpg"],
  ["Public", "images", "logo.jpg"],
];

function contentTypeFor(fileName: string) {
  if (fileName.endsWith(".webp")) return "image/webp";
  if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) return "image/jpeg";
  return "image/png";
}

export async function GET() {
  for (const candidate of logoCandidates) {
    const filePath = path.join(process.cwd(), ...candidate);

    try {
      const logo = await readFile(filePath);
      const fileName = candidate[candidate.length - 1];

      return new Response(logo, {
        headers: {
          "Content-Type": contentTypeFor(fileName),
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch {
      // Try the next possible folder/name casing.
    }
  }

  return new Response("Logo not found", { status: 404 });
}
