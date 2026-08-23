import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export default function ArchivePage() {
  return <main className="archive-page">
    <SiteHeader current="archive" />
    <section className="archive-hero"><span className="eyebrow">THE ARCHIVE · SINCE 2026</span><h1>评测趋势，<br /><em>按周沉淀。</em></h1><p>每一期都记录当周最值得关注的 Benchmark 与 Dataset，以及它们带来的方法变化。</p></section>
    <section className="archive-list">
      <div className="archive-year"><span>2026</span><strong>02 ISSUES</strong></div>
      <a href="/weekly" className="archive-row current"><span className="archive-week">W34</span><div><small>2026.08.17 — 08.23 · 第 02 期</small><h2>真实工作流、持续状态与可执行验证</h2><p>ASI-Bench · StartupBench · SWE-bench Science · StateMemBench · CHIVE · HarnessRisk · HiPHI · ReRef-3D · RuleMaze</p></div><span className="archive-count">09<br /><small>PICKS</small></span><span className="archive-arrow">↗</span></a>
      <div className="archive-row"><span className="archive-week">W33</span><div><small>2026.08.10 — 08.16 · 第 01 期</small><h2>从模型能力走向系统级 Evaluation</h2><p>首期内容已归档至 Benchmark 精选周刊资料库</p></div><span className="archive-count">09<br /><small>PICKS</small></span><span className="archive-status">LIBRARY</span></div>
      <div className="archive-row upcoming"><span className="archive-week">W35</span><div><small>2026.08.24 — 08.30</small><h2>下一期正在收集中</h2><p>预计周日发布</p></div><span className="archive-count"><i className="pulse" /></span><span className="archive-status">NEXT</span></div>
    </section>
    <SiteFooter />
  </main>;
}
