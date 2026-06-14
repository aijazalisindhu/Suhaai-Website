import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

const folders = [
  ["public", "images"],
  ["public", "Images"],
  ["Public", "images"],
  ["Public", "Images"]
];

const candidates = [
  { name: "mission.webp", type: "image/jpeg" },
  { name: "mission.jpeg", type: "image/jpeg" },
  { name: "mission.png", type: "image/png" },
  { name: "mission.webp", type: "image/webp" },
  { name: "Mission.jpg", type: "image/jpeg" },
  { name: "Mission.jpeg", type: "image/jpeg" },
  { name: "Mission.png", type: "image/png" },
  { name: "Mission.webp", type: "image/webp" }
];

export async function GET() {
  for (const folder of folders) {
    for (const candidate of candidates) {
      try {
        const file = await readFile(join(process.cwd(), ...folder, candidate.name));

        return new NextResponse(file, {
          headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
            "Content-Type": candidate.type
          }
        });
      } catch {
        // Try the next case/name combination.
      }
    }
  }

  return new NextResponse("Mission image not found", { status: 404 });
}
