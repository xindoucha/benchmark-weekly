import { issues } from "./data";
import { sitePath } from "./site-path";

export function OverviewGallery({ lang }: { lang: "zh" | "en" }) {
  const zh = lang === "zh";
  return <section className="overview-gallery" aria-label={zh ? "周刊总览图列表" : "Issue overview gallery"}>
    {issues.map((issue, index) => {
      const href = index === 0 ? (zh ? "/weekly" : "/en/weekly") : `${zh ? "" : "/en"}/archive/${issue.slug}`;
      return <a className="overview-card" href={sitePath(href)} key={issue.slug}>
        <div className="overview-frame">
          {/* Static export uses generated public assets, so a native image keeps GitHub Pages paths stable. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={sitePath(`/overviews/${issue.slug}.png`)} alt={zh ? `Benchmark 精选周刊第 ${issue.issue} 期 W${issue.week} 总览图` : `Benchmark Weekly issue ${issue.issue}, W${issue.week} overview`} loading={index < 2 ? "eager" : "lazy"} />
        </div>
        <div className="overview-card-meta"><div><span>W{issue.week} · {issue.dateStart}—{issue.dateEnd}</span><h2>{issue.theme[lang]}</h2></div><span className="overview-open">{zh ? "查看本期" : "Read issue"} ↗</span></div>
      </a>;
    })}
  </section>;
}
