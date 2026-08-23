import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export default function EnglishHome() {
  return <main><SiteHeader current="home" lang="en" />
    <section className="cover-hero"><div className="cover-copy"><div className="eyebrow"><span className="pulse" /> CURATED EVERY SUNDAY</div><h1>Discover the next<br /><em>Evaluation</em></h1><p>Every week, we surface the benchmarks and datasets that genuinely matter—and extract evaluation ideas you can reuse in your own work.</p><div className="cover-actions"><a className="primary-btn" href="/en/weekly">Read this week <span>↗</span></a><a className="text-btn" href="/en/archive">Browse the archive</a></div></div><div className="cover-art"><div className="issue-stamp"><small>CURRENT ISSUE</small><strong>W34</strong><span>09 PICKS / 07 FIELDS</span></div><Image src="/cover-illustration.png" alt="An editorial illustration of evaluation cards, data plots and research notes" width={1200} height={900} priority /></div></section>
    <section className="intro-block"><span className="section-no">01 / ABOUT</span><h2>Not a paper list.<br />Reusable evaluation insight.</h2><div><p>We look beyond what was released to understand how new evaluations define tasks, construct data, verify outcomes and signal shifts in research.</p><p>Content comes from the weekly <strong>Weekly Benchmark Digest</strong> and is archived in the research library.</p></div></section>
    <section className="method-strip"><div><span>01</span><strong>Collect</strong><p>Track new work across agents, coding, multimodality, embodied AI and model evaluation.</p></div><div><span>02</span><strong>Curate</strong><p>Prioritize realistic tasks, explicit validation and genuinely novel evaluation design.</p></div><div><span>03</span><strong>Extract</strong><p>Preserve two judgments: why it matters and what builders can borrow.</p></div></section>
    <section className="cover-latest"><div><span className="section-no">02 / LATEST</span><h2>Issue 02 is live</h2><p>2026.08.17 — 08.23 · 9 selected releases</p></div><div className="latest-topics"><span>AI Scientist</span><span>General Agent</span><span>Coding Agent</span><span>Agent Memory</span><span>Safety</span><span>Embodied AI</span></div><a href="/en/weekly">Open this week <span>↗</span></a></section>
    <SiteFooter lang="en" /></main>;
}
