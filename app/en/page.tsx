import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { currentIssue } from "../data";
import { sitePath } from "../site-path";

export default function EnglishHome() {
  const items = currentIssue.items.en;
  const picks = String(items.length).padStart(2, "0");
  const topics = [...new Set(items.map((item) => item.area.split("/")[0].trim()))];
  const fields = String(topics.length).padStart(2, "0");

  return <main><SiteHeader current="home" lang="en" />
    <section className="cover-hero"><div className="cover-copy"><div className="eyebrow"><span className="pulse" /> CURATED EVERY SUNDAY</div><h1>Discover what’s next<br /><em>in evaluation</em></h1><p>Each week, we select the most noteworthy new benchmarks and datasets—and distill the evaluation methods worth carrying into your own work.</p><div className="cover-actions"><a className="primary-btn" href={sitePath("/en/weekly")}>Read the latest issue <span>↗</span></a><a className="text-btn" href={sitePath("/en/archive")}>Explore the archive</a></div></div><div className="cover-art"><div className="issue-stamp"><small>CURRENT ISSUE</small><strong>W{currentIssue.week}</strong><span>{picks} PICKS / {fields} FIELDS</span></div><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cover-illustration.png`} alt="An editorial illustration of evaluation cards, data plots and research notes" width={1200} height={900} priority /></div></section>
    <section className="intro-block"><span className="section-no">01 / ABOUT</span><h2>More than a paper list.<br />Evaluation insights you can reuse.</h2><div><p>We look beyond what was released to examine how each evaluation defines its tasks, builds its data, verifies outcomes and reflects broader shifts in research.</p></div></section>
    <section className="method-strip"><div><span>01</span><strong>Collect</strong><p>Track new work across agents, coding, multimodality, embodied AI and model evaluation.</p></div><div><span>02</span><strong>Select</strong><p>Prioritize public work with realistic tasks, rigorous validation and genuinely novel evaluation design.</p></div><div><span>03</span><strong>Distill</strong><p>Focus on two questions: why it matters and which design ideas are worth reusing.</p></div></section>
    <section className="cover-latest"><div><span className="section-no">02 / LATEST</span><h2>Issue {String(currentIssue.issue).padStart(2, "0")} is now available</h2><p>{currentIssue.dateStart} — {currentIssue.dateEnd.slice(5)} · {items.length} selected projects</p></div><div className="latest-topics">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div><a href={sitePath("/en/weekly")}>View the latest issue <span>↗</span></a></section>
    <SiteFooter lang="en" /></main>;
}
