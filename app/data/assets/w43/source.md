# Benchmark 精选周刊｜2026-W43・第 11 期

每周精选新发布的 benchmark 和数据集  
*Weekly picks of newly released benchmarks and datasets*

**覆盖窗口：2026-10-19—2026-10-25（北京时间）**。本期 9 项均在过去 7 天首次发布，无近 14 天补位，也未收录只有宣传页而缺少可核验论文的项目。MemDerive 的 arXiv 时间为 10 月 18 日 16:24 UTC，对应北京时间 10 月 19 日。

## 本周 Top 9 总览

| 排名 | Benchmark/Dataset | 方向 | 简要介绍 | 发布时间 | 发布机构 | 超链接 | 关注度 |
|---:|---|---|---|---|---|---|---|
| **1** | **EpiSEM-Bench** | Agent / 安全评测 | 300 组安全/不安全配对任务；隐藏关键事实，检验 Agent 是否先补齐证据，再决定执行或拒绝。 | 2026-10-22 | 香港城市大学、港科大（广州）、港中大（深圳） | [arXiv](https://arxiv.org/abs/2610.31650) | **高（编辑判断）**：可执行配对世界同时约束安全与可用性 |
| **2** | **RoboValue** | 具身智能 / 机器人 | 15 个仿真与 20 个真机任务；统一评测价值模型的任务状态、进度、失败恢复与一致性判断。 | 2026-10-19 | 清华、智元机器人、Xspark AI 等 | [arXiv](https://arxiv.org/abs/2610.26663) · [项目页](https://robovalue-benchmark.github.io/) · [GitHub](https://github.com/RoboValue-Benchmark/RoboValue) | **高（编辑判断）**：仿真—真机闭环，数据和评测代码已发布 |
| **3** | **DecisionPivot** | 模型评测 / Benchmark Infra | 48 个任务、40,033 个样本；以关键条件最小差异对照，揭示总准确率掩盖的决策与校准缺陷。 | 2026-10-20 | StartLux、香港大学等 | [arXiv](https://arxiv.org/abs/2610.28522) · [GitHub](https://github.com/StartLuxLabs/DecisionPivot) · [HF](https://huggingface.co/datasets/startlux-models/DecisionPivot) | **高**：HF 周榜 74 upvotes；代码、评分器与数据入口已开放 |
| 4 | **MemDerive** | Agent Memory | 10 个场景、4,692 个事件、1,503 个查询；用 Datalog 推导图定位记忆系统的中间状态失败。 | 2026-10-19 | 新加坡国大、上交、Zero Gravity Labs | [arXiv](https://arxiv.org/abs/2610.25373) · [数据](https://anonymous.4open.science/r/DeriveMem-67C6) · [评测框架](https://anonymous.4open.science/r/DerivEval-6799) | **较高（编辑判断）**：把 Agent 记忆从最终答案推进到可追溯状态维护 |
| 5 | **AgentPhishing** | Agent / 安全红队 | 对邮件 Agent 自适应优化钓鱼生成技能，同时测钓鱼漏检与对恶意请求的实际服从。 | 2026-10-22 | 卡内基梅隆大学 | [arXiv](https://arxiv.org/abs/2610.31404) | **较高（编辑判断）**：传统钓鱼集上的安全结论被自适应攻击推翻 |
| 6 | **MindView** | 多模态 / 3D 空间智能 | 513 个室内场景、1,500 个样本；从多视图证据按语言要求生成空间一致的目标视图。 | 2026-10-20 | 清华、上海 AI Lab 等 | [arXiv](https://arxiv.org/abs/2610.28622) · [项目页](https://yanbo-23.github.io/MindView/) | **较高（编辑判断）**：将空间推理转为可对照真实目标视图的生成任务 |
| 7 | **EvaOmni** | 多模态 / 音视频推理 | 392 个视频、1,027 个人工问答；答案必须同时返回音频与视觉证据时间区间。 | 2026-10-20 | 上交、上海创智学院等 | [arXiv](https://arxiv.org/abs/2610.28444) · [项目页](https://xiaoxing2001.github.io/EvaOmni.github.io/) · [GitHub](https://github.com/VisionXLab/EvaOmni) | **较高（编辑判断）**：把“答对”与双模态证据定位绑定 |
| 8 | **PhysTrace / IntPhys2-Timing** | 世界模型 / 视频评测 | 为视频物理违例增加起止时间标注；滑动窗口定位生成视频何时违反物理一致性。 | 2026-10-22 | 韩国独立研究者、釜山国立大学 | [arXiv](https://arxiv.org/abs/2610.31429) · [GitHub](https://github.com/PhysTrace/PhysTrace) | **中等**：GitHub 2 stars；代码、标注和批量评分入口已开放 |
| 9 | **Benchmark Difficulty Measure / BenchFill** | Benchmark Infrastructure | 把题库视为难度分布；诊断难度错配与覆盖空洞，并针对空洞生成、验证补充题。 | 2026-10-21 | UIUC、UCSD、NYU | [arXiv](https://arxiv.org/abs/2610.29927) · [项目页](https://benchmark-difficulty-measure.github.io/) · [GitHub](https://github.com/ASTRAL-Group/benchmark-difficulty-measure) · [HF](https://huggingface.co/datasets/Yifan99/BenchFill) | **较高**：NeurIPS 2026；GitHub 11 stars，完整诊断与生成代码开放 |

## Top 3 重点项目

### 1. EpiSEM-Bench｜Agent 在缺失证据下的安全执行

- **第一作者与机构**：Qijin Zhang（香港城市大学）；合作机构包括香港科技大学（广州）和香港中文大学（深圳）。
- **评什么**：工具返回的信息都是真的，但刻意缺少决定操作是否合法的关键事实。Agent 必须识别证据不足、调用独立审计工具找回事实，并在不安全世界拒绝操作、在安全世界完成同一目标。
- **规模**：300 组匹配任务，等价于 600 个世界；覆盖 6 个领域。每组共享用户目标、工具和隐藏掩码，仅底层权限状态不同。
- **评测方式**：可执行环境由完整状态 oracle 判定每次 commit。核心指标包括 Unsafe Commit Rate、Safe-World Success、Safety Boundary Margin 和 Paired Useful Recovery；后者要求同一 Agent 在危险世界不执行、在安全世界执行，避免“全部拒绝”刷安全分。
- **论文发现**：论文评测 10 个模型；开放审计工具后，所有模型的不安全执行均下降，但主动找回证据并正确用于两种世界的能力差异仍很大。
- **开放状态**：截至本期截稿，论文和实验描述公开；arXiv 页面未提供官方代码或数据链接，因此不能视为已可直接复跑。
- **为什么值得关注**：它把 Agent 安全从“是否识别恶意指令”扩展到更常见的生产风险——工具输出真实但不完整。配对世界同时测安全与效用，能抑制过度拒绝。
- **可直接借鉴**：在付款、权限变更、数据删除和资源调度任务中，构造只差一个授权事实的 safe/unsafe twins；隐藏同一字段，用状态 oracle 判动作，用 paired useful recovery 代替单一拒绝率。

### 2. RoboValue｜机器人价值模型的仿真—真机统一评测

- **第一作者与机构**：Shengbang Liu（清华大学、智元机器人）；合作方还包括 Xspark AI、中山大学、北京大学和香港大学。
- **评什么**：价值模型能否从视觉观察和指令中判断任务状态、执行进度、失败与恢复，以及对不同合法子任务顺序给出一致反馈。这类模型直接影响策略学习、规划和在线监控。
- **规模**：15 个仿真操作任务和 20 个真实机器人操作任务；数据包含专家示范、带细粒度标注的诊断轨迹、反事实指令、相同画面不同历史、恢复结果对照和多种合法执行顺序。
- **评测方式**：同一接口比较不同价值输出语义，报告任务状态、时间进度、失败/恢复和价值一致性四类能力；包含 zero-shot、one-shot、跨本体与跨环境设置，并提供排行榜。
- **开放状态**：官方 GitHub 已给出实现；仿真/真机的 Full-Shot 与 One-Shot 四个训练子集以 LeRobot v3.0 格式公开。论文和当前排行榜主要报告 zero-shot 与 one-shot。
- **为什么值得关注**：许多机器人系统默认 value/reward 模型可靠，但该工作显示，结果与前向进度分数较高时，模型仍可能在历史依赖、恢复判断和指令落地上出错。
- **可直接借鉴**：为同一子任务设计“画面相似但历史不同”的轨迹；加入失败后恢复与未恢复对照；分别报告 outcome、progress、recovery 和 consistency，而不是合成一个奖励分数。

### 3. DecisionPivot｜从单题准确率转向关键条件对照

- **第一作者与机构**：Xialie Zhuang（StartLux）；作者团队还涉及香港大学等机构。
- **评什么**：用于路由、guardrail、输出校验等控制点的 decision model，是否真正识别改变答案的关键细节，概率是否有序、置信度是否校准，以及高置信子集是否可靠。
- **规模**：48 个任务、40,033 个样本、7 类决策角色。核心轨道为 13 个生成任务族、7,800 个样本；参考轨道为 35 个公开测试集、32,233 个样本。论文评测 40 个决策模型和 14 个通用模型。
- **评测方式**：核心题组成 contrast groups，多数只改变一个会改变正确答案的 pivotal detail；答案由独立实现的 solver 交叉验证。报告 item accuracy、contrast-group accuracy、概率排序、校准与 selective coverage。
- **开放状态**：GitHub 提供生成器、独立 solver、runner 和 scorer；HF 数据需要申请访问并接受仅限评测的条件，下载后可用公开 hash 校验。代码 Apache-2.0，生成核心题 CC BY 4.0。
- **为什么值得关注**：论文展示两个 27B 模型在参考轨道只差 2.6 分，但对照组准确率分别为 70.1% 和 44.2%，说明平均准确率会掩盖控制点模型的结构性失效。
- **可直接借鉴**：把每个关键规则做成最小差异对照组；要求整组全对；分别检查 probability ordering 与 decision correctness；用独立 solver 和数据 hash 做发布质控。

## 其余入选项目

### 4. MemDerive｜可追溯的 Agent Memory 评测

- **第一作者与机构**：Sen Gao（新加坡国立大学）；合作机构为上海交通大学、Zero Gravity Labs。
- **评什么与规模**：10 个场景、4,692 个事件、1,503 个查询，覆盖报销、购物和学位规划等演化历史。重点不是记住某条原文，而是从多条记录推导当前任务状态。
- **评测方式**：每个场景具有符号定义；Datalog 生成精确答案、推导 DAG 和最小支持事件。最终答案之外，还把 DAG 节点变成 state probes，定位最低层错误，并连续检查显式与隐式状态更新。
- **开放状态**：数据与完整实验框架已通过 4open.science 匿名仓库提供，可下载；尚非稳定 GitHub release。
- **论文发现**：四个记忆系统在派生状态上均落后于 BM25；若直接提供支持事件，同一回答模型达到 96.01%。主要故障不是没有存储，而是没有为当前查询聚合出所需中间状态。
- **可借鉴方法**：在长程 Agent benchmark 中保存状态依赖图；分别评分 retrieval、state composition 和 refresh；将“新记录明确改值”与“依赖变化隐式传播”分开测试。

### 5. AgentPhishing｜自适应邮件社会工程红队

- **第一作者与机构**：Justin Tan（卡内基梅隆大学）。
- **评什么**：邮件 Agent 是否识别钓鱼，以及即使未识别时会不会点击链接、泄露信息或起草不安全回复。PhishOpt 根据目标 Agent 的反馈迭代优化可复用生成技能，但禁止显式覆盖系统指令等不真实攻击。
- **规模**：首轮针对 6 个 Agent 优化技能，随后在同一 6 个及额外 9 个 Agent 上交叉测试；说服原则分析覆盖 180 封钓鱼邮件评测。论文没有给出单一固定“完整集条目数”，因为攻击批次由技能生成。
- **评测方式**：Agent 输出结构化动作和可选回复；规则判定 detection、compliance、precision、F1 和 susceptibility。生成邮件另受真实性 judge 和良性/钓鱼近似平衡约束。
- **开放状态**：论文公开，附录公开生成技能与完整指标；截至截稿未找到作者官方代码/数据仓库，不能视为可一键运行。
- **论文发现**：传统公开钓鱼邮件上表现安全的 Agent，在自适应攻击下仍会失败；通用技能对额外 9 个 Agent 中的 4 个造成低于 10% 检出率和高于 45% 恶意请求服从率。
- **可借鉴方法**：安全 benchmark 不只测分类，还要把“检测—动作—回复内容”串起来；将攻击生成器、目标 Agent 与规则 evaluator 分离，并做跨 Agent transfer matrix。

### 6. MindView｜生成式多视图空间智能

- **第一作者与机构**：Yanbo Wang；作者团队来自清华大学、上海人工智能实验室、上海交通大学、复旦大学、香港大学和 UC Berkeley。
- **评什么与规模**：从 ScanNet、ScanNet++ 和 ARKitScenes 的 513 个室内场景构造 1,500 个样本、7 类任务。输入为同一场景的部分 RGB 视图和语言指令，输出未给相机参数的目标视图。
- **评测方式**：几何类任务控制平移、旋转及组合；语义类任务考查物体指代、相对位置和参考系。六类指标分别衡量内容、空间、渲染质量和几何一致性；目标图是真实采集帧。
- **开放状态**：论文与项目页公开；截至截稿，项目页可核验任务和结果，但未确认公开数据下载与完整运行仓库，实际可运行状态记为未完全开放。
- **论文发现**：11 个生成器在从 6 个视图扩到 10 个视图时整体分数反而下降；针对性微调 BAGEL 后总分提高 24.3 分。
- **可借鉴方法**：用真实目标视图替代纯 VLM 主观评分；把几何控制与语义推断拆开；加入“更多上下文是否真有用”的 paired context 测试。

### 7. EvaOmni｜答案与双模态证据共同计分

- **第一作者与机构**：Xiaoxing Hu（上海交通大学）；合作方包括上海创智学院、复旦、北理、同济、港科大（广州）、清华、字节、腾讯优图等。
- **发布时间**：2026-10-20 首发 v1；2026-10-21 更新 v2。
- **规模**：392 个真实视频、1,027 个人工问答、15 类能力、3 个推理层级；视频时长 1–12 分钟，官方评测预处理为 1 FPS、长边 480 px。
- **评测方式**：模型必须同时给出答案、音频证据时间段和视觉证据时间段。Accuracy 外，Coverage Grounded Score 衡量证据覆盖，Bottleneck Grounded Score 用较弱模态的定位表现限制总分。
- **开放状态**：GitHub 已发布预测格式、示例和可运行指标 evaluator；provider-specific 推理适配器和原始 prompts 标为后续计划。数据在 ModelScope 有官方条目。
- **论文发现**：最佳系统准确率 79.4%，但 B.G. 仅 35.1%；Level 3 准确率 79.1% 时 B.G. 只有 12.3%，说明很多正确答案缺少双模态证据链。
- **可借鉴方法**：将答案 correctness 与 evidence coverage 相乘/绑定；双模态任务采用 bottleneck 聚合，防止视觉强而音频弱时被平均分掩盖；构造视频级 distractor 并进行文字/单模态 shortcut 筛查。

### 8. PhysTrace / IntPhys2-Timing｜定位视频物理违例发生时刻

- **第一作者与机构**：Taekoan Yoo（韩国独立研究者）；合作机构为釜山国立大学。
- **评什么**：不是只给生成视频一个“是否物理合理”总分，而是沿时间轴定位实体性、永久性、不变性和连续性何时被破坏，并描述预期状态与观察状态的差异。
- **规模**：IntPhys2-Timing 在 IntPhys2 上增加违反区间；公开摘要未给出总视频数，因此本期不推测。评测窗口为 2 秒、步长 1 秒。
- **评测方式**：MLLM 根据历史生成当前预期状态，再由视频—文本对齐模型与实际窗口比较；指标包含时间定位 Hit Rate 和 possible/impossible 分类准确率。论文最高 Hit Rate 为 70.7%。
- **开放状态**：MIT 许可 GitHub 提供 IntPhys2-Timing 标注、核心库、demo、批量推理与评分脚本；README 给出 A100/CUDA 12.8.1 测试环境，但仍依赖外部模型仓库。
- **可借鉴方法**：对视频生成 benchmark 增加 violation onset/end；把 MLLM 用于形成可解释预期、把相似度模型用于判定，降低直接让 LLM 当物理裁判的偏差。

### 9. Benchmark Difficulty Measure / BenchFill｜把题库当作难度分布

- **第一作者与机构**：Yifan Sun（UIUC）；合作机构为 UC San Diego 和 NYU。
- **评什么**：benchmark 的题目难度分布是否匹配目标评测分布，以及是否存在使局部能力提升无法被排行榜发现的难度空洞。
- **规模**：分析 7 个领域的 25 个流行 benchmark；发布 AIME 2024–2026、AMC 2023 的 105 道经人工筛选 BenchFill 补充题。
- **评测方式**：用 1PL IRT 估计题目难度；Difficulty Distribution Mismatch 基于 Wasserstein 距离，Maximum Gap 等指标测覆盖空洞；BenchFill 选择空洞和母题并迭代改写、验证。
- **开放状态**：NeurIPS 2026 论文；GitHub 包含 IRT、诊断、生成和 verifier，HF 提供 BenchFill 数据。原 benchmark 题目继续遵循各自许可。
- **为什么值得关注**：它解释了为何同一模型进步在不同题库权重下可能被放大或完全看不见，并把诊断直接转成补题流程。
- **可借鉴方法**：发布 benchmark 前先画难度质量分布；为目标用户定义期望难度分布；对 Max Gap 区间定向生成候选题，再以独立 verifier 和人工筛选把关。

## 本周 Benchmark 变化趋势

1. **Agent 安全从恶意输入转向证据充分性。** EpiSEM-Bench 测“工具说的都对、但关键事实缺失”，AgentPhishing 则测会不会从漏检继续走向危险动作。
2. **最终答案不足以解释失败。** MemDerive 保存状态推导 DAG，DecisionPivot 保存最小条件对照，EvaOmni 保存音视频证据区间，诊断对象从分数下钻到失败链条。
3. **具身评测开始审计反馈模型。** RoboValue 不只测策略能否完成任务，而是测训练和规划依赖的 value model 是否可靠，并跨仿真、真机、本体和环境比较。
4. **多模态评价更强调可定位证据。** EvaOmni 与 PhysTrace 都将时间区间纳入 ground truth，正确答案或视频级分类不再自动代表真实理解。
5. **Benchmark Infrastructure 开始管理题库分布。** DecisionPivot 用 contrast groups 防止平均分掩盖关键条件错误；BenchFill 则把难度覆盖空洞变成可计算、可补齐的工程对象。

## 来源与编辑边界

- 发布时间以 arXiv 首次提交时间为准；更新日期单独标注。
- 规模、指标和开放状态均来自论文、项目页或作者仓库。未在官方来源确认的数字不作推断。
- “已开放”仅表示页面或文件可访问；“可运行”要求至少存在代码入口、依赖或评分脚本。需要申请、匿名仓库或缺少适配器的情况均已单独说明。
- 关注度优先采用可核验的 HF/GitHub 信号；没有可靠社区量化信号时明确标注为编辑判断。

来源：心豆茶
