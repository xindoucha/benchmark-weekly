import type { DigestItem, DigestIssue } from "../types";

export type ArchivePick = DigestItem;

export const w33Zh: ArchivePick[] = [
  { rank: 1, name: "Evo-Bench", area: "Harness Evolution", date: "08.10", summary: "评测 LLM 能否自主诊断、重写并改进 Agent Harness，并通过留出任务检验改进是否真正可迁移。", url: "https://arxiv.org/abs/2608.09096" },
  { rank: 2, name: "TimeSage-EV", area: "Agentic Time Series", date: "08.14", summary: "面向持续变化环境的实时 Agent 时间序列分析 Benchmark，覆盖 60 个机构场景与 1,485 个时点问答。", url: "https://arxiv.org/abs/2608.14270" },
  { rank: 3, name: "Harness-IF", area: "Coding Agent", date: "08.12", summary: "跨 system prompt、项目文件、用户指令、工具与技能描述，评估 Coding Agent 是否真正遵循规则。", url: "https://arxiv.org/abs/2608.11727" },
  { rank: 4, name: "Vero", area: "Verified Coding", date: "08.13", summary: "首个在仓库级别联合评测代码实现与机器可验证证明生成的 Benchmark。", url: "https://arxiv.org/abs/2608.13522" },
  { rank: 5, name: "Evo-Harness", area: "Self-improving Agent", date: "08.15", summary: "把一次性任务执行中的嘈杂经验编译为可复用 Skill Harness，测试 Agent 的在线自我改进。", url: "https://arxiv.org/abs/2608.15071" },
  { rank: 6, name: "SwissCrop25", area: "Earth Observation", date: "08.10", summary: "覆盖七个生长季、73 类作物与非作物类别的国家级多年作物制图 Benchmark。", url: "https://arxiv.org/abs/2608.09497" },
  { rank: 7, name: "Mawqif-v2", area: "Arabic NLP", date: "08.10", summary: "面向跨目标泛化的阿拉伯语立场检测评测集，同时标注立场、情感与讽刺。", url: "https://arxiv.org/abs/2608.09539" },
  { rank: 8, name: "Beyond Naturalness", area: "Speech Evaluation", date: "08.10", summary: "用 10 个语言学感知维度和 860 条专家标注语音，元评测自动 TTS 评分器。", url: "https://arxiv.org/abs/2608.09930" },
  { rank: 9, name: "Frontier AI Measurement Audit", area: "Model Evaluation", date: "08.14", summary: "审计前沿 AI 预测所依赖的版本化 Benchmark、证据连接与测量连续性问题。", url: "https://arxiv.org/abs/2608.14903" },
];

export const w33En: ArchivePick[] = [
  { rank: 1, name: "Evo-Bench", area: "Harness Evolution", date: "Aug 10", summary: "Measures whether LLMs can autonomously diagnose, rewrite and improve an agent harness—and whether those gains transfer to held-out tasks.", url: "https://arxiv.org/abs/2608.09096" },
  { rank: 2, name: "TimeSage-EV", area: "Agentic Time Series", date: "Aug 14", summary: "A live benchmark for agentic time-series analysis across 60 institutional scenarios and 1,485 scenario-period QA pairs.", url: "https://arxiv.org/abs/2608.14270" },
  { rank: 3, name: "Harness-IF", area: "Coding Agent", date: "Aug 12", summary: "Tests whether coding agents truly follow rules across system prompts, project files, user instructions, tools and skill descriptions.", url: "https://arxiv.org/abs/2608.11727" },
  { rank: 4, name: "Vero", area: "Verified Coding", date: "Aug 13", summary: "The first repository-level benchmark for joint software implementation and machine-checked proof synthesis.", url: "https://arxiv.org/abs/2608.13522" },
  { rank: 5, name: "Evo-Harness", area: "Self-improving Agent", date: "Aug 15", summary: "Compiles noisy one-shot task experience into reusable skill harnesses for online agent self-improvement.", url: "https://arxiv.org/abs/2608.15071" },
  { rank: 6, name: "SwissCrop25", area: "Earth Observation", date: "Aug 10", summary: "A national, seven-season crop-mapping benchmark with 73 crop classes and explicit non-crop land-cover classes.", url: "https://arxiv.org/abs/2608.09497" },
  { rank: 7, name: "Mawqif-v2", area: "Arabic NLP", date: "Aug 10", summary: "An Arabic stance-detection evaluation set built for cross-target generalization, with stance, sentiment and sarcasm labels.", url: "https://arxiv.org/abs/2608.09539" },
  { rank: 8, name: "Beyond Naturalness", area: "Speech Evaluation", date: "Aug 10", summary: "A 10-dimension, 860-utterance meta-evaluation benchmark for automated TTS evaluators.", url: "https://arxiv.org/abs/2608.09930" },
  { rank: 9, name: "Frontier AI Measurement Audit", area: "Model Evaluation", date: "Aug 14", summary: "Audits the versioned benchmarks, evidence links and measurement continuity behind frontier-AI forecasting claims.", url: "https://arxiv.org/abs/2608.14903" },
];

const issue: DigestIssue = {
  slug: "w33",
  week: 33,
  issue: 1,
  year: 2026,
  dateStart: "2026.08.10",
  dateEnd: "2026.08.16",
  theme: { zh: "从模型能力走向系统级 Evaluation", en: "From model capability to system-level evaluation" },
  observation: {
    zh: "评测对象开始从单一模型扩展到完整 Agent 系统：Prompt、Tools、Memory 与 Control Flow 正在成为可以被独立测量和优化的能力层。",
    en: "Evaluation is expanding from the model alone to the full agent system: prompts, tools, memory and control flow are becoming capabilities that can be measured and optimized directly.",
  },
  items: { zh: w33Zh, en: w33En },
};

export default issue;
