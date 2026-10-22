import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the latest W42 issue on the homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Benchmark &amp; Dataset 精选周刊/);
  assert.match(html, /CURRENT ISSUE/);
  assert.match(html, />W<!-- -->42</);
  assert.match(html, /第 <!-- -->10<!-- --> 期已经发布/);
});

test("renders current and archived issue content in both languages", async () => {
  const [weekly, archived, english] = await Promise.all([
    render("/weekly"),
    render("/archive/w41"),
    render("/en/weekly"),
  ]);

  assert.equal(weekly.status, 200);
  assert.equal(archived.status, 200);
  assert.equal(english.status, 200);

  assert.match(await weekly.text(), /FDE-Gym/);
  assert.match(await archived.text(), /BrickBench/);
  assert.match(await english.text(), /From question answering to systems in motion/);
});

test("renders the overview gallery in both languages with issue links and images", async () => {
  const [chinese, english] = await Promise.all([
    render("/overviews"),
    render("/en/overviews"),
  ]);

  assert.equal(chinese.status, 200);
  assert.equal(english.status, 200);

  const chineseHtml = await chinese.text();
  const englishHtml = await english.text();
  assert.match(chineseHtml, /一张图/);
  assert.match(chineseHtml, /href="\/weekly"/);
  assert.match(chineseHtml, /href="\/archive\/w33"/);
  assert.match(chineseHtml, /src="\/overviews\/w42\.png"/);
  assert.match(englishHtml, /One image/);
  assert.match(englishHtml, /href="\/en\/weekly"/);
  assert.match(englishHtml, /href="\/en\/archive\/w33"/);
});
