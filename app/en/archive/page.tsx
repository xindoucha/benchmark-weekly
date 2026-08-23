import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";

export default function EnglishArchive() {
  return <main className="archive-page"><SiteHeader current="archive" lang="en" />
    <section className="archive-hero"><span className="eyebrow">THE ARCHIVE · SINCE 2026</span><h1>Evaluation shifts,<br /><em>week by week.</em></h1><p>Each issue records the week’s most useful benchmarks and datasets—and the methodological changes they reveal.</p></section>
    <section className="archive-list"><div className="archive-year"><span>2026</span><strong>02 ISSUES</strong></div><a href="/en/weekly" className="archive-row current"><span className="archive-week">W34</span><div><small>2026.08.17 — 08.23 · ISSUE 02</small><h2>Real workflows, persistent state and executable verification</h2><p>ASI-Bench · StartupBench · SWE-bench Science · StateMemBench · CHIVE · HarnessRisk · HiPHI · ReRef-3D · RuleMaze</p></div><span className="archive-count">09<br /><small>PICKS</small></span><span className="archive-arrow">↗</span></a><div className="archive-row"><span className="archive-week">W33</span><div><small>2026.08.10 — 08.16 · ISSUE 01</small><h2>From model capability to system-level evaluation</h2><p>The first issue is archived in the Benchmark Weekly research library.</p></div><span className="archive-count">09<br /><small>PICKS</small></span><span className="archive-status">LIBRARY</span></div><div className="archive-row upcoming"><span className="archive-week">W35</span><div><small>2026.08.24 — 08.30</small><h2>The next issue is being curated</h2><p>Expected Sunday</p></div><span className="archive-count"><i className="pulse" /></span><span className="archive-status">NEXT</span></div></section>
    <SiteFooter lang="en" /></main>;
}
