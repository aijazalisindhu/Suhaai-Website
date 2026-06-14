import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const roots = [
  ["public", "Images", "OurWork"],
  ["public", "Images", "Our Work"],
  ["public", "Images", "our-work"],
  ["public", "Images", "ourwork"],
  ["public", "images", "OurWork"],
  ["public", "images", "Our Work"],
  ["Public", "Images", "OurWork"],
  ["Public", "Images", "Our Work"],
  ["public", "Images"],
  ["public", "images"],
  ["Public", "Images"]
];

const orderedCards = [
  "free-tuition",
  "free-transport",
  "girls-education",
  "study-circles",
  "science-ai",
  "learning-resources"
];

const aliases: Record<string, string[]> = {
  "free-tuition": ["tuition", "class", "study", "student"],
  "free-transport": ["transport", "rickshaw", "bus", "van"],
  "girls-education": ["girls", "education", "school"],
  "study-circles": ["study", "circle", "group"],
  "science-ai": ["science", "ai", "technology"],
  "learning-resources": ["learning", "resource", "books", "stationery"]
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

function isImage(file: string) {
  return Boolean(contentTypes[extname(file).toLowerCase()]);
}

async function collectImages(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const images: string[] = [];

  for (const entry of entries) {
    const path = join(root, entry.name);

    if (entry.isDirectory()) {
      images.push(...(await collectImages(path)));
    } else if (entry.isFile() && isImage(entry.name)) {
      images.push(path);
    }
  }

  return images;
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
        // Try the next extension or folder.
      }
    }
  }

  const keywords = aliases[requestedBase] ?? requestedBase.split("-");

  for (const root of roots) {
    try {
      const folder = join(process.cwd(), ...root);
      const imageFiles = (await collectImages(folder)).sort((a, b) => a.localeCompare(b));
      const keywordMatch = imageFiles.find((file) => {
        const normalizedFile = normalize(file);

        return keywords.some((keyword) => normalizedFile.includes(normalize(keyword)));
      });

      const orderedIndex = orderedCards.indexOf(requestedBase);
      const orderedMatch = orderedIndex >= 0 ? imageFiles[orderedIndex] : undefined;
      const match = keywordMatch ?? orderedMatch;

      if (match) {
        const extension = extname(match).toLowerCase();
        const image = await readFile(match);

        return responseFor(new Uint8Array(image), extension);
      }
    } catch {
      // Try the next common folder.
    }
  }

  return new Response("Not found", { status: 404 });
}
