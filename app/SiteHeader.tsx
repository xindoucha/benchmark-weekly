import { sitePath } from "./site-path";

export function SiteHeader({ current, lang = "zh", alternateHref }: { current: "home" | "weekly" | "archive"; lang?: "zh" | "en"; alternateHref?: string }) {
  const base = lang === "en" ? "/en" : "";
  const labels = lang === "en" ? { home: "Home", weekly: "Latest Issue", archive: "Archive", read: "Read the latest", toggle: "中" } : { home: "首页", weekly: "本周内容", archive: "往期归档", read: "阅读本期", toggle: "EN" };
  const toggleHref = alternateHref ?? (lang === "en" ? (current === "home" ? "/" : `/${current === "weekly" ? "weekly" : "archive"}`) : (current === "home" ? "/en" : `/en/${current === "weekly" ? "weekly" : "archive"}`));
  return <header className="topbar">
    <a className="brand" href={sitePath(base || "/")}><span className="brand-mark" aria-hidden="true"><b>B</b><i /></span><span>Benchmark Weekly</span></a>
    <nav aria-label={lang === "en" ? "Primary navigation" : "主导航"}>
      <a className={current === "home" ? "active" : ""} href={sitePath(base || "/")}>{labels.home}</a>
      <a className={current === "weekly" ? "active" : ""} href={sitePath(`${base}/weekly`)}>{labels.weekly}</a>
      <a className={current === "archive" ? "active" : ""} href={sitePath(`${base}/archive`)}>{labels.archive}</a>
    </nav>
    <div className="nav-actions"><a className="lang-toggle" href={sitePath(toggleHref)} aria-label={lang === "en" ? "切换至中文" : "Switch to English"}>{labels.toggle}</a><a className="nav-cta" href={sitePath(`${base}/weekly`)}>{labels.read} <span>↗</span></a></div>
  </header>;
}
