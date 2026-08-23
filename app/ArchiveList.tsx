import { issues } from "./data";

function addDays(value: string, days: number) {
  const date = new Date(`${value.replaceAll(".", "-")}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return `${date.getUTCFullYear()}.${String(date.getUTCMonth() + 1).padStart(2, "0")}.${String(date.getUTCDate()).padStart(2, "0")}`;
}

export function ArchiveList({ lang }: { lang: "zh" | "en" }) {
  const zh = lang === "zh";
  const newest = issues[0];
  const nextStart = addDays(newest.dateEnd, 1);
  const nextEnd = addDays(newest.dateEnd, 7);

  return <section className="archive-list">
    <div className="archive-year"><span>{newest.year}</span><strong>{String(issues.length).padStart(2, "0")} ISSUES</strong></div>
    {issues.map((issue, index) => {
      const href = index === 0 ? (zh ? "/weekly" : "/en/weekly") : `${zh ? "" : "/en"}/archive/${issue.slug}`;
      return <a href={href} className="archive-row current" key={issue.slug}><span className="archive-week">W{issue.week}</span><div><small>{issue.dateStart} — {issue.dateEnd} · {zh ? `第 ${String(issue.issue).padStart(2, "0")} 期` : `ISSUE ${String(issue.issue).padStart(2, "0")}`}</small><h2>{issue.theme[lang]}</h2><p>{issue.items[lang].map((item) => item.name).join(" · ")}</p></div><span className="archive-count">{String(issue.items[lang].length).padStart(2, "0")}<br /><small>PICKS</small></span><span className="archive-arrow">↗</span></a>;
    })}
    <div className="archive-row upcoming"><span className="archive-week">W{newest.week + 1}</span><div><small>{nextStart} — {nextEnd}</small><h2>{zh ? "下一期正在收集中" : "The next issue is being curated"}</h2><p>{zh ? "预计周日发布" : "Scheduled for Sunday"}</p></div><span className="archive-count"><i className="pulse" /></span><span className="archive-status">NEXT</span></div>
  </section>;
}
