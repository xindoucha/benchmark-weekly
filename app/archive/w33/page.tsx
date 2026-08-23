import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { w33Zh } from "../../w33-data";

export default function W33Page() {
  return <main><SiteHeader current="archive" alternateHref="/en/archive/w33" />
    <section className="issue-hero"><a href="/archive" className="back-link">← 返回归档</a><div className="eyebrow"><span className="pulse" /> ISSUE 01 · 2026 / W33</div><h1>Benchmark &amp; Dataset<br />精选周刊</h1><div className="weekly-meta"><div><span>时间范围</span><strong>2026.08.10 — 08.16</strong></div><div><span>本期入选</span><strong>09 项</strong></div><div><span>主题</span><strong>Harness Evaluation</strong></div></div></section>
    <section className="issue-note"><span>本期观察</span><p>评测对象开始从单一模型扩展到完整 Agent 系统：Prompt、Tools、Memory 与 Control Flow 正在成为可以被独立测量和优化的能力层。</p></section>
    <section className="legacy-picks"><div className="picks-head"><div><span className="section-no">TOP 09 / W33</span><h2>第 01 期精选</h2></div></div><div className="legacy-grid">{w33Zh.map(item => <article key={item.rank}><span className="legacy-rank">{String(item.rank).padStart(2,"0")}</span><div><small>{item.area} · {item.date}</small><div className="legacy-title"><h3>{item.name}</h3><a href={item.url} target="_blank" rel="noreferrer">arXiv ↗</a></div><p>{item.summary}</p></div></article>)}</div></section>
    <SiteFooter />
  </main>;
}
