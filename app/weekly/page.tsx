"use client";

import { useState } from "react";
import { digestItems } from "../data";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export default function WeeklyPage() {
  const [filter, setFilter] = useState<"全部" | "Benchmark" | "Dataset">("全部");
  const visible = digestItems.filter((item) => filter === "全部" || item.kind === filter);
  return <main>
    <SiteHeader current="weekly" />
    <section className="weekly-head">
      <div className="eyebrow"><span className="pulse" /> ISSUE 02 · 2026 / W34</div>
      <h1>Benchmark &amp; Dataset<br />精选周刊</h1>
      <div className="weekly-meta">
        <div><span>时间范围</span><strong>2026.08.17 — 08.23</strong></div>
        <div><span>本周入选</span><strong>09 项</strong></div>
        <div><span>Benchmark / Dataset</span><strong>07 / 02</strong></div>
      </div>
    </section>

    <section className="weekly-summary">
      <div className="summary-lead"><span className="section-no">01 / OVERVIEW</span><h2>入选内容总结</h2></div>
      <div className="summary-grid">
        <div className="summary-stat"><strong>3</strong><span>Agent 系统评测</span><p>科研 Agent、通用 Agent 与 Coding Agent 都开始进入更真实、更完整的工作流。</p></div>
        <div className="summary-stat"><strong>2</strong><span>长期状态与安全</span><p>Memory 不再只看召回，Safety 也从单次攻击扩展到完整生命周期。</p></div>
        <div className="summary-stat"><strong>4</strong><span>空间、具身与解释</span><p>高精度数据、物理有效性和可执行规则成为新的设计重心。</p></div>
      </div>
    </section>

    <section className="weekly-trend">
      <span className="trend-index">TREND / 01</span>
      <div><h2>本周趋势观察</h2><p>评测正在从<strong>“最终答案是否正确”</strong>，转向对完整过程的验证：任务是否来自真实需求、产物能否执行、状态是否持续有效、规则是否真正被遵守。</p></div>
      <blockquote>Evaluation is becoming<br /><em>executable, stateful &amp; real.</em></blockquote>
    </section>

    <section className="picks-section">
      <div className="picks-head"><div><span className="section-no">02 / TOP PICKS</span><h2>本周精选</h2><p>按研究价值、评测创新和可借鉴程度综合排序</p></div><div className="filter-row" role="group" aria-label="内容类型筛选">{(["全部","Benchmark","Dataset"] as const).map((label) => <button key={label} className={filter === label ? "active" : ""} onClick={() => setFilter(label)}>{label}</button>)}</div></div>
      <div className="editorial-list">
        {visible.map((item) => <article className={`digest-card ${item.rank <= 3 ? "featured" : ""}`} key={item.rank}>
          <div className="card-rank"><span>{String(item.rank).padStart(2,"0")}</span>{item.rank <= 3 && <small>TOP PICK</small>}</div>
          <div className="card-body">
            <div className="card-tags"><span>{item.kind}</span><span>{item.area}</span></div>
            <div className="title-row"><h3>{item.name}</h3><a className="paper-link" href={item.url} target="_blank" rel="noreferrer" aria-label={`阅读 ${item.name} 原始发布`}>{item.url.includes("arxiv.org") ? "arXiv" : "原文"} <span>↗</span></a></div><p className="card-summary">{item.summary}</p>
            <dl className="basic-info"><div><dt>作者</dt><dd>{item.author}</dd></div><div><dt>机构</dt><dd>{item.org}</dd></div><div><dt>发布时间</dt><dd>{item.published}</dd></div></dl>
            <div className="detail-grid"><div><span>规模 / 特点</span><p>{item.scale}</p></div><div><span>评测方式</span><p>{item.evaluation}</p></div><div><span>为什么值得关注</span><p>{item.why}</p></div><div className="takeaway"><span>可借鉴点</span><p>{item.takeaway}</p></div></div>
          </div>
        </article>)}
      </div>
    </section>
    <SiteFooter />
  </main>;
}
