const fs = require("node:fs");
const path = require("node:path");

const nextDir = path.join(process.cwd(), ".next");

try {
  fs.rmSync(nextDir, { force: true, recursive: true });
  console.log("Cleaned Next.js cache.");
} catch (error) {
  console.warn(`Could not clean Next.js cache: ${error.message}`);
}