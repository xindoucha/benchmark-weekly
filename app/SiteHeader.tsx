import { sitePath } from "./site-path";

export function SiteHeader({ current, lang = "zh", alternateHref }: { current: "home" | "weekly" | "archive" | "overviews"; lang?: "zh" | "en"; alternateHref?: string }) {
  const base = lang === "en" ? "/en" : "";
  const labels = lang === "en" ? { home: "Home", weekly: "Latest Issue", archive: "Archive", overviews: "Overview Gallery", read: "Read the latest", toggle: "中" } : { home: "首页", weekly: "本周内容", archive: "往期归档", overviews: "总览图", read: "阅读本期", toggle: "EN" };
  const section = current === "home" ? "" : current;
  const toggleHref = alternateHref ?? (lang === "en" ? `/${section}` : `/en${section ? `/${section}` : ""}`);
  return <header className="topbar">
    <a className="brand" href={sitePath(base || "/")}><span className="brand-mark" aria-hidden="true"><b>B</b><i /></span><span>Benchmark Weekly</span></a>
    <nav aria-label={lang === "en" ? "Primary navigation" : "主导航"}>
      <a className={current === "home" ? "active" : ""} href={sitePath(base || "/")}>{labels.home}</a>
      <a className={current === "weekly" ? "active" : ""} href={sitePath(`${base}/weekly`)}>{labels.weekly}</a>
      <a className={current === "archive" ? "active" : ""} href={sitePath(`${base}/archive`)}>{labels.archive}</a>
      <a className={current === "overviews" ? "active" : ""} href={sitePath(`${base}/overviews`)}>{labels.overviews}</a>
    </nav>
    <div className="nav-actions">
      <a className="github-link" href="https://github.com/xindoucha/benchmark-weekly" target="_blank" rel="noreferrer" aria-label={lang === "en" ? "View this project on GitHub" : "在 GitHub 查看本项目"} title="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.9c.85 0 1.69.12 2.49.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.5A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>
      </a>
      <a className="lang-toggle" href={sitePath(toggleHref)} aria-label={lang === "en" ? "切换至中文" : "Switch to English"}>{labels.toggle}</a>
      <a className="nav-cta" href={sitePath(`${base}/weekly`)}>{labels.read} <span>↗</span></a>
    </div>
  </header>;
}
