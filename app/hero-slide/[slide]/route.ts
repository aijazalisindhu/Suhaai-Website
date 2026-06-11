import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const folders = [
  ["public", "images", "hero"],
  ["Public", "Images", "Hero"],
  ["public", "Images", "Hero"],
  ["public", "images", "Hero"],
  ["public", "Images", "hero"],
  ["public", "images"],
  ["Public", "Images"],
  ["public", "Images"]
];

const extensions = [
  { ext: "jpg", type: "image/jpeg" },
  { ext: "JPG", type: "image/jpeg" },
  { ext: "jpeg", type: "image/jpeg" },
  { ext: "JPEG", type: "image/jpeg" },
  { ext: "png", type: "image/png" },
  { ext: "PNG", type: "image/png" },
  { ext: "webp", type: "image/webp" },
  { ext: "WEBP", type: "image/webp" }
];

function namesFor(slide: string) {
  return [
    `hero-${slide}`,
    `Hero-${slide}`,
    `hero_${slide}`,
    `Hero_${slide}`,
    `hero ${slide}`,
    `Hero ${slide}`,
    `hero${slide}`,
    `Hero${slide}`,
    `slide-${slide}`,
    `Slide-${slide}`,
    `slide_${slide}`,
    `Slide_${slide}`,
    `slide ${slide}`,
    `Slide ${slide}`,
    `${slide}`
  ];
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { slide: string } }
) {
  for (const folder of folders) {
    for (const name of namesFor(params.slide)) {
      for (const extension of extensions) {
        try {
          const file = await readFile(join(process.cwd(), ...folder, `${name}.${extension.ext}`));

          return new NextResponse(new Uint8Array(file), {
            headers: {
              "Content-Type": extension.type,
              "Cache-Control": "public, max-age=0, must-revalidate"
            }
          });
        } catch {
          // Try the next common folder, filename, or extension.
        }
      }
    }
  }

  return new NextResponse("Hero image not found", { status: 404 });
}
