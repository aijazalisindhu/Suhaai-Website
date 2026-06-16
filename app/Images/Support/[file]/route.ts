import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const roots = [
  ["public", "images", "support"],
  ["public", "images", "Support"],
  ["public", "Images", "Support"],
  ["Public", "Images", "Support"]
];

const aliases: Record<string, string[]> = {
  "books-stationery": ["books", "stationery"],
  "teacher-salaries": ["teacher"],
  transport: ["transport"],
  "classroom-resources": ["classroom"],
  "sponsor-student": ["student"],
  "digital-learning": ["digital", "learning"]
};

const contentTypes: Record<string, string> = {
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp"
};

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function responseFor(image: Uint8Array, extension: string) {
  return new Response(image, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": contentTypes[extension.toLowerCase()] ?? "application/octet-stream"
    }
  });
}

export async function GET(
  _request: Request,
  { params }: { params: { file: string } }
) {
  const requestedFile = params.file;

  if (!/^[a-z0-9-.]+$/i.test(requestedFile)) {
    return new Response("Not found", { status: 404 });
  }

  const requestedBase = requestedFile.replace(/\.[^.]+$/, "");
  const requestedExtension = extname(requestedFile).toLowerCase();
  const extensionsToTry = [
    requestedExtension,
    ".webp",
    ".png",
    ".jpg",
    ".jpeg"
  ].filter(Boolean);

  for (const root of roots) {
    for (const extension of extensionsToTry) {
      try {
        const image = await readFile(join(process.cwd(), ...root, `${requestedBase}${extension}`));

        return responseFor(new Uint8Array(image), extension);
      } catch {
        // Try the next extension or folder casing.
      }
    }
  }

  const keywords = aliases[requestedBase] ?? requestedBase.split("-");

  for (const root of roots) {
    try {
      const folder = join(process.cwd(), ...root);
      const entries = await readdir(folder);
      const imageFiles = entries.filter((entry) => {
        const extension = extname(entry).toLowerCase();

        return Boolean(contentTypes[extension]);
      });
      const match = imageFiles.find((entry) => {
        const normalizedEntry = normalize(entry);

        return keywords.every((keyword) => normalizedEntry.includes(normalize(keyword)));
      });

      if (match) {
        const extension = extname(match).toLowerCase();
        const image = await readFile(join(folder, match));

        return responseFor(new Uint8Array(image), extension);
      }
    } catch {
      // Try the next common folder casing.
    }
  }

  return new Response("Not found", { status: 404 });
}
