# Benchmark 精选周刊｜第 12 期

**2026/10/26–11/01 · W44**

每周精选新发布的 benchmark 和数据集  
*Weekly picks of newly released benchmarks and datasets*

本期检索覆盖 arXiv cs.AI、cs.CL、cs.CV、cs.LG、cs.SE、cs.RO，以及项目主页、GitHub、Hugging Face 和官方榜单。Top 9 均在过去 7 天首次发布，不含近 14 天补位项目。排序优先考虑：任务真实性、规模与边界是否清楚、评分能否复现、执行环境是否开放，以及对 Agent / 数据与评测工程的可借鉴性。

> 状态说明：**论文声称**表示数字来自论文；**可下载**表示已核实公开文件；**可运行**表示官方仓库已提供执行或评分入口。论文完整集与公开子集严格分开记录。

## 本周 Top 9 总览

| 排名 | Benchmark/Dataset | 方向 | 简要介绍 | 发布时间 | 发布机构 | 超链接 | 关注度 |
|---:|---|---|---|---|---|---|---|
| 1 | **Req2Test-Bench** | Coding Agent / 测试生成 | 5,086 个执行验证实例；用突变杀伤完整性判断生成测试是否真正覆盖需求行为。 | 2026-10-27 | NUS、上交、上海创智学院、北航 | [arXiv](https://arxiv.org/abs/2610.36584) · [GitHub](https://github.com/code-philia/Req2Test-Bench) · [HF](https://huggingface.co/datasets/code-philia/Req2Test-Bench) | 高；代码、数据与 Docker 环境同周公开 |
| 2 | **EmbodiedLab** | 具身智能 / AI for Science | 30 个实验、5 个学科、14 套装置；机器人必须自行操作仪器并以观测证据回答未知量。 | 2026-10-26 | HexaFuture、清华、北大、NUS | [arXiv](https://arxiv.org/abs/2610.35385) · [项目页](https://hexafuture.ai/benchmarks/embodiedlab/) · [GitHub](https://github.com/HexaFuture/EmbodiedLab) | 高；官方仓库 17 stars，评测代码可运行 |
| 3 | **Co-Design Bench** | 多模态 Coding Agent | 273 个真实应用修改任务、2,331 条专家验收标准；用 judge-then-refute 审计最终应用。 | 2026-10-26 | Qwen 团队等 | [arXiv](https://arxiv.org/abs/2610.35138) · [项目页](https://codesignbench.github.io/) · [GitHub](https://github.com/Wiselnn570/Co-Design-Bench) · [HF](https://huggingface.co/datasets/Wiselnn/Co-Design-Bench) | 高；GitHub 45 stars、HF Papers 20 upvotes |
| 4 | **ATLAS-Bench** | Tool Agent / 本地搜索 | 1,200 个真实搜索扩展查询；区分硬约束、偏好、事实与主观判断，并在固定 POI 环境中评分。 | 2026-10-29 | 高德、阿里巴巴 | [arXiv](https://arxiv.org/abs/2610.39438) | 较高；任务真实且环境设计完整，资源开放待确认 |
| 5 | **IntReal** | 多模态生成 / Dataset | 100,000 个图文交错样本、538,452 张图；以 7 个维度诊断统一多模态模型的交错生成。 | 2026-10-28 | 南京大学、美团、Imperial、NTU | [arXiv](https://arxiv.org/abs/2610.38425) · [项目页](https://yushaohan.github.io/IntReal/) · [GitHub](https://github.com/yushaohan/IntReal) · [HF](https://huggingface.co/datasets/yushaohan/IntReal-100K) | 高；数据、模型、评测与榜单 Day-0 开放 |
| 6 | **DynaRev** | Web Agent | 181 个动态目标任务；在语义里程碑追加、覆盖或条件修改目标，按轨迹评估适应性。 | 2026-10-29 | 香港城市大学、上海交通大学 | [arXiv](https://arxiv.org/abs/2610.40133) · [GitHub](https://github.com/zsq259/DynaRev) | 较高；数据与 BrowserGym runner 可运行 |
| 7 | **V³AST-Bench** | Coding Agent / 安全 | 212 个风险任务与 212 个能力孪生任务；用独立运行环境验证真实伤害与任务能力。 | 2026-10-26 | NTU、阿里巴巴 | [arXiv](https://arxiv.org/abs/2610.35188) · [GitHub](https://github.com/Alibaba-AAIG/VAST-Bench) | 较高；424 个任务、runner 与适配器已开放 |
| 8 | **TreasuryQA Bench** | Office Agent / 文档检索 | 70 道题覆盖 1,435 份扫描财政档案；Agent 经 Dropbox 与 OCR MCP 找文件并返回精确数字。 | 2026-10-28 | Veris AI | [arXiv](https://arxiv.org/abs/2610.38924) · [官方榜单](https://veris.ai/leaderboard/treasuryqa) | 较高；生产式链路突出，但完整运行依赖托管 MCP |
| 9 | **Visual Commission Bench** | 图像 Agent / 多模态 | 600 个视觉委托、5,039 项要求检查；评估多阶段素材整合、约束保持和成套交付。 | 2026-10-29 | 美团、中国科学技术大学 | [arXiv](https://arxiv.org/abs/2610.39330) | 中高；规模和评分清楚，官方代码/数据链接未核实 |

## Top 3 重点解读

### 1. Req2Test-Bench｜Coding Agent / 测试生成

- **首次发布**：2026-10-27，arXiv v1。
- **第一作者与机构**：Binhang Qi；NUS、上海交通大学、上海创智学院、北京航空航天大学。
- **评什么**：给 Agent 一条 Gherkin 行为需求、目标接口和隐藏目标实现的可运行工程，要求生成完整测试实现。它不只问“测试能不能跑”，而是问测试是否能捕获开发者测试已经覆盖的全部故障。
- **规模**：论文完整语料为 **5,086 个执行验证实例**，来自 8 个开源项目、5 种语言和 4 个 BDD 框架。官方仓库明确公开的 `eval` split 为 **2,051 个实例**；因此 5,086 是完整构建规模，2,051 是当前可直接评测规模。
- **评测方式**：根目录隔离的 Docker 环境执行生成测试；核心指标包括 Pass@1、KillComplete@1、mutant-kill recall、API F1 与 coverage Jaccard。KillComplete 要求生成测试既通过原项目，又杀死开发者测试可杀死的每个突变体。论文中最佳配置的通过率为 82.8%，但 KillComplete 仅 33.8%。
- **开放状态**：GitHub 含 benchmark、Docker、engine、测试与结果目录；Hugging Face 数据集可下载。属于本周少数“数据—环境—评分”均已落地的项目。
- **为什么值得关注**：它揭示了测试生成最容易被 Pass Rate 掩盖的问题：空断言、浅覆盖或只验证 happy path 的测试也可能执行成功。对于 Coding Agent 平台，这是比单纯 compile/test pass 更接近真实质量的验收方式。
- **可直接借鉴**：从开发者 BDD 资产恢复需求—测试配对；用目标实现遮蔽避免白盒抄答案；基于真实测试构造突变集合；把“可执行”与“行为充分”拆成两级门槛。适用于代码数据质检、测试生成训练集验收和 Coding Agent 回归评测。

### 2. EmbodiedLab｜具身智能 / AI for Science

- **首次发布**：2026-10-26，arXiv v1。
- **第一作者与机构**：Hongcheng Gao；HexaFuture、清华大学、北京大学、新加坡国立大学等。
- **评什么**：机器人不是执行预先给定的实验步骤，而是为了获得未知结论自行决定操作、观察和下一步实验，即“act to know”。任务包括测量、预测或配置物理系统，系统参数每个实例重新采样，不能靠记忆答案。
- **规模**：**30 个定量实验**，覆盖 5 个学科和 14 套实验装置平台；论文声明每个实验均验证可解。
- **评测方式**：物理模拟实验室提供相机观测和分层控制接口；评分同时检查 Agent 最终学到的量、其结论是否由 episode 内仪表读数支持，以及任务要求的物理状态。评估 6 个前沿模型，并分原生控制、增强感知/规划及蒸馏操作技能等设置。原生控制下最佳成功率仍低于 50%。
- **开放状态**：官方 GitHub 提供 benchmark、Docker lab、SDK、services、experiments、评分文档与 leaderboard，Apache-2.0；截至截稿核实为 17 stars。实际运行需要满足模拟器与算力依赖。
- **为什么值得关注**：大多数具身评测把“目标状态”直接交给机器人；本项目把主动实验、证据采集和结论正确性串成闭环，尤其适合评估具身 Agent 的信息获取策略，而非只评动作成功。
- **可直接借鉴**：逐实例重采样隐藏物理参数；把任务拆成知识结果、证据充分性和物理状态三层评分；提供不同抽象层级接口区分推理与低层操作瓶颈；上线前对所有任务做可解性验证。适用于机器人科学实验、故障诊断和主动感知评测。

### 3. Co-Design Bench｜多模态 Coding Agent

- **首次发布**：2026-10-26，arXiv v1；公开代码和数据在当周补齐。
- **第一作者与机构**：Xilin Wei；Qwen 团队等。
- **评什么**：Agent 接收一个可运行应用以及来自真实用户的多模态修改需求，需求可包含截图、图片、音频、视频、PDF 或表格；最终要交付能运行、满足全部约束的应用修改。
- **规模**：论文完整评测为 **273 个任务**，源自 37,463 条去重查询和 26,314 个真实用户编程会话，含 2,331 条隐藏专家验收标准。其中 Multimodal Editing 100 题、Repository Editing 173 题。当前 Hugging Face **公开子集为 96 个 ME 任务、521 条标准**；RE 轨道未公开，不能把 273 题都视为可下载集。
- **评测方式**：judge-then-refute 先用源码和浏览器证据逐项判分，再由独立 verifier 反驳可能的虚假通过，包括 stub、硬编码、不可达功能和需求错配；视觉结论需截图证据，交互结论需浏览器动作记录。指标包括 Strict、Graded 和 Full pass，后者要求任务所有标准全部通过。最佳端点平均通过 69.9% 标准，但完整任务成功率仅 26.4%。
- **开放状态**：GitHub 提供 CLI、评分、样例与公共清单；HF 提供 96 题 ME 子集。完整 273 题和论文复现实验基础设施并未全部开放。截至截稿 GitHub 45 stars、HF Papers 20 upvotes。
- **为什么值得关注**：它把“平均要求完成度”和“完整可交付率”明确分开，直接暴露 Coding Agent 常见的 80% 完成陷阱；同时给出一种不依赖唯一 gold code 或目标截图的可审计判分协议。
- **可直接借鉴**：从真实会话抽取需求而非人工编题；由专家写原子验收标准；用源码、浏览器、截图和动作证据联合判分；对正向 judge 结论增加反证环节；公开集与隐藏测试严格隔离。适用于 Web/App Coding Agent、客户验收型任务和多模态代码数据质检。

## 其余入选项目

### 4. ATLAS-Bench｜Tool Agent / 本地搜索

- **首次发布**：2026-10-29。**第一作者**：Keyun Zhang；高德地图、阿里巴巴集团。
- **评什么与规模**：1,200 个查询，覆盖 3 个区域，由真实搜索事件、POI 属性、评论和用户画像扩展而来。每题显式拆分 mandatory requirement / preference，以及 factual / subjective judgment。
- **评测方式**：ATLASBox 固定 POI 知识库、搜索工具、时间和位置；Agent 要推荐有证据支持的地点，或判断无地点满足全部硬约束。指标覆盖答案质量、轨迹质量和执行成本；论文评估 11 个模型的 14 种配置。
- **开放状态**：论文对环境与数据结构描述完整，但截至截稿未核实官方 GitHub 或 HF 下载链接，故“可运行”仍是论文声称而非已验证公开资源。
- **为什么值得关注 / 可借鉴**：把约束满足率、事实准确率、可用推荐覆盖率拆开，避免一个高精度但频繁不给答案的 Agent 被误判为更好。适用于地图、本地生活、电商搜索与供应商筛选型 Agent。

### 5. IntReal｜多模态生成 / Dataset

- **首次发布**：2026-10-28；官方仓库记录 10 月 30 日完成 Day-0 资源发布。**第一作者**：Shaohan Yu；南京大学、美团、Imperial College London、NTU。
- **评什么与规模**：IntReal-100K 含 **100,000 个真实图文交错样本、538,452 张图片、7 个来源、4 类场景**；评测套件从 7 个维度诊断统一多模态模型的文本—图像交错生成。
- **评测方式**：组合 VLM 与专用 expert model 做整体和模态特定评分。论文报告指标间最大绝对 Spearman 相关 ≤0.42、与人工判断一致率 83.3%、不同 expert evaluator 一致性 >0.9，并评估 4 类 UMM。
- **开放状态**：GitHub 有 evaluation、experts、metrics 和推理代码；HF 已开放数据、微调模型和 leaderboard，Apache-2.0。属于本期开放最完整的数据集项目之一。
- **为什么值得关注 / 可借鉴**：用“低指标冗余 + 人工一致性 + evaluator 稳定性”验证指标组合，而非只列多个自动分数。适用于图文教程、旅行规划、故事生成和多模态内容生产数据。

### 6. DynaRev｜Web Agent

- **首次发布**：2026-10-29。**第一作者**：Shiqi Zhang；香港城市大学、上海交通大学。
- **评什么与规模**：181 个动态目标任务，包括 76 个追加要求、62 个无条件覆盖和 43 个条件覆盖任务，来源于 Online-Mind2Web 与 Mind2Web 2。
- **评测方式**：在任务定义的语义里程碑而非固定步数触发用户修改；用轨迹约束评估 correctness、responsiveness 和 efficiency。官方 runner 基于 BrowserGym，默认每题最多 100 步。
- **开放状态**：GitHub 已提供 3 个 JSONL 数据文件、runner、依赖和单题/全量执行命令，属于可运行状态；部分源环境仍受原 benchmark 与网站可用性影响。
- **为什么值得关注 / 可借鉴**：它把用户中途改需求建模为一等事件。可直接复用“语义里程碑触发 + 三种修订类型 + 保留浏览器状态”的设计，适用于客服、网页操作和长流程工作助手。

### 7. V³AST-Bench｜Coding Agent / 安全

- **首次发布**：2026-10-26。**第一作者**：Weitao Feng；NTU、阿里巴巴。
- **评什么与规模**：论文含 **212 个风险任务、18 类风险**，每个风险任务配一个能力孪生任务；公开仓库因此共有 **424 个任务**。论文实验覆盖 11 个模型、5 个 harness、51 种组合、86,496 次试验。
- **评测方式**：独立运行环境通过系统状态、事件记录和产物行为执行式检查真实伤害；能力孪生任务用于区分“安全拒绝”和“根本不会做”。论文报告最强组合仍在 20.9% 的适用风险任务中造成可验证伤害。
- **开放状态**：MIT 仓库含全部 adversarial/capability 任务、runner、6 个 Agent adapter、配置与复现文档，可实际运行。
- **为什么值得关注 / 可借鉴**：将 harm rate 与 capability-conditioned harm rate 结合，解决弱模型因不会执行而显得“安全”的假象。适用于 Coding Agent、命令执行工具和沙箱越权测试。

### 8. TreasuryQA Bench｜Office Agent / 文档检索

- **首次发布**：2026-10-28。**第一作者**：Ritiz Tambi；Veris AI。
- **评什么与规模**：70 道精确数字题，目标信息分布在 **1,435 份扫描版美国财政出版物**中。任务要求 Agent 先通过 Dropbox MCP 找文件，再调用 Reducto OCR MCP 或自有工具读页，最后返回表格值、合计、百分比或统计量。
- **评测方式**：Python grader 将 `ANSWER:` 数值与允许误差区间比较；10 个 Agent 重复评估，并按扫描清晰度、是否提交数字、提交后正确率和成本分析。最佳 pass@1 为 64.8%，最弱 16.7%。
- **开放状态**：官方 leaderboard 可访问，论文称 harness、fixtures、reference sets 与运行数据公开；本次未核实到独立 GitHub 地址。完整复现依赖 Dropbox/Reducto 的托管 MCP 服务，因此不是纯离线开箱运行。
- **为什么值得关注 / 可借鉴**：把文档定位、图像 OCR、表格理解、数值计算和工具成本串成真实办公链路。适用于财务档案、合同、票据和企业共享盘 Agent。

### 9. Visual Commission Bench｜图像 Agent / 多模态

- **首次发布**：2026-10-29。**第一作者**：Tong Li；美团、中国科学技术大学。
- **评什么与规模**：600 个任务，分 12 类、45 个子类和 S/M/C 三层，每类 50 题；含 4,288 个源文件、约 981 万可机读 token、5,039 条要求检查，中文和英文各 300 题。
- **评测方式**：对交付产物计算 requirement pass、strict task pass 和四维视觉质量分；缺失或不可解码图片记 0。要求判分与视觉质量使用分离提示，且 evaluator 不看系统身份与执行轨迹。V-Protocol 整体 TaskPass 为 69.0%，SCOPE 为 42.0%。
- **开放状态**：论文完整说明数据结构、评分和执行 harness，但截至截稿未核实官方代码或数据仓库；私有评测标注不向被测 Agent 开放。当前应视为“论文可审查、资源未确认”。
- **为什么值得关注 / 可借鉴**：将单图 prompt following 提升为多素材、多阶段、多产物的委托交付；可复用 revision ID、依赖快照、内容 hash 和失效传播机制，适用于设计、营销物料和 AI 漫剧生产评测。

## 本周 Benchmark 变化趋势

1. **从“代码能跑”转向“行为真的被验证”**：Req2Test 用突变杀伤完整性、Co-Design 用反证 verifier，开始系统识别空测试、硬编码和部分完成。
2. **评测环境开始模拟需求变化**：DynaRev 把中途改需求引入 Web Agent；完整交付不再假设目标在执行前完全固定。
3. **具身 Agent 从动作完成走向主动实验**：EmbodiedLab 要求机器人为获取信息而操作装置，并对证据链和物理状态同时负责。
4. **工具评测更重视真实数据摩擦**：ATLAS 的主观评论与硬约束、TreasuryQA 的扫描质量和 MCP 链路都把生产环境噪声纳入评分。
5. **多模态评测从单输出转向内容资产链**：IntReal 检验图文交错生成，VCB 与 Co-Design 则评估多素材、多阶段和最终可交付产物。

## 编辑核验说明

- 检索窗口为北京时间 2026-10-26 00:00 至 2026-11-01 22:00 左右；arXiv 日期按首次提交日记录。
- 本期所有项目均为窗口内首次发布，没有用旧项目或仅因媒体再次报道而入选。
- “关注度”只采用已核实的 GitHub stars、HF Papers upvotes/资源发布状态，或明确标注为编辑判断；新项目的零引用不作为质量否定信号。
- 未进入 Top 9 但完成审查的高质量候选包括 FeatureArc、InfraDev、LiveSearch、SkillLifeBench、AgentDecept 和 MAServeBench。主要落选原因是与已选项目主题重合、开放资源不足，或在真实可运行性与规模清晰度上略逊一档。

