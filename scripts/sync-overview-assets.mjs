import { access, copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const issueDir = path.resolve("app/data/issues");
const assetDir = path.resolve("app/data/assets");
const publicDir = path.resolve("public/overviews");

const slugs = (await readdir(issueDir))
  .filter((name) => /^w\d+\.ts$/.test(name))
  .map((name) => name.replace(/\.ts$/, ""))
  .sort();

await mkdir(publicDir, { recursive: true });

for (const slug of slugs) {
  const png = path.join(assetDir, slug, "overview.png");
  const svg = path.join(assetDir, slug, "overview.svg");
  await Promise.all([access(png), access(svg)]);
  await copyFile(png, path.join(publicDir, `${slug}.png`));
}

console.log(`Synced ${slugs.length} overview images.`);
