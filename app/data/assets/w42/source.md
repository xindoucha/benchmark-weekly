# Benchmark 精选周刊｜2026-W42・第 10 期

每周精选新发布的 benchmark 和数据集  
Weekly picks of newly released benchmarks and datasets

**检索窗口：2026-10-12—2026-10-18。** 本期 9 项均为窗口内首次发布，无需使用 14 天补位。排序优先考虑任务真实性、规模透明度、评测可执行性与方法复用价值；“关注度”仅采用截至 2026-10-18 可核实的 GitHub/Hugging Face 信号，或明确标注为编辑判断。

## 本周 Benchmark Top 9

| 排名 | Benchmark/Dataset | 方向 | 简要介绍 | 发布时间 | 发布机构 | 超链接 | 关注度 |
|---:|---|---|---|---|---|---|---|
| **1** | **FDE-Gym** | Agent / Coding Agent | 95 个端到端交付任务，要求 Agent 从含糊需求、利益相关者与生产式系统中找出真实问题，并以业务指标验收。 | 2026-10-15（v1） | DeepLethe、清华、上交等 | [arXiv](https://arxiv.org/abs/2610.22350) · [项目页](https://fde-gym.com/paper/) · [GitHub](https://github.com/deeplethe/fde-gym) · [HF](https://huggingface.co/datasets/DeepLethe/FDE-Gym) | **高**：GitHub 105 stars；HF 426 likes |
| **2** | **DataWorld-Bench** | Dataset / Benchmark Infrastructure | 先定义世界机制，再生成多文件数据、任务和原子 rubric；100 个评测任务与 2,135 个训练任务世界隔离。 | 2026-10-15（v1） | 美团 Longcat、南京大学等 | [arXiv](https://arxiv.org/abs/2610.21656) · [项目页](https://zhanli-li.github.io/Data-World/) · [GitHub](https://github.com/Zhanli-Li/Data-World/) · [HF](https://huggingface.co/collections/Zhanli-Li/dataworld) | **较高**：GitHub 19 stars；编辑判断为本周最强基础设施项目之一 |
| **3** | **LADDER** | 具身智能 / 机器人 | 在同一环境中把任务链从 1 扩展到 10 个子目标；145 任务、3 套环境、2 种机器人，隔离“长时域”变量。 | 2026-10-13（v1） | INSAIT / 索非亚大学、NVIDIA | [arXiv](https://arxiv.org/abs/2610.18053) · [项目页](https://ladder.insait.ai/) | **高（编辑判断）**：系统性长时域设计、含仿真与真机验证 |
| 4 | **MindEval2** | Agent / 模型评测 | 50 个合成患者×3 次连续会话，用临床心理学家定义的 14 类问题 rubric 评估非危机心理支持。 | 2026-10-15（v1） | Sword Health、NVIDIA、IST、Yale | [arXiv](https://arxiv.org/abs/2610.22314) · [GitHub](https://github.com/SWORDHealth/mind-eval) | **较高**：GitHub 49 stars / 10 forks |
| 5 | **Realtime-Bench** | 多模态 Agent | 50 个实时网页与游戏任务，用 Wall / Paused / Token 三种时钟把服务延迟与时间感知能力拆开。 | 2026-10-15（v1） | UT Austin、NVIDIA 等 | [arXiv](https://arxiv.org/abs/2610.22155) · [项目页](https://realtimeagents.org/) · [GitHub](https://github.com/RealtimeAgents/Realtime-Bench) | **较高（编辑判断）**：实时动作评测范式新；GitHub 3 stars |
| 6 | **EvoWeb** | Coding Agent | 32 个 Web 应用各经历 10 次累积需求，浏览器 Agent 每轮检查新增、跨轮集成与回归功能。 | 2026-10-12（v1） | Two Delta Labs、特拉维夫大学等 | [arXiv](https://arxiv.org/abs/2610.16402) · [GitHub](https://github.com/two-delta/EvoWeb) · [HF](https://huggingface.co/datasets/TD-Labs/EvoWeb) | **中等**：GitHub 5 stars；代码、数据、轨迹均开放 |
| 7 | **WorldMemBench** | 多模态 / 世界模型 | 260 个视频世界记忆样例，分测身份/外观/几何保持与离屏事件演化，并加入多次回访。 | 2026-10-13（v1） | 浙江大学、复旦、蚂蚁、南京大学 | [arXiv](https://arxiv.org/abs/2610.19063) · [项目页](https://zjureal.com/WorldMemBench/) · [GitHub](https://github.com/ZJU-REAL/WorldMemBench) | **较高**：GitHub 15 stars；评分代码与推理结果已发布 |
| 8 | **Grid-Bench** | 模型评测 / 空间推理 | 1,488 个可执行样例覆盖 8 类操作、2D/3D/4D 网格和最长 64 步事件历史，逐单元核验完整终态。 | 2026-10-15（v1） | USC 等多机构 | [arXiv](https://arxiv.org/abs/2610.22312) · [项目页](https://grid-bench.github.io/) · [GitHub](https://github.com/grid-bench/Grid-Bench) · [HF](https://huggingface.co/datasets/xzx34/Grid-Bench) | **中等（编辑判断）**：新仓库 0 star，但执行器与证据表完整开放 |
| 9 | **J-tau** | Tool Agent / 多语言评测 | 278 个日语客服任务覆盖航空、零售、电信；不仅翻译，还本地化实体、人工复核并修复原基准计分缺陷。 | 2026-10-14（v1） | SB Intuitions、名古屋大学 | [arXiv](https://arxiv.org/abs/2610.19638) · [GitHub](https://github.com/sbintuitions/j-tau-bench) | **较高**：GitHub 15 stars / 203 commits |

## Top 3 精读

### 1. FDE-Gym｜Agent / Coding Agent

- **第一作者与机构**：Dongxu Yang；DeepLethe。合作机构还包括清华大学、上海交通大学、微软亚洲研究院、Meta、Harvard、Stanford 等。
- **评什么**：不是“按工单修代码”，而是要求 Agent 在含糊甚至误导性的 sponsor 请求下，阅读客户文档和历史数据、询问 130+ 个脚本化 stakeholder、修改生产式系统，并真正提升客户 KPI。
- **规模**：20 个真实交付项目改编场景、18 个行业、95 个任务（20 个原始任务 + 75 个事实变体）；4 个信息披露层级 L0–L3。论文评测 13 个模型配置，每个组合重复 3 次。
- **评测方式**：Python/SQLite 隔离工作区；提交后原样部署，在未见生产数据上计算 `FDE-Gym Score = incident-adjusted normalized business uplift − stakeholder contact cost`。0 为不改系统，1 为专家参考方案；得分≥0.8 且无事故才算解决。单次最多 200 turn、150 分钟或 8 美元。
- **论文发现**：最优配置平均仅 0.56，95 题只解决 14 题；说明“发现隐含约束”与“把信息转化为有效交付”是两道不同瓶颈。
- **开放状态**：harness 与 runner 以 Apache-2.0 开源；20 个原始场景在 HF 可申请访问，只有 3 个完整样例直接公开；75 个变体及参考方案保持隐藏。不能把“论文共 95 题”误写成“95 题均可下载”。
- **可直接借鉴**：用“业务提升—操作事故—沟通成本”三项组成单一验收分；为同一环境制作事实变体与分层提示；预先定义 reference / do-nothing / literal / shortcut 四类 anchor，并对 grader 做反作弊回放。适用于企业 Agent、交付 Agent 与长链路 coding agent。

### 2. DataWorld-Bench｜Dataset / Benchmark Infrastructure

- **第一作者与机构**：Zhanli Li；美团 Longcat Interaction Team、中央财经政法大学。合作含南京大学、浙江大学、中科院自动化所等。
- **评什么**：数据 Agent 是否能从多源 CSV/Excel 中完成计算，更重要的是能否发现并解释由潜在机制生成的关键现象。
- **规模**：评测集 100 个任务、50 个 held-out world、16 个领域；训练集 2,135 个任务、1,037 个不相交 world。完整集与评测子集明确世界级隔离。
- **评测方式**：先用依赖 DAG 和 world contract 生成 canonical state，再投影为带缺失、延迟、重复、ID 不一致与漂移的可见文件；独立 auditor 检查目标是否可恢复；原子 rubric 分开计 `data_computation` 与 `insight_discovery`。官方导出 Harbor 任务并以 mini-swe-agent 求解。
- **论文发现**：10 个前沿模型普遍出现“计算正确、洞察不足”的断层；在合成任务上 RL-zero 训练得到的 35B-A3B 模型，在 DataWorld-Bench 上相对基座提高 7.06 分。
- **开放状态**：引擎、示例、任务合成器、文档与 HF 集合公开；但当前 Dockerfile 依赖内部基础镜像/镜像源，外部运行前需要适配基础设施，导出目录还可能含 judge 凭据，不能直接公开。
- **可直接借鉴**：先写因果/依赖机制再生成文件；把污染建模为显式 observation mechanism；让 auditor 与 generator 隔离；由生成真值自动派生 rubric。适用于 data agent、财务分析、运营分析与合成训练环境。

### 3. LADDER｜具身智能 / 机器人

- **第一作者与机构**：Petko Petkov；INSAIT、索非亚大学。合作机构 NVIDIA。
- **评什么**：在环境、物体与低层技能尽量固定时，只增加任务子目标数，测量 VLA/机器人策略如何随 horizon 增长崩溃，以及高层 orchestration 是否能补救。
- **规模**：SimplerEnv-Long、RobotArena-∞-Long、RoboLab-Long 三套环境；145 个任务、8 类空间/逻辑结构、1–10 个子目标、2 种 embodiment（WidowX、Franka）；每个系统 2,024 个仿真 episode，并有两种真机实验。
- **评测方式**：每个子目标由程序化 predicate 判分，同时报告完整任务成功率；比较“完整指令直出低层策略”、文本子目标编排和工具选择编排，并记录机器人时间、VLM 调用、token 与 API 成本。
- **论文发现**：单子目标仿真成功率 85.4%，长链路近乎归零；编排可提升，但低层执行误差仍是上限。工具选择式 GPT-Policy 达约 62%，代价显著更高。
- **开放状态**：论文与项目页公开；项目页提供任务目录和评测材料说明。当前可核实入口未单列独立 GitHub/HF 仓库，故不把“代码完全开放”作为已证实事实。
- **可直接借鉴**：构建“同场景递增子目标”的 paired ladder；逐子目标 predicate + 全任务 success 双层评分；把计划、触发、视觉验证、失败恢复拆成可消融模块。适用于长时域 manipulation 与 VLA orchestration。

## 其余 6 项

### 4. MindEval2｜Agent / 模型评测

- **第一作者与机构**：John Mendonça；Sword Health。合作含 NVIDIA、Instituto Superior Técnico、Yale。
- **评什么与规模**：非危机、日常心理支持中的多轮与跨会话质量。先生成 1,000 个 profile，经 adversarial judge 筛选后形成 100 人验证池，正式 benchmark 使用 50 人；每人 3 次会话、每次最多 30 turn，共 150 个 session/模型，评测 18 个模型。
- **评测方式**：MindSim 先用 tool call 选择对话 move，再生成患者回复；跨 session 共享最多 30 条 memory。MHQR 含 14 类临床问题、6 个大类；每个 counsellor reply 由 judge 标注问题与 0/1/5/10 严重度，按 session 聚合，并以 patient 为单位 bootstrap 95% 区间。
- **为什么值得关注**：把“像不像真人”“纵向记忆”“临床可操作 rubric”放在同一评测链路；论文还用三位临床心理学家的盲标校验 judge。注意它不含危机情境，不能据此宣称临床安全。
- **可直接借鉴**：profile 分层（人口属性—临床锚点—5P case formulation）；对模拟器先做对抗筛选与人评；开放式对话用“问题类型×严重度”替代单一 Likert 总分。
- **开放状态**：代码、prompts、profiles、annotations、运行脚本均在 GitHub；Apache-2.0。

### 5. Realtime-Bench｜多模态 Agent

- **第一作者与机构**：Jingyu Tang；UT Austin。合作含 Ohio State、UIUC、NVIDIA、Northwestern、Steadyworks。
- **评什么与规模**：50 个随时间自行变化的交互任务，其中 30 个网页、20 个游戏；官方仓库公开 v1.0 的 20 个任务（12 Web、8 Game），其余用于私有评测。
- **评测方式**：截图 + Set-of-Marks，统一 click/type/scroll/wait 动作；每任务重复 3 次。Wall Clock 计真实推理与服务延迟，Paused Clock 暂停环境，Token Clock 按生成 token 推进模拟时间；报告 success rate 与三次全过的 Pass³。
- **论文发现**：Wall Clock 下最佳 success 44%、最佳 Pass³ 36%；提高推理 effort 不总有利，因为更慢的动作可能错过窗口。
- **可直接借鉴**：用三时钟协议拆开“模型决策能力、时间感知、服务速度”；每题写明确的时间窗口与 task-specific success checker；将 latency 纳入任务动力学而非事后统计。
- **开放状态**：Linux + uv + Apptainer 可运行；公开 20 题与提交/私榜流程，完整 50 题并未全部公开。

### 6. EvoWeb｜Coding Agent

- **第一作者与机构**：David Nukrai；Two Delta Labs（作者团队含特拉维夫大学研究者）。
- **评什么与规模**：32 个 Web 应用，每个先构建再连续接收 9 个新增需求，共 320 个 cumulative request；依赖图刻画后续功能对先前功能的依赖。
- **评测方式**：OpenHands 驱动 coding agent；每轮启动真实网页，由 WebVoyager + 视觉模型逐 check 测新增功能、跨需求集成与历史回归；汇总 Grade 与连续可用的 Survival。官方提供 Docker harness、评分器、部分完整轨迹和多模型接口。
- **为什么值得关注**：把 repo 持久演化与浏览器级功能验收结合，能测出一次性 web benchmark 看不到的集成债务与回归失败。
- **可直接借鉴**：每个 app 建功能依赖 DAG；沿持久 codebase 顺序发需求；每轮既测新增项也重测历史项；以“曲线下面积/容忍阈值”描述整条演化轨迹。
- **开放状态**：GitHub Apache-2.0，代码、数据和轨迹入口齐全；HF 数据集可下载。复现需要模型 API 或本地 vLLM，并需要视觉 judge。

### 7. WorldMemBench｜多模态 / 世界模型

- **第一作者与机构**：Nan Zhou；浙江大学、蚂蚁集团。合作含复旦大学、南京大学。
- **评什么与规模**：260 个 case、23 类语义；其中 200 个静态记忆 case（人 60、物 70、环境 70），60 个动态记忆 case；另在 85 个静态 case 上测 camera following。
- **评测方式**：相机离开目标后一次或多次回访；静态内容始终和首次观察 reference 比较，动态内容按预期状态迁移 checklist 判分；同时报告身份、外观、几何、可见性、深度、重建、事件启动/持续/因果及通用视频质量。
- **论文发现**：九个世界模型中，静态记忆领先不等于动态演化可靠；HY-WorldPlay 七个静态指标领先，但规定事件启动率仅 31.7%。自动指标与人评在六项静态指标上成对一致率 78.5%–92.5%，动态总分 Spearman ρ=0.732。
- **可直接借鉴**：固定 reference 的 multi-revisit 设计可显式测累计漂移；把 event onset 与 state persistence 分开；单列 camera following，避免“没有按轨迹回访”被误算成记忆失败。
- **开放状态**：MIT 评分代码已开放，HF 有样例、权重与推理结果；完整 benchmark 输入/运行成本仍需按官方说明准备。

### 8. Grid-Bench｜模型评测 / 空间推理

- **第一作者与机构**：Zixiang Xu；USC 等多机构团队。
- **评什么与规模**：8 类空间操作（几何、邻域聚合、连通区域、移动）×2D/3D/4D；1,488 个唯一实例来自 248 条 reference trajectory，历史长度 T=0/1/8/16/32/64；六模型共 8,928 个 outcome。
- **评测方式**：模型收到初始稀疏网格、显式规则与事件序列，一次性返回完整终态；执行器生成 gold state，报告 full-world exact match、错误单元数、cell accuracy、update/preservation accuracy，并对 trajectory 做分层 bootstrap。离线复核 30,008 个 prefix event，零差异。
- **为什么值得关注**：不仅问“答案对不对”，还测错在哪里、错多少，并能区分相同 EM 下的结构化误差；最长 64 步让状态更新与保留同时受压。
- **可直接借鉴**：用同一 trajectory 的多 prefix 形成难度曲线；完整状态评分 + 局部误差诊断并行；参考执行器和第二套实现交叉验证 gold。
- **开放状态**：GitHub 提供执行器、测试与复现工具，HF 提供实例、reference state 和证据表；采集到的模型原始答案未开放。

### 9. J-tau｜Tool Agent / 多语言评测

- **第一作者与机构**：Chihiro Yano；SB Intuitions、名古屋大学。
- **评什么与规模**：278 个日语客服任务：airline 50、retail 114、telecom 114；测 Agent 是否在日语对话中遵守领域 policy、正确调用工具并完成用户目标。
- **评测方式**：在 tau2-bench 环境运行 agent/user simulator；任务级 reward 由数据库状态、工具调用与自然语言 assertion 组成。作者把姓名、地址、机场、货币、时区等实体本地化，三位专家按域复核，并对航空/零售任务做人工试跑。
- **实质贡献**：修复原 tau-bench 的无解/非确定任务，以及把空响应和畸形 JSON 当作基础设施错误而剔除、从而虚高分数的聚合缺陷。J-tau 将这类 agent error 计为失败。
- **可直接借鉴**：多语言 benchmark 不应只翻译 utterance；必须同步本地化数据库、工具参数、返回值与错误消息；发布 task-change ledger，并用强模型多次试跑筛无解题。
- **开放状态**：代码、三域任务、patch、任务变更记录与 CLI 全部公开；Modified MIT。自然语言 assertion 默认需要额外 judge 模型。

## 本周 Benchmark 变化趋势

1. **从“答题”转向“运行中的系统”**：FDE-Gym、Realtime-Bench、EvoWeb 都把环境变化、部署后效果或跨轮回归纳入判分。
2. **评测开始主动隔离变量**：LADDER 只扩展子目标数；Realtime-Bench 用三种时钟拆解延迟；Grid-Bench 用同轨迹多 prefix 拆解序列深度。
3. **Rubric 由黑箱总分走向可审计原子项**：DataWorld-Bench 区分计算与洞察，MindEval2 标注具体临床问题与严重度，FDE-Gym 用显式业务/事故/沟通成本公式。
4. **完整集与公开子集的边界更重要**：FDE-Gym 95 题只直接开放 3 个完整样例；Realtime-Bench 50 题公开 20 题。排行榜可持续性与完全可复现之间的张力被明确写进发布方式。
5. **本地化正在升级为“环境级改造”**：J-tau 同步修改实体、工具、数据库、评分与任务有效性，说明多语言 agent benchmark 不能停留在机器翻译。

## 编辑核查与边界

- 已覆盖 arXiv cs.AI、cs.CL、cs.CV、cs.LG、cs.SE、cs.RO 的本周 recent 列表，并复核官方项目页、GitHub 与 Hugging Face 入口。
- 主要机构候选中还检查了 AI Consilium、LED-BENCH、AgentPerturb、HelpMeOut、LynxScenes、SWEeper-Bench 等；它们或开放/规模信息不如本期入选项完整，或任务方法复用价值略弱，故未为方向均衡降级入选。
- 所有规模与结果均按论文/官方仓库口径转述；“公开”严格区分代码公开、样例公开、完整评测集可下载与私有排行榜。
- 社区信号为 2026-10-18 抓取快照，会随时间变化；未把模型自报热度或无法核实的社媒讨论计入。

---

来源：心豆茶
