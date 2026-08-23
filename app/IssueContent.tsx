"use client";

import { useState } from "react";
import type { DigestIssue } from "./data";

export function IssueContent({ issue, lang, archived = false }: { issue: DigestIssue; lang: "zh" | "en"; archived?: boolean }) {
  const [filter, setFilter] = useState<"All" | "Benchmark" | "Dataset">("All");
  const items = issue.items[lang];
  const hasKinds = items.some((item) => item.kind);
  const visible = items.filter((item) => filter === "All" || item.kind === filter);
  const benchmarkCount = items.filter((item) => item.kind === "Benchmark").length;
  const datasetCount = items.filter((item) => item.kind === "Dataset").length;
  const zh = lang === "zh";

  return <>
    <section className={archived ? "issue-hero" : "weekly-head"}>
      {archived && <a href={zh ? "/archive" : "/en/archive"} className="back-link">← {zh ? "返回归档" : "Back to archive"}</a>}
      <div className="eyebrow"><span className="pulse" /> ISSUE {String(issue.issue).padStart(2, "0")} · {issue.year} / W{issue.week}</div>
      <h1>{zh ? <>Benchmark &amp; Dataset<br />精选周刊</> : <>Benchmark &amp; Dataset<br />Weekly Digest</>}</h1>
      <div className="weekly-meta">
        <div><span>{zh ? "时间范围" : "DATE RANGE"}</span><strong>{issue.dateStart} — {issue.dateEnd}</strong></div>
        <div><span>{zh ? (archived ? "本期入选" : "本周入选") : archived ? "SELECTED IN THIS ISSUE" : "SELECTED THIS WEEK"}</span><strong>{String(items.length).padStart(2, "0")} {zh ? "项" : "PICKS"}</strong></div>
        <div><span>{hasKinds ? "BENCHMARK / DATASET" : zh ? "主题" : "THEME"}</span><strong>{hasKinds ? `${String(benchmarkCount).padStart(2, "0")} / ${String(datasetCount).padStart(2, "0")}` : issue.theme[lang]}</strong></div>
      </div>
    </section>

    {issue.overview && <section className="weekly-summary">
      <div className="summary-lead"><span className="section-no">01 / OVERVIEW</span><h2>{zh ? "入选内容总结" : "Selection overview"}</h2></div>
      <div className="summary-grid">{issue.overview[lang].map((entry) => <div className="summary-stat" key={entry.title}><strong>{entry.count}</strong><span>{entry.title}</span><p>{entry.text}</p></div>)}</div>
    </section>}

    {archived && !issue.overview ? <section className="issue-note"><span>{zh ? "本期观察" : "ISSUE INSIGHT"}</span><p>{issue.observation[lang]}</p></section> : <section className="weekly-trend">
      <span className="trend-index">{zh ? "本期观察" : "ISSUE INSIGHT"}</span>
      <div><h2>{zh ? (archived ? "本期趋势观察" : "本周趋势观察") : archived ? "Trend insight" : "This week’s trend"}</h2><p>{issue.observation[lang]}</p></div>
      {issue.observation.quote && <blockquote>{issue.observation.quote}</blockquote>}
    </section>}

    <section className={hasKinds ? "picks-section" : "legacy-picks"}>
      <div className="picks-head"><div><span className="section-no">{issue.overview ? "02 / TOP PICKS" : `TOP ${String(items.length).padStart(2, "0")} / W${issue.week}`}</span><h2>{zh ? (archived ? `第 ${String(issue.issue).padStart(2, "0")} 期精选` : "本周精选") : archived ? `Issue ${String(issue.issue).padStart(2, "0")} selections` : "This week’s selections"}</h2>{hasKinds && <p>{zh ? "按研究价值、评测创新和可借鉴程度综合排序" : "Ranked by research value, evaluation innovation and practical transferability"}</p>}</div>
        {hasKinds && <div className="filter-row" role="group" aria-label={zh ? "内容类型筛选" : "Filter by content type"}>{(["All", "Benchmark", "Dataset"] as const).map((value) => <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{zh && value === "All" ? "全部" : value}</button>)}</div>}
      </div>
      {hasKinds ? <div className="editorial-list">{visible.map((item) => <article className={`digest-card ${item.rank <= 3 ? "featured" : ""}`} key={item.rank}>
        <div className="card-rank"><span>{String(item.rank).padStart(2, "0")}</span>{item.rank <= 3 && <small>TOP PICK</small>}</div>
        <div className="card-body"><div className="card-tags"><span>{item.kind}</span><span>{item.area}</span>{item.attention && <span>{item.attention}</span>}</div><div className="title-row"><h3>{item.name}</h3><div className="paper-links"><a className="paper-link" href={item.url} target="_blank" rel="noreferrer">{item.url.includes("arxiv.org") ? "arXiv" : zh ? "原文" : "Source"} <span>↗</span></a>{item.projectUrl && <a className="paper-link secondary" href={item.projectUrl} target="_blank" rel="noreferrer">{zh ? "项目 / 数据" : "Project / Data"} <span>↗</span></a>}</div></div><p className="card-summary">{item.summary}</p>
          <dl className="basic-info"><div><dt>{zh ? "作者" : "AUTHOR"}</dt><dd>{item.author}</dd></div><div><dt>{zh ? "机构" : "INSTITUTION"}</dt><dd>{item.org}</dd></div><div><dt>{zh ? "发布时间" : "PUBLISHED"}</dt><dd>{item.published}</dd></div></dl>
          <div className="detail-grid"><div><span>{zh ? "规模 / 特点" : "SCALE / DESIGN"}</span><p>{item.scale}</p></div><div><span>{zh ? "评测方式 / 指标" : "EVALUATION / METRICS"}</span><p>{item.evaluation}</p></div>{item.result && <div><span>{zh ? "代表性结果" : "KEY RESULT"}</span><p>{item.result}</p></div>}<div><span>{zh ? "为什么值得关注" : "WHY IT MATTERS"}</span><p>{item.why}</p></div><div className="takeaway"><span>{zh ? "可借鉴点" : "DESIGN TAKEAWAYS"}</span><p>{item.takeaway}</p></div></div>
        </div></article>)}</div> : <div className="legacy-grid">{visible.map((item) => <article key={item.rank}><span className="legacy-rank">{String(item.rank).padStart(2, "0")}</span><div><small>{item.area} · {item.date}</small><div className="legacy-title"><h3>{item.name}</h3><a href={item.url} target="_blank" rel="noreferrer">arXiv ↗</a></div><p>{item.summary}</p></div></article>)}</div>}
    </section>
  </>;
}
