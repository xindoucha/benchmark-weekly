import { access, cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
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

// GitHub Pages does not resolve `/weekly` to `weekly.html` on custom domains.
// Mirror every exported route as `<route>/index.html` so the extensionless URLs
// emitted by Next's Link component work both on direct visits and refreshes.
async function mirrorHtmlRoutes(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await mirrorHtmlRoutes(entryPath);
      continue;
    }

    if (
      !entry.isFile() ||
      !entry.name.endsWith(".html") ||
      entry.name === "index.html" ||
      entry.name === "404.html"
    ) {
      continue;
    }

    const routeDirectory = entryPath.slice(0, -".html".length);
    await mkdir(routeDirectory, { recursive: true });
    await cp(entryPath, path.join(routeDirectory, "index.html"), { force: true });
  }
}

await mirrorHtmlRoutes(clientDir);

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

for (const route of ["weekly", "archive", "overviews", "en/weekly"]) {
  await access(path.join(clientDir, route, "index.html"));
}

console.log(`Prepared and verified ${assetUrls.length} GitHub Pages assets.`);
