import Image from "next/image";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export default function Home() {
  return <main>
    <SiteHeader current="home" />
    <section className="cover-hero">
      <div className="cover-copy">
        <div className="eyebrow"><span className="pulse" /> CURATED EVERY SUNDAY</div>
        <h1>发现下一代<br /><em>Evaluation</em></h1>
        <p>每周从新发布的研究中，筛出真正值得关注的 Benchmark 与 Dataset，并提炼可以迁移到自研评测中的设计方法。</p>
        <div className="cover-actions"><a className="primary-btn" href="/weekly">阅读本周精选 <span>↗</span></a><a className="text-btn" href="/archive">浏览往期归档</a></div>
      </div>
      <div className="cover-art">
        <div className="issue-stamp"><small>CURRENT ISSUE</small><strong>W34</strong><span>09 PICKS / 07 FIELDS</span></div>
        <Image src="/cover-illustration.png" alt="由数据卡片、坐标和评测节点构成的抽象研究插图" width={1200} height={900} priority />
      </div>
    </section>

    <section className="intro-block">
      <span className="section-no">01 / ABOUT</span>
      <h2>不是论文列表，<br />是可复用的评测洞察。</h2>
      <div><p>我们关注的不只是“发布了什么”，更是新的评测如何定义任务、构造数据、验证结果，以及它代表了怎样的研究趋势。</p></div>
    </section>

    <section className="method-strip">
      <div><span>01</span><strong>搜集</strong><p>覆盖 Agent、Coding、多模态、具身与模型评估等重点方向。</p></div>
      <div><span>02</span><strong>筛选</strong><p>优先选择任务真实、验证明确、设计有创新的公开项目。</p></div>
      <div><span>03</span><strong>提炼</strong><p>保留“为什么值得关注”与“可以如何借鉴”两类核心判断。</p></div>
    </section>

    <section className="cover-latest">
      <div><span className="section-no">02 / LATEST</span><h2>第 02 期已经发布</h2><p>2026.08.17 — 08.23 · 9 项精选</p></div>
      <div className="latest-topics"><span>AI Scientist</span><span>General Agent</span><span>Coding Agent</span><span>Agent Memory</span><span>Safety</span><span>Embodied AI</span></div>
      <a href="/weekly">进入本周内容 <span>↗</span></a>
    </section>
    <SiteFooter />
  </main>;
}
