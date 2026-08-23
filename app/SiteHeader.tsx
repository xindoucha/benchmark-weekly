import Link from "next/link";

export function SiteHeader({ current }: { current: "home" | "weekly" | "archive" }) {
  return <header className="topbar">
    <Link className="brand" href="/"><span className="brand-mark">B/</span><span>Benchmark Weekly</span></Link>
    <nav aria-label="主导航">
      <Link className={current === "home" ? "active" : ""} href="/">封面</Link>
      <Link className={current === "weekly" ? "active" : ""} href="/weekly">本周内容</Link>
      <Link className={current === "archive" ? "active" : ""} href="/archive">往期归档</Link>
    </nav>
    <Link className="nav-cta" href="/weekly">阅读本期 <span>↗</span></Link>
  </header>;
}
