import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import ts from "typescript";

const issueDir = path.resolve("app/data/issues");
const assetDir = path.resolve("app/data/assets");
const WIDTH = 1600;
const HEIGHT = 2000;
const INK = "#163f32";
const GREEN = "#2b8c61";
const LINE = "#b8d8c7";
const PAPER = "#f6faf7";
const PALE = "#e6f4eb";
const HEADER = "#d7ecdf";

function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function charWidth(char) {
  if (/\s/u.test(char)) return 0.32;
  if (/[\u2e80-\u9fff\uff00-\uffef]/u.test(char)) return 1;
  if (/[A-Z0-9]/u.test(char)) return 0.66;
  if (/[a-z]/u.test(char)) return 0.55;
  return 0.48;
}

function wrapText(value, maxUnits, maxLines = 6) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (!text) return [];
  const chars = Array.from(text);
  const lines = [];
  let start = 0;

  while (start < chars.length && lines.length < maxLines) {
    let width = 0;
    let end = start;
    let lastBreak = -1;
    while (end < chars.length) {
      const next = width + charWidth(chars[end]);
      if (next > maxUnits && end > start) break;
      width = next;
      if (/[\s/·、，；：,:;\-–—]/u.test(chars[end])) lastBreak = end;
      end += 1;
    }
    if (end < chars.length && lastBreak >= start + 2) end = lastBreak + 1;
    lines.push(chars.slice(start, end).join("").trim());
    start = end;
    while (chars[start] === " ") start += 1;
  }

  if (start < chars.length && lines.length) {
    lines[lines.length - 1] = `${lines.at(-1).replace(/[，,;； ]+$/u, "")}…`;
  }
  return lines;
}

function textBlock({ x, y, lines, size, lineHeight, weight = 400, fill = INK, family = "Arial, PingFang SC, Microsoft YaHei, sans-serif" }) {
  if (!lines.length) return "";
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="${family}" font-size="${size}" font-weight="${weight}">${lines.map((line, index) => `<tspan x="${x}" dy="${index ? lineHeight : 0}">${escapeXml(line)}</tspan>`).join("")}</text>`;
}

function normalizeDate(value) {
  return String(value ?? "")
    .replace(/[（(].*?[）)]/g, "")
    .replaceAll(".", "/")
    .trim();
}

function trendLines(observation) {
  const parts = String(observation)
    .split(/[。；]/u)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 4);
  return parts.length ? parts : [String(observation)];
}

function buildSvg(issue) {
  const items = issue.items.zh.slice(0, 9);
  if (items.length !== 9) throw new Error(`${issue.slug} must contain exactly 9 Chinese picks`);
  for (const item of items) {
    const required = [item.name, item.area, item.summary, item.published ?? item.date, item.org, item.url];
    if (required.some((value) => !String(value ?? "").trim())) {
      throw new Error(`${issue.slug}/${item.name} has a missing overview field`);
    }
    if (/^(未知|unknown|待补充)$/iu.test(String(item.org).trim())) {
      throw new Error(`${issue.slug}/${item.name} has an unverified organization`);
    }
  }

  const left = 42;
  const tableTop = 228;
  const headHeight = 58;
  const rowHeight = 142;
  const columns = [72, 320, 190, 535, 135, 264];
  const starts = [left];
  for (let index = 0; index < columns.length - 1; index += 1) starts.push(starts[index] + columns[index]);
  const tableWidth = columns.reduce((sum, width) => sum + width, 0);
  const rowsBottom = tableTop + headHeight + rowHeight * items.length;
  const trendTop = rowsBottom + 25;
  const trendHeight = HEIGHT - trendTop - 55;
  const dateRange = `${issue.dateStart.replaceAll(".", "/")}–${issue.dateEnd.slice(5).replaceAll(".", "/")}`;
  const trend = trendLines(issue.observation.zh);

  const svg = [];
  svg.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-labelledby="title desc">`);
  svg.push(`<title id="title">Benchmark 精选周刊 W${issue.week} 总览</title><desc id="desc">第 ${issue.issue} 期九项 Benchmark 与 Dataset 总览</desc>`);
  svg.push(`<rect width="${WIDTH}" height="${HEIGHT}" fill="${PAPER}"/>`);
  svg.push(textBlock({ x: left, y: 74, lines: ["Benchmark 精选周刊"], size: 48, lineHeight: 50, weight: 760 }));
  svg.push(textBlock({ x: left, y: 118, lines: [`第 ${String(issue.issue).padStart(2, "0")} 期  ·  ${dateRange}  ·  W${issue.week}`], size: 24, lineHeight: 28, weight: 650, fill: "#447160" }));
  svg.push(textBlock({ x: left, y: 162, lines: ["每周精选新发布的 benchmark 和数据集"], size: 21, lineHeight: 24, fill: "#54796b" }));
  svg.push(textBlock({ x: 860, y: 162, lines: ["Weekly picks of newly released benchmarks and datasets"], size: 18, lineHeight: 22, fill: "#628276" }));
  svg.push(textBlock({ x: left, y: 210, lines: ["本周 Benchmark Top 9"], size: 28, lineHeight: 30, weight: 740 }));
  svg.push(`<rect x="${left}" y="${tableTop}" width="${tableWidth}" height="${headHeight}" fill="${HEADER}" stroke="${LINE}"/>`);
  const headers = ["排名", "Benchmark / Dataset", "方向", "简要介绍", "发布时间", "发布机构"];
  headers.forEach((header, index) => svg.push(textBlock({ x: starts[index] + 14, y: tableTop + 37, lines: [header], size: 20, lineHeight: 22, weight: 700 })));

  items.forEach((item, index) => {
    const y = tableTop + headHeight + index * rowHeight;
    const fill = index < 3 ? PALE : index % 2 ? "#fbfdfb" : PAPER;
    svg.push(`<rect x="${left}" y="${y}" width="${tableWidth}" height="${rowHeight}" fill="${fill}" stroke="${LINE}"/>`);
    for (let column = 1; column < starts.length; column += 1) svg.push(`<line x1="${starts[column]}" y1="${y}" x2="${starts[column]}" y2="${y + rowHeight}" stroke="${LINE}"/>`);
    svg.push(textBlock({ x: starts[0] + 28, y: y + 58, lines: [String(item.rank)], size: 28, lineHeight: 30, weight: 760, fill: GREEN }));

    const nameLines = wrapText(item.name, 12, 2);
    svg.push(textBlock({ x: starts[1] + 14, y: y + 30, lines: nameLines, size: 24, lineHeight: 26, weight: 760 }));
    const authorY = y + 30 + nameLines.length * 26 + 2;
    const authorLines = wrapText(item.author ?? "", 17, 2);
    svg.push(textBlock({ x: starts[1] + 14, y: authorY, lines: authorLines, size: 16, lineHeight: 18, fill: "#56806f" }));
    svg.push(textBlock({ x: starts[1] + 14, y: authorY + authorLines.length * 18 + 2, lines: wrapText(item.url, 19, 2), size: 14, lineHeight: 16, fill: GREEN }));

    svg.push(textBlock({ x: starts[2] + 14, y: y + 34, lines: wrapText(item.area, 9.5, 5), size: 17, lineHeight: 22, fill: "#365f50" }));
    svg.push(textBlock({ x: starts[3] + 14, y: y + 34, lines: wrapText(item.summary, 23, 4), size: 20, lineHeight: 27 }));
    svg.push(textBlock({ x: starts[4] + 14, y: y + 38, lines: wrapText(normalizeDate(item.published ?? item.date), 5.5, 3), size: 18, lineHeight: 24, fill: "#476c5e" }));
    svg.push(textBlock({ x: starts[5] + 14, y: y + 34, lines: wrapText(item.org ?? "", 11, 4), size: 18, lineHeight: 24, fill: "#476c5e" }));
  });

  svg.push(`<rect x="${left}" y="${trendTop}" width="${tableWidth}" height="${trendHeight}" fill="${PALE}" stroke="${LINE}"/>`);
  svg.push(textBlock({ x: left + 20, y: trendTop + 48, lines: ["本周 Benchmark 变化趋势"], size: 26, lineHeight: 30, weight: 740 }));
  let trendY = trendTop + 88;
  trend.forEach((entry, index) => {
    const lines = wrapText(`${index + 1}. ${entry}`, 70, 3);
    svg.push(textBlock({ x: left + 22, y: trendY, lines, size: 20, lineHeight: 28, fill: "#365f50" }));
    trendY += lines.length * 28 + 12;
  });
  svg.push(textBlock({ x: WIDTH - 170, y: HEIGHT - 20, lines: ["来源：心豆茶"], size: 16, lineHeight: 18, weight: 650, fill: "#477362" }));
  svg.push("</svg>");
  return svg.join("");
}

async function loadIssue(filePath) {
  const source = await readFile(filePath, "utf8");
  const result = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    fileName: filePath,
  });
  const encoded = Buffer.from(result.outputText).toString("base64");
  return (await import(`data:text/javascript;base64,${encoded}#${path.basename(filePath)}`)).default;
}

const issueFiles = (await readdir(issueDir)).filter((name) => /^w\d+\.ts$/.test(name)).sort();
for (const file of issueFiles) {
  const issue = await loadIssue(path.join(issueDir, file));
  const outputDir = path.join(assetDir, issue.slug);
  const svgPath = path.join(outputDir, "overview.svg");
  const pngPath = path.join(outputDir, "overview.png");
  const svg = buildSvg(issue);
  await mkdir(outputDir, { recursive: true });
  await writeFile(svgPath, svg);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(pngPath);
  console.log(`Generated ${issue.slug}: ${pngPath}`);
}
