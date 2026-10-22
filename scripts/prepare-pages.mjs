import { access, cp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const clientDir = path.resolve("dist/client");
const baseSegment = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /^\/+|\/+$/g,
  "",
);
const basePath = baseSegment ? `/${baseSegment}` : "";
const generatedAssets = baseSegment
  ? path.join(clientDir, baseSegment, "_next")
  : path.join(clientDir, "_next");
const publishedAssets = path.join(clientDir, "_next");

// vinext writes asset-prefixed files below dist/client/<basePath>/_next,
// while GitHub Pages already mounts dist/client at <basePath>. Copy the
// generated assets to the artifact root so browser URLs resolve correctly.
await access(generatedAssets);
if (baseSegment) {
  await cp(generatedAssets, publishedAssets, { recursive: true, force: true });
}
await writeFile(path.join(clientDir, ".nojekyll"), "");

const indexHtml = await readFile(path.join(clientDir, "index.html"), "utf8");
const assetPattern = /(?:href|src)="([^"]*\/_next\/[^"]+)"/g;
const assetUrls = [
  ...indexHtml.matchAll(assetPattern),
].map((match) => match[1]);

if (assetUrls.length === 0) {
  throw new Error("No GitHub Pages assets were referenced by index.html");
}

for (const assetUrl of assetUrls) {
  const artifactPath = assetUrl.startsWith(`${basePath}/`)
    ? assetUrl.slice(`${basePath}/`.length)
    : assetUrl.replace(/^\/+/, "");
  await access(path.join(clientDir, artifactPath));
}

console.log(`Prepared and verified ${assetUrls.length} GitHub Pages assets.`);
