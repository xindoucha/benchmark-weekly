import { SiteFooter } from "../../../SiteFooter";
import { SiteHeader } from "../../../SiteHeader";
import { w33En } from "../../../w33-data";

export default function EnglishW33Page() {
  return <main><SiteHeader current="archive" lang="en" alternateHref="/archive/w33" />
    <section className="issue-hero"><a href="/en/archive" className="back-link">← Back to archive</a><div className="eyebrow"><span className="pulse" /> ISSUE 01 · 2026 / W33</div><h1>Benchmark &amp; Dataset<br />Weekly Digest</h1><div className="weekly-meta"><div><span>DATE RANGE</span><strong>2026.08.10 — 08.16</strong></div><div><span>SELECTED</span><strong>09 RELEASES</strong></div><div><span>THEME</span><strong>Harness Evaluation</strong></div></div></section>
    <section className="issue-note"><span>ISSUE OBSERVATION</span><p>Evaluation is expanding from the model alone to the full agent system: prompts, tools, memory and control flow are becoming capabilities that can be measured and optimized directly.</p></section>
    <section className="legacy-picks"><div className="picks-head"><div><span className="section-no">TOP 09 / W33</span><h2>Issue 01 picks</h2></div></div><div className="legacy-grid">{w33En.map(item => <article key={item.rank}><span className="legacy-rank">{String(item.rank).padStart(2,"0")}</span><div><small>{item.area} · {item.date}</small><div className="legacy-title"><h3>{item.name}</h3><a href={item.url} target="_blank" rel="noreferrer">arXiv ↗</a></div><p>{item.summary}</p></div></article>)}</div></section>
    <SiteFooter lang="en" />
  </main>;
}
