import { readFile } from "node:fs/promises";
import { join } from "node:path";

const logoCandidates = [
  ["public", "images", "logo.webp"],
  ["public", "Images", "logo.webp"],
  ["Public", "Images", "logo.webp"],
  ["Public", "images", "logo.webp"]
];

export async function GET() {
  for (const candidate of logoCandidates) {
    try {
      const logo = await readFile(join(process.cwd(), ...candidate));

      return new Response(new Uint8Array(logo), {
        headers: {
          "Cache-Control": "public, max-age=86400",
          "Content-Type": "image/webp"
        }
      });
    } catch {
      // Try the next possible folder casing.
    }
  }

  return new Response("Logo not found", { status: 404 });
}
