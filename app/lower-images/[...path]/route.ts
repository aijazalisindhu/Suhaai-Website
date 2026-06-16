import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const contentTypes: Record<string, string> = {
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp"
};

const roots = [
  ["public", "images"],
  ["public", "Images"],
  ["Public", "Images"]
];

const aliases: Record<string, string[]> = {
  about: ["about", "About"],
  gallery: ["gallery", "Gallery"],
  support: ["support", "Support"],
  "our-work": ["our-work", "Our Work", "OurWork"],
  ourwork: ["ourwork", "OurWork", "Our Work"],
  hero: ["hero", "Hero"]
};

function candidatePaths(parts: string[]) {
  const expandedParts = parts.map((part) => aliases[part] ?? [part]);
  const candidates: string[][] = [[]];

  for (const options of expandedParts) {
    const nextCandidates: string[][] = [];

    for (const candidate of candidates) {
      for (const option of options) {
        nextCandidates.push([...candidate, option]);
      }
    }

    candidates.splice(0, candidates.length, ...nextCandidates);
  }

  return candidates;
}

function isSafePath(parts: string[]) {
  return parts.every(
    (part) =>
      part !== "." &&
      part !== ".." &&
      /^[a-z0-9 ._-]+$/i.test(part) &&
      normalize(part) === part
  );
}

export async function GET(
  _request: Request,
  { params }: { params: { path: string[] } }
) {
  const parts = params.path ?? [];
  const extension = extname(parts.at(-1) ?? "").toLowerCase();

  if (!parts.length || !contentTypes[extension] || !isSafePath(parts)) {
    return new Response("Not found", { status: 404 });
  }

  for (const root of roots) {
    for (const candidate of candidatePaths(parts)) {
      try {
        const image = await readFile(join(process.cwd(), ...root, ...candidate));

        return new Response(new Uint8Array(image), {
          headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
            "Content-Type": contentTypes[extension]
          }
        });
      } catch {
        // Try the next casing/folder alias.
      }
    }
  }

  return new Response("Not found", { status: 404 });
}
