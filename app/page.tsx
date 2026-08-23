"use client";

import { useMemo, useState } from "react";

type Item = {
  rank: number;
  name: string;
  kind: "Benchmark" | "Dataset";
  area: string;
  org: string;
  date: string;
  summary: string;
  insight: string;
  metric: string;
  url: string;
};

const items: Item[] = [
  { rank: 1, name: "ASI-Bench", kind: "Benchmark", area: "AI Scientist", org: "University of Michigan 等", date: "08.18", summary: "用 60 个项目级科研任务，测试 AI 在逐步撤除人类方法指导后能走多远。", insight: "把方法选择与执行拆开评测，并采用 Progressive Guidance Removal。", metric: "60 项目 · 11 领域 · 31,000+ 专家小时", url: "https://arxiv.org/abs/2608.17271" },
  { rank: 2, name: "StartupBench", kind: "Benchmark", area: "General Agent", org: "多机构合作", date: "08.18", summary: "从已被市场验证的 AI 产品中反向构造端到端专业工作流。", insight: "Market-validated task sourcing 与 Artifact-first Evaluation。", metric: "97 工作流 · 6 职业领域 · 25.3 平均 Rubric", url: "https://arxiv.org/abs/2608.17800" },
  { rank: 3, name: "SWE-bench Science", kind: "Benchmark", area: "Coding Agent", org: "复旦大学", date: "08.20", summary: "面向科学软件工程，观察 Coding Agent 的成功率与失败机制。", insight: "用 Failure Taxonomy 和知识消融理解 Agent 为什么失败。", metric: "119 任务 · 98 仓库 · 20 科学领域", url: "https://arxiv.org/abs/2608.19799" },
  { rank: 4, name: "StateMemBench", kind: "Benchmark", area: "Agent Memory", org: "University of Illinois", date: "08.20", summary: "不只测回忆，而是测 Agent 能否跟踪持续变化、会被覆盖的真实状态。", insight: "明确区分 Current State 与 Superseded State。", metric: "234 多会话场景 · 2 种长度设置", url: "https://arxiv.org/abs/2608.19652" },
  { rank: 5, name: "CHIVE", kind: "Dataset", area: "Interpretability", org: "Anthropic 等", date: "08.21", summary: "用反事实提示编辑，发现并验证模型在真实交互中的意外行为。", insight: "用可验证的 Counterfactual Experiments 评价行为解释。", metric: "5–15 次实验/调查 · 30 次采样/提示", url: "https://alignment.anthropic.com/2026/chive/" },
  { rank: 6, name: "HarnessRisk", kind: "Benchmark", area: "Agent Safety", org: "多机构合作", date: "08.18", summary: "覆盖配置、运行、持久化到恢复的完整 Agent Harness 安全生命周期。", insight: "同时评估 Utility、Attack、Persistence 与 Detection。", metric: "128 沙盒案例 · 6 生命周期阶段", url: "https://arxiv.org/abs/2608.17597" },
  { rank: 7, name: "HiPHI", kind: "Dataset", area: "Embodied AI", org: "清华大学等", date: "08.17", summary: "高精度全身运动与物体交互数据，为人形机器人策略学习提供底座。", insight: "把动作覆盖度、交互落地与物理一致性放到同一套评测中。", metric: "600+ 小时 · 亚毫米级追踪", url: "https://arxiv.org/abs/2608.16222" },
  { rank: 8, name: "ReRef-3D", kind: "Benchmark", area: "3D Spatial", org: "University of Colorado Boulder", date: "08.17", summary: "根据空间指代表达，在 3D 场景中生成满足关系与物理约束的新位置。", insight: "预测不是单一坐标，而是满足关系与 Physical Validity 的区域。", metric: "33,826 指令 · 998 场景 · 16 类放置", url: "https://arxiv.org/abs/2608.16011" },
  { rank: 9, name: "RuleMaze", kind: "Benchmark", area: "Multimodal", org: "北京大学等", date: "08.20", summary: "让多模态模型在视觉迷宫中理解自然语言规则并规划合规路径。", insight: "Natural Language → Logic → Executable Validator。", metric: "可控规则 · 可执行验证 · 可解释轨迹", url: "https://arxiv.org/abs/2608.20237" },
];

const filters = ["全部", "Benchmark", "Dataset"] as const;

export default function Home() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("全部");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(1);

  const visible = useMemo(() => items.filter((item) => {
    const byType = filter === "全部" || item.kind === filter;
    const haystack = `${item.name} ${item.area} ${item.org} ${item.summary}`.toLowerCase();
    return byType && haystack.includes(query.trim().toLowerCase());
  }), [filter, query]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Benchmark Weekly 首页">
          <span className="brand-mark">B/</span><span>Benchmark Weekly</span>
        </a>
        <nav aria-label="主导航">
          <a href="#digest">本周</a><a href="#archive">归档</a><a href="#about">关于</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span className="pulse" /> 每周日更新 · ISSUE 02</div>
        <h1>值得认真看的<br /><em>Benchmark &amp; Dataset</em></h1>
        <p className="hero-copy">每周从新发布的研究中，筛出真正值得关注的评测与数据集。少而精，附带可迁移的设计洞察。</p>
        <div className="week-row">
          <div><span>本期范围</span><strong>2026.08.17 — 08.23</strong></div>
          <div><span>入选</span><strong>09 项</strong></div>
          <div><span>方向</span><strong>07 个</strong></div>
        </div>
        <div className="hero-note" aria-hidden="true"><b>W34</b><span>curated<br />not collected</span></div>
      </section>

      <section className="trend">
        <span className="trend-label">本周观察</span>
        <p>Agent 评测正在从“答对了吗”转向<strong>真实工作流、可执行验证与持续状态</strong>；数据集则更强调物理落地与高精度交互。</p>
      </section>

      <section className="digest" id="digest">
        <div className="section-head">
          <div><span className="section-no">01</span><h2>本周精选</h2></div>
          <p>点击条目，查看关键数据与设计启发</p>
        </div>

        <div className="controls">
          <div className="filter-row" role="group" aria-label="内容类型筛选">
            {filters.map((label) => <button key={label} className={filter === label ? "active" : ""} onClick={() => setFilter(label)}>{label}</button>)}
          </div>
          <label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索名称或方向" aria-label="搜索名称或方向" /></label>
        </div>

        <div className="list">
          {visible.map((item) => {
            const expanded = open === item.rank;
            return <article className={`item ${item.rank <= 3 ? "top-three" : ""} ${expanded ? "expanded" : ""}`} key={item.rank}>
              <button className="item-main" onClick={() => setOpen(expanded ? null : item.rank)} aria-expanded={expanded}>
                <span className="rank">{String(item.rank).padStart(2, "0")}</span>
                <span className="item-title"><b>{item.name}</b><small>{item.kind} · {item.area}</small></span>
                <span className="item-summary">{item.summary}</span>
                <span className="item-date">{item.date}</span>
                <span className="toggle" aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>
              {expanded && <div className="item-detail">
                <div><span>关键规模</span><strong>{item.metric}</strong></div>
                <div><span>可借鉴点</span><strong>{item.insight}</strong></div>
                <a href={item.url} target="_blank" rel="noreferrer">阅读原始发布 <span>↗</span></a>
              </div>}
            </article>;
          })}
          {visible.length === 0 && <div className="empty">没有匹配的条目，换个关键词试试。</div>}
        </div>
      </section>

      <section className="archive" id="archive">
        <div className="section-head light"><div><span className="section-no">02</span><h2>往期归档</h2></div><p>持续记录评测范式的变化</p></div>
        <div className="archive-grid">
          <a href="#digest" className="archive-card current"><span>2026 / W34</span><strong>真实工作流、Agent 状态与可执行验证</strong><small>第 02 期 · 9 项精选 <b>当前期 ↗</b></small></a>
          <div className="archive-card"><span>2026 / W33</span><strong>从模型能力走向系统级 Evaluation</strong><small>第 01 期 · 9 项精选 <b>资料库归档</b></small></div>
          <div className="archive-card next"><span>2026 / W35</span><strong>下一期正在收集中</strong><small>08.30 发布 <i className="pulse" /></small></div>
        </div>
      </section>

      <section className="about" id="about">
        <span className="section-no">03</span>
        <div><h2>不是论文列表，<br />是可复用的评测洞察。</h2></div>
        <div><p>内容来自 <strong>Weekly Benchmark Digest</strong> 的每周筛选结果，并同步沉淀到资料库。重点保留：为什么值得关注，以及能为自研 Benchmark 借鉴什么。</p><p className="source">SOURCE · WEEKLY BENCHMARK DIGEST</p></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">B/</span><span>Benchmark Weekly</span></a><p>Curate newly released benchmarks and datasets every week.</p><span>© 2026 · UPDATED WEEKLY</span></footer>
    </main>
  );
}
