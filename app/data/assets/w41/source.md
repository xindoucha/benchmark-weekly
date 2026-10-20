# Benchmark 精选周刊 · 第 9 期

**覆盖周期：2026/10/05–2026/10/11（W41）**  
**每周精选新发布的 benchmark 和数据集**  
*Weekly picks of newly released benchmarks and datasets*

> 本期全部项目均在过去 7 天首次公开或有实质更新；没有使用近 14 天补位项目。排序优先考虑任务真实性、规模与质控透明度、评测可执行性，以及对 Agent / Coding Agent / 多模态 / 具身智能 / 评测基础设施的直接参考价值。关注度为编辑判断；由于项目刚发布，不用未经核实的 stars、下载量或社交热度代替判断。

## 本周 Top 9 总览

| 排名 | Benchmark/Dataset | 方向 | 简要介绍 | 发布时间 | 发布机构 | 超链接 | 关注度 |
|---:|---|---|---|---|---|---|---|
| **1** | **BrickBench** | Agent × 3D / 物理设计 | 300 个文本驱动 LEGO 设计任务；BrickAgent 支持构建、检查、渲染与物理验证，联合评估可建造性、语义对齐和设计质量。 | 2026/10/08（v1） | Stanford University 等 | [arXiv](https://arxiv.org/abs/2610.12452) · [项目页](http://www.brickben.ch) | **高**：执行环境与复合判分完整 |
| **2** | **SpaceCast-Bench** | 多模态 / 3D 空间推理 | 182 个真实场景、3,862 题、16 类任务；测试从观察到空间变换再到不可见结果推断，最佳模型 58.0%，人类 87.2%。 | 2026/10/08（v1） | Zhejiang University | [arXiv](https://arxiv.org/abs/2610.12402) · [GitHub](https://github.com/ZJU-REAL/SpaceCast-Bench) · [HF](https://huggingface.co/datasets/hongxingli/SpaceCast-Bench) | **高**：真实场景、开放数据与诊断层级齐全 |
| **3** | **SWE-CC** | Coding Agent / 过程合规 | 将 12 个开源仓库的贡献规范转成 823 条机器可检政策，并审计 500 个 SWE-bench Verified 扩展任务的过程与最终提交。 | 2026/10/05（v1） | Singapore Management University 等 | [arXiv](https://arxiv.org/abs/2610.06193) · [GitHub](https://github.com/dangtruong01/swe-cc-arxiv) | **高**：从“测试通过”推进到可合并贡献 |
| 4 | DUDA-Bench | Agent / 城市多模态分析 | 12 城市、5 类问题，含 86 个原子任务与 22 个端到端工作流；评估规划、证据整合、定位、验证和错误恢复。 | 2026/10/07（v1） | HKUST (Guangzhou) | [arXiv](https://arxiv.org/abs/2610.09374) | 中高：专家工作流转 Agent 环境的方法清晰 |
| 5 | TaoD2C-Bench | 多模态 Coding / UI | 2,861 个生产设计、97,652 条专家标注；公开评测子集 421 个设计，评需求推断、约束实现和端到端 React 生成。 | 2026/10/07（v1） | Zhejiang University 等 | [arXiv](https://arxiv.org/abs/2610.10374) · [项目页](https://taod2c-bench.github.io/) | 中高：工业数据与可执行代码评测结合 |
| 6 | TopoGraphRAG-Bench | 多模态 RAG / Eval Infra | 201 份长文档、2,024 题；显式控制单跳、桥接链和多源综合三类证据拓扑，并检查跨模态捷径。 | 2026/10/07（v1） | North Carolina State University 等 | [arXiv](https://arxiv.org/abs/2610.09360) · [项目页](https://richardlrc.github.io/TopoGraphRAG-Bench/) | 中高：把证据路径纳入 RAG 评分 |
| 7 | SAVU-Bench | 音视频多模态 / 空间推理 | 1,066 道主榜题与 611 道诊断题，覆盖感知、对齐、推理 3 层 7 项任务；真实空间音视频优先。 | 2026/10/07（v1） | University of Western Australia 等 | [arXiv](https://arxiv.org/abs/2610.10624) | 中：诊断集能定位推理失败前置环节 |
| 8 | Learn2Play Bench | Agent 学习 / 长程交互 | 20 个规则陌生或反直觉的文本游戏；通过多轮尝试、自动评分和换实例测试，区分经验学习与预训练记忆。 | 2026/10/06（v1），10/08（v2） | National University of Singapore | [arXiv](https://arxiv.org/abs/2610.08215) · [项目页](https://liushiliushi.github.io/) | 中：适合评测 Agent 迭代学习能力 |
| 9 | WorldFact-Bench | 多模态事实核验 | 1,274 对来源对齐的真/假图像，覆盖 4 种核验机制与 10 个领域；用 pair accuracy 抑制标签偏置。 | 2026/10/08（v1） | Ant Group 等 | [arXiv](https://arxiv.org/abs/2610.11184) | 中：从图内合理性扩展到现实世界一致性 |

## 1. BrickBench — Agentic Brick Design

- **方向**：Agent、Coding Agent、3D/物理设计。
- **第一作者 / 机构**：Peter Kulits；Stanford University / Max Planck Institute for Intelligent Systems。
- **评什么**：Agent 根据文本需求编程构造真实 LEGO 零件装配体，不仅要“像”，还要连接正确、无碰撞、能稳定站立，并具备可接受的设计质量。
- **规模**：300 个 prompts，分为 Model（≤400 件）、Set（400–4,000 件）和 Alt-Build（固定零件库存）三种设置；评测 11 个 frontier agents 与 2 个数据驱动基线。
- **评测方式**：BrickAgent 提供零件搜索、连接器放置、子装配、渲染和错误定位；物理有效性检查连接、碰撞及 PyBullet 稳定性；语义对齐用从 prompt 分解的 yes/no VQA；设计质量采用经人工偏好验证的成对比较与 Elo。论文报告：有环境时领先 Agent 几乎均能生成有效装配，最好满足约 95% 语义要求；去掉环境后有效率显著下降。
- **开放状态**：论文与项目页已公开；项目页声明 benchmark 和环境发布。是否包含全部评测产物，应以项目仓库实际文件为准。
- **为什么值得关注**：它把“可执行程序 → 物理对象 → 多轴验证”连成闭环，且把确定性 verifier 与主观设计质量分开，适合作为复杂生成任务的评测范式。
- **可直接借鉴**：为 3D/CAD/具身任务设置“硬约束先验收、软质量再排序”的两级评分；让环境返回可定位的失败部件，而不是只给最终 pass/fail；加入环境消融，量化工具和反馈本身的贡献。
- **链接**：[arXiv](https://arxiv.org/abs/2610.12452)｜[项目页](http://www.brickben.ch)

## 2. SpaceCast-Bench — Predictive Spatial Reasoning

- **方向**：多模态、3D 空间推理、世界模型能力评估。
- **第一作者 / 机构**：Hongxing Li；Zhejiang University。
- **评什么**：VLM 是否能从多个观察构建空间状态，对物体/视角变化进行更新，并推断输入中没有直接出现的结果，而非只读取可见关系。
- **规模**：182 个真实场景、3,862 道题、16 类任务；分静态感知、局部预测、全局预测三层；评测 21 个模型。
- **评测方式**：observe–transform–infer 任务链；以准确率及分任务结果诊断。最佳模型 58.0%，人类 87.2%；显式 3D 证据比生成的结果图/视频更稳定；论文另用程序生成数据微调 Qwen3-VL-4B，从 34.0% 提升至 65.7%，并在 6 个 OOD benchmark 上观察迁移。
- **开放状态**：GitHub 与 Hugging Face 数据集均已在论文页明确链接。
- **为什么值得关注**：空间 benchmark 通常停留在“看见什么”，它将状态更新和不可见结果预测拆成可诊断层级，非常贴近具身智能的世界模型评测。
- **可直接借鉴**：用 anchor view + bridge view 控制跨视角证据；将任务按“感知—局部更新—全局推断”分层；同时提供人类、随机和模型基线，防止总体准确率掩盖任务难度。
- **链接**：[arXiv](https://arxiv.org/abs/2610.12402)｜[GitHub](https://github.com/ZJU-REAL/SpaceCast-Bench)｜[Hugging Face](https://huggingface.co/datasets/hongxingli/SpaceCast-Bench)

## 3. SWE-CC — Repository Policy Compliance for Coding Agents

- **方向**：Coding Agent、软件工程、过程审计。
- **第一作者 / 机构**：Hai Dang Truong；Singapore Management University。
- **评什么**：Agent 即使通过功能测试，是否遵守仓库特定的代码风格、Git、测试流程、文档等贡献规范，并检查违规发生在过程还是最终提交。
- **规模**：12 个开源仓库、823 条机器可检查的原子政策、500 个由 SWE-bench Verified 扩展的端到端贡献任务；实验覆盖 4 个 LLM、2 种 agent scaffolds。
- **评测方式**：从开发者文档半自动抽取政策，编译为轻量确定性 checker；同时审计运行轨迹和最终产物。论文报告：即便功能正确，Agent 仍违反 43.1% 的适用政策，近半违规发生于中间执行步骤。
- **开放状态**：benchmark 与源码 GitHub 已公开。
- **为什么值得关注**：它补上 Coding Agent 从“解题”到“真实工程可合并”的关键缺口，也证明只在末端跑 tests 会漏掉大量过程风险。
- **可直接借鉴**：把项目规范拆成 atomic policy + deterministic checker；保留工具调用与文件变更轨迹用于过程审计；分别报告 functional pass 与 policy compliance，不将二者混成单分数。
- **链接**：[arXiv](https://arxiv.org/abs/2610.06193)｜[GitHub](https://github.com/dangtruong01/swe-cc-arxiv)

## 4. DUDA-Bench — Multimodal Urban Diagnosis

- **方向**：Agent、多模态数据分析、真实专家工作流。
- **第一作者 / 机构**：Yizhi Song；The Hong Kong University of Science and Technology (Guangzhou)。
- **评什么**：Agent 能否从异构城市数据中识别问题、定位受影响区域、分析因素并形成规划相关结论；同时考察跨阶段计划、证据整合、验证与错误恢复。
- **规模**：来自 12 个城市、覆盖 5 类城市问题；86 个 atomic tasks 与 22 个 workflow tasks，跨 4 个分析阶段；评测 7 个 backbone 与 5 种 agent systems。
- **评测方式**：DUDA-Env 提供数据发现、栅格统计、OSM 查询、遥感读取等工具。原子任务报告 Atomic PR；工作流报告 Recognition、Localization、Indicator F1 和 Workflow Score，并记录 turns 与 token 成本。最佳公开表格中的 Workflow Score 仍不足 0.3，显示端到端协调远难于孤立分析技能。
- **开放状态**：论文公开；论文页面未声明 GitHub/HF，故当前只确认论文中的环境与实验描述，不将其表述为可下载完整 benchmark。
- **为什么值得关注**：这是“把专家分析流程翻译成层级 Agent 任务”的高质量案例，尤其适合参考到数据分析 Agent 与行业 benchmark。
- **可直接借鉴**：同时设计 atomic 与 workflow 两层任务；为每一阶段记录证据缺口如何向后传播；加入成本指标和轨迹人工核验；将工具能力表写进 benchmark contract。
- **链接**：[arXiv](https://arxiv.org/abs/2610.09374)

## 5. TaoD2C-Bench — Industrial UI Code Generation

- **方向**：多模态 Coding、Design-to-Code、工业 UI。
- **第一作者 / 机构**：Chengwei Shi；Zhejiang University（工作期间在 Alibaba 实习）。
- **评什么**：模型能否从设计图、图层元数据和目标组件库文档中推断实现约束，并生成满足组件、分组、对齐与定位要求的 React 代码，而不仅追求视觉相似。
- **规模**：完整 TaoD2C 含 17 个商业平台的 2,861 个生产设计、183,697 个可见图层和 97,652 条专家标注；冻结的公开评测子集为 421 个设计（152 B-end、269 C-end）。
- **评测方式**：三项任务分别是端到端 UI 生成、需求推断、需求实现；代码在 TypeScript + CSS Modules 环境生成并渲染。评分覆盖 requirement prediction、code implementation 与 visual fidelity，并处理“多个实现都合法”的 optional annotations。论文评测 8 个 MLLM。
- **开放状态**：项目页已公开；公开子集为非商业研究用途，设计资产仍受原平台权利约束。
- **为什么值得关注**：它直接揭示“视觉复刻好 ≠ 工程实现正确”，并用专家标注表达 required 与 optional choices，减少单一参考答案误罚。
- **可直接借鉴**：将结果评分拆成需求推断、约束实现、视觉保真三轴；对可替代实现显式标 optional；冻结评测子集后再跑模型，保留资产许可证边界。
- **链接**：[arXiv](https://arxiv.org/abs/2610.10374)｜[项目页](https://taod2c-bench.github.io/)

## 6. TopoGraphRAG-Bench — Layout-Grounded Evidence Reasoning

- **方向**：多模态 RAG、长文档评测、Benchmark Infra。
- **第一作者 / 机构**：Ruochi Li；North Carolina State University。
- **评什么**：系统能否从长文档的文本、表格、图形和 caption 中恢复正确证据拓扑，并沿着预期证据链回答问题。
- **规模**：201 份长且视觉丰富的文档、2,024 道问题；三种受控拓扑为单跳检索、bridge-chain reasoning、多源综合。
- **评测方式**：同时评 text-only GraphRAG、page-level visual retrieval 与 multimodal GraphRAG；指标覆盖 context precision/recall、答案准确性、faithfulness、response relevancy，以及 topology-aware step coverage。数据构造加入反事实验证，检查捷径抗性、模态必要性和证据必要性。
- **开放状态**：论文声明代码与数据在项目页提供；论文已被 NeurIPS 2026 接收。
- **为什么值得关注**：它不再只看“有没有召回若干相关页”，而是检验系统是否找齐并正确组织回答所需的跨模态证据路径。
- **可直接借鉴**：从 evidence units 反向构造问题；为问题保存 gold topology；用 counterfactual 删除/替换证据验证题目是否可走捷径；给 judge 增加逐跳覆盖率并做人类 spot-check。
- **链接**：[arXiv](https://arxiv.org/abs/2610.09360)｜[项目页](https://richardlrc.github.io/TopoGraphRAG-Bench/)

## 7. SAVU-Bench — Spatial Audio-Visual Understanding

- **方向**：音视频多模态、空间感知与推理。
- **第一作者 / 机构**：Yu Chen；University of Western Australia。
- **评什么**：模型能否识别“什么在发生、发生在哪里”，并在音频与视觉之间完成空间 grounding、对齐和高层推理。
- **规模**：主 benchmark 1,066 道题，SAVU-Diag 611 道诊断题；三层能力、七项任务；空间推理子集含 81 题。人工对照每项任务抽 30 题，由 10 名参与者完成。
- **评测方式**：多数任务以多选准确率评分；A2V/V2A matching 将正确匹配、语义负例、空间负例放在同一候选组。诊断集将推理题拆成同场景的 grounding 与 alignment 前置题，判断失败究竟来自前置感知还是推理本身。构造经过两阶段人工标注和 3 位领域专家独立复核。
- **开放状态**：论文以 CC BY 4.0 发布，但 arXiv 页未声明官方代码/数据链接；当前不将完整 benchmark 标注为已可下载。
- **为什么值得关注**：真实空间音频仍是多模态模型短板，而它用同场景诊断题把错误链条拆开，比只报告总准确率更适合模型迭代。
- **可直接借鉴**：为每个高层题建立 prerequisite graph；设计 semantic negative 与 spatial negative 分离语义/空间失败；用专家一致性作为最终保留门槛。
- **链接**：[arXiv](https://arxiv.org/abs/2610.10624)

## 8. Learn2Play Bench — Learning from Experience

- **方向**：Agent 长程交互、经验学习、Harness 评测。
- **第一作者 / 机构**：Yibo Li；National University of Singapore。
- **评什么**：Agent 能否在规则未知、陌生甚至反直觉的游戏中，从动作—反馈记录逐轮学习，并将发现的规则迁移到新实例。
- **规模**：20 个文本游戏；普通游戏 5 个计分 episode，挑战游戏 10 个；每种 Agent 配置进行多次 trials，并与人类记录对照。
- **评测方式**：环境提供可复现反馈与自动评分；报告 peak/mean score、learning gain、learning slope，并测试 fixed 与 re-shuffled instances。论文比较 backbone、self-evolving methods 与不同 harness；v2 在首发两天后修订，当前以 v2 为准。
- **开放状态**：论文和项目页公开；是否开放完整环境代码/数据，应以项目页下载内容为准。
- **为什么值得关注**：它有意识地排除“规则已写进 prompt 或预训练记忆”的捷径，更接近用户关注的 Agent 迭代能力。
- **可直接借鉴**：用新规则游戏隔离经验学习；同时评学习曲线和最终峰值；切换实例测试知识迁移；把 harness 固定/替换作为独立实验变量，并记录成本。
- **链接**：[arXiv](https://arxiv.org/abs/2610.08215)｜[项目页](https://liushiliushi.github.io/)

## 9. WorldFact-Bench — Image–World Consistency

- **方向**：多模态事实核验、图像真实性、Agent Retrieval。
- **第一作者 / 机构**：Zhuohong Chen；Ant Group / Tsinghua University。
- **评什么**：在没有预先给定 claim 的情况下，模型能否从单张看似合理的图像主动发现与现实世界事实或规则冲突的内容。
- **规模**：1,274 对 source-aligned real–fake 图像，覆盖 4 种验证机制与 10 个语义领域；每对只引入一个有证据支持的事实冲突，并尽量保持非目标内容与视觉可信度。
- **评测方式**：图像独立判定，同时用 pair accuracy 要求同一对中的真图与假图都判对，以暴露标签偏置。PERSIST-Agent 使用持久状态维护候选事实、视觉观察、外部证据和验证状态，循环检索与更新。
- **开放状态**：论文公开；arXiv 页未声明数据或代码链接，故目前只确认论文描述，不视为已开放可下载数据集。
- **为什么值得关注**：它把图像检测从纹理伪影/图内物理合理性扩展到开放世界事实一致性，并提供了适合长程验证 Agent 的显式状态结构。
- **可直接借鉴**：构造一一对齐的真/假样本并报告 pair accuracy；每个假样本只植入单一可核验冲突；在 Agent 状态中区分“候选—观察—证据—结论”，避免检索后遗忘未解决项。
- **链接**：[arXiv](https://arxiv.org/abs/2610.11184)

## 本周观察

1. **可执行环境正在成为高质量 benchmark 的标配。** BrickAgent、DUDA-Env、Learn2Play 的共同点是让 Agent 在环境反馈中迭代，而不是一次性提交答案。
2. **评分从最终结果走向过程与结构。** SWE-CC 审计中间轨迹，TopoGraphRAG 评分证据拓扑，SAVU-Diag 追溯推理的前置失败，说明单一 pass rate 已不足以支持模型改进。
3. **“看起来对”与“真实可用”被进一步拆开。** TaoD2C 区分视觉复刻和工程约束，WorldFact 区分图内合理与现实一致，BrickBench 区分可建造与好设计。
4. **对你们最值得直接复用的组合**：任务分层（atomic/workflow）+ 确定性 verifier + 轨迹审计 + 诊断子集 + 人类校准。这套组合适合长程 Agent benchmark 和评测平台统一落地。

## 检索与核验说明

- 检索范围覆盖 arXiv 当周 cs.AI、cs.CL、cs.CV、cs.SE、cs.RO 相关新提交，并交叉核验项目页、GitHub 与 Hugging Face 链接。
- 本期未发现必须依赖近 14 天补位的情况；Top 9 均在 2026/10/05–10/11 首发或修订。
- “已公开”仅表示论文页明确提供的资源可访问；没有官方链接的项目均明确标注为“论文公开、完整数据/代码开放状态未知”。
