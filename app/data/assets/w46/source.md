# 《Benchmark 精选周刊》2026-W46 · 第14期

每周精选新发布的 benchmark 和数据集  
*Weekly picks of newly released benchmarks and datasets*

本期覆盖 **2026-11-09 至 2026-11-15**。Top 9 均来自过去 7 天首次发布的论文或与论文同步开放的独立数据资源；未使用近 14 天补位。第 8 与第 9 项来自同一论文，但分别对应可执行基准与独立开放数据集，交付物和复用方式不同。

## 本周 Top 9 总览

| 排名 | Benchmark/Dataset | 方向 | 简要介绍 | 发布时间 | 发布机构 | 超链接 | 关注度 |
|---:|---|---|---|---|---|---|---|
| 1 | **Embodied First Exam** | Coding Agent / 具身 | 1,156 个任务、35 套件、47 种机器人；统一比较直接控制、代码控制与策略训练。 | 11-09 | Northwestern、CMU、UC Berkeley、Stanford 等 | [链接1](https://arxiv.org/abs/2611.12177) · [链接2](https://www.embodied-first-exam.ai/) · [链接3](https://github.com/mll-lab-nu/embodied-first-exam) | 高 |
| 2 | **RoboRisk** | 具身 Agent 安全 | 92 个仿真与 13 个真机闭环任务，覆盖拒绝、修复、执行危险、注入与记忆。 | 11-10 | XJTLU、DKU、Liverpool、NUS、CNRS | [链接1](https://arxiv.org/abs/2611.14115) · [链接2](https://zhuqinfeng1999.github.io/LEASH/) · [链接3](https://github.com/zhuqinfeng1999/LEASH) | 高 |
| 3 | **MMDM** | 模型评测 / 决策 | 5,448 题、16 类任务；选项 2–1,024、上下文最长 64,817 tokens。 | 11-10 | CUHK、HKUST、LIGHTSPEED | [链接1](https://arxiv.org/abs/2611.14309) · [链接2](https://mmdm-benchmark.github.io/) · [链接3](https://huggingface.co/datasets/shenjunhao/mmdm) | 高 |
| 4 | **SO-Arena** | 模型评测 / 可靠性 | 2,919 项任务、11 领域；同时测能力、选项扰动稳定性与无答案识别。 | 11-11 | National University of Singapore | [链接1](https://arxiv.org/abs/2611.15777) · [链接2](https://lichenlillc.github.io/SO-Arena) · [链接3](https://github.com/holdrain/SO-Arena) · [链接4](https://huggingface.co/SO-Arena) | 高 |
| 5 | **MechEval** | 世界模型 / Agent | 从 20 个 ARC-AGI-3 游戏程序标注 69 种机制，逐次曝光评分预测变化。 | 11-09 | Third Intelligence、University of Tokyo | [链接1](https://arxiv.org/abs/2611.12324) · [链接2](https://github.com/third-intelligence/WARC) · [链接3](https://huggingface.co/third-intelligence/WARC) | 较高 |
| 6 | **JustRUA** | 具身 Agent / Harness | 在统一 RoboDojo 子集做单变量消融；精简 harness 将分数从 29.7 提至 50.3。 | 11-11 | 清华、面壁智能、华科、北大、腾讯 | [链接1](https://arxiv.org/abs/2611.16009) · [链接2](https://zefanw.github.io/JustRUA) · [链接3](https://github.com/ZefanW/JustRUA) · [链接4](https://huggingface.co/datasets/ZefanW/robodojo-devset-replays) | 较高 |
| 7 | **PolyRoute** | 多语种模型评测 | 12 语言、9 书写系统，加 156 条混写消息；评估三路客服决策与跨语泛化。 | 11-10 | Intel Corporation | [链接1](https://arxiv.org/abs/2611.13843) | 中等 |
| 8 | **Consensus Capture** | 多模态 / 视觉 | 静态真值与动态 4K 无人机双协议，揭示运动物体“多数共识”误导配准。 | 11-12 | EPFL | [链接1](https://arxiv.org/abs/2611.17190) · [链接2](https://github.com/rfonod/stabilo-benchmark) · [链接3](https://huggingface.co/datasets/rfonod/stabilo-benchmark) | 中等 |
| 9 | **UAV Stabilo OBB** | Dataset / 视觉基础设施 | 274,190 个定向框、5,419 帧 4K 无人机图像，为动态配准遮罩与复核提供数据。 | 11-12 | EPFL | [链接1](https://arxiv.org/abs/2611.17190) · [链接2](https://huggingface.co/datasets/rfonod/songdo-vision-obb) | 编辑精选 |

## 详细解读

### 1. Embodied First Exam｜Coding Agent / 具身

- **首次发布：** 2026-11-09（本期未发现需要另列的实质更新日期）
- **第一作者：** Kangrui Wang
- **发布机构：** Northwestern、CMU、UC Berkeley、Stanford 等
- **评什么：** 编码 Agent 在物理约束下直接控制、写控制代码或训练策略的能力，任务包括空间谜题、灵巧操作、多机器人、全身动态控制与 sim-to-sim 工程。
- **规模：** 完整集 1,156 任务、35 套件、47 种机器人；论文主报告使用 456 个 core tasks，其中 391 个有成对 Privileged/Standard 测试。
- **评测：** Harbor 容器隔离 Agent 与 verifier；Standard 仅开放传感器且默认禁止 reset，Realtime 不暂停物理世界，Privileged 提供完整仿真状态和无限 reset。主要指标为成功率，并按失败阶段诊断。
- **开放：** 论文、项目页与 GitHub 已开放；仓库说明可一条命令运行不同模型、harness 和任务组合。
- **值得关注：** 把 Coding Agent 的“代码能跑”推进为“代码真的能驱动不同机器人”，并把状态访问、reset 和实时性做成可配对消融。
- **可借鉴：** 用同一初态和同一成功规则建立权限分层；verifier 放在 Agent 容器外；同时报告完整集与算力可承担的 core 子集。
- **链接：** [https://arxiv.org/abs/2611.12177](https://arxiv.org/abs/2611.12177) · [https://www.embodied-first-exam.ai/](https://www.embodied-first-exam.ai/) · [https://github.com/mll-lab-nu/embodied-first-exam](https://github.com/mll-lab-nu/embodied-first-exam)

### 2. RoboRisk｜具身 Agent 安全

- **首次发布：** 2026-11-10（本期未发现需要另列的实质更新日期）
- **第一作者：** Qinfeng Zhu
- **发布机构：** XJTLU、DKU、Liverpool、NUS、CNRS
- **评什么：** Agent 在闭环机器人操作中的五类安全能力——任务拒绝、计划修复、执行期危险、环境注入和顺序记忆。
- **规模：** 92 个仿真任务 + 13 个物理机械臂任务，共 105 项；六个通用模型与两个机器人专用 API 被评测。
- **评测：** 每项都执行而非只评文本；分别统计伤害率与任务完成。LEASH 用 task/action/commit 三道视觉上下文门检查目标、每步动作与不可逆操作。
- **开放：** 项目页含任务浏览器，GitHub 提供 RoboRisk 与运行命令；真机危险物均为安全道具。
- **值得关注：** 把安全从“开场拒绝题”移到会变化的物理状态，允许安全系统修复路线而非一律拒绝。
- **可借鉴：** 风险 taxonomy 与 gate 对齐；为不可逆动作设置 commit gate；安全与效用分开计分，避免“全部拒绝”虚高。
- **链接：** [https://arxiv.org/abs/2611.14115](https://arxiv.org/abs/2611.14115) · [https://zhuqinfeng1999.github.io/LEASH/](https://zhuqinfeng1999.github.io/LEASH/) · [https://github.com/zhuqinfeng1999/LEASH](https://github.com/zhuqinfeng1999/LEASH)

### 3. MMDM｜模型评测 / 决策

- **首次发布：** 2026-11-10（本期未发现需要另列的实质更新日期）
- **第一作者：** Junhao Shen
- **发布机构：** CUHK、HKUST、LIGHTSPEED
- **评什么：** System-1 决策模型在状态追踪、工具/技能选择、偏好判断、rubric 评分、约束规划等真实决策上的广度与组合逻辑。
- **规模：** 5,448 道题、16 类任务；2–1,024 个选项，输入最长 64,817 tokens；覆盖单选、多选与软标签。
- **评测：** 硬单选准确率、硬多选准确率及软目标分布指标；28 个决策模型统一测试。最佳多选准确率仅 36.81%。
- **开放：** 项目页、GitHub 与 Hugging Face 数据可用；HF 页面显示约 5.45k 条数据。
- **值得关注：** 同时拉大上下文、选项数与依赖结构，避免只靠短题上的高平均分判断模型适合做路由器。
- **可借鉴：** 按选择类型拆分指标；把 source-grounded recomposition 与新构任务混合；明确选项规模和上下文长度分桶。
- **链接：** [https://arxiv.org/abs/2611.14309](https://arxiv.org/abs/2611.14309) · [https://mmdm-benchmark.github.io/](https://mmdm-benchmark.github.io/) · [https://huggingface.co/datasets/shenjunhao/mmdm](https://huggingface.co/datasets/shenjunhao/mmdm)

### 4. SO-Arena｜模型评测 / 可靠性

- **首次发布：** 2026-11-11（本期未发现需要另列的实质更新日期）
- **第一作者：** Lichen Li
- **发布机构：** National University of Singapore
- **评什么：** 快速决策模型的能力谱与可靠性，后者包括控制选项集合变化后的决策稳定性和“没有正确答案”识别。
- **规模：** 官方仓库披露 2,919 tasks、11 domains、5 capability families；21 个模型。项目另提供可交互 sandbox 任务。
- **评测：** 能力任务用证据来源和人工复核标签；可靠性单独报告 stability 与 missing-answer recognition，不用总准确率代替。
- **开放：** 项目页、GitHub、Hugging Face organization 均可访问；官方仓库与数据集可运行。
- **值得关注：** 最佳能力模型在可靠性只排第七，说明榜单均分与部署风险并不等价。HF Daily Papers 页面显示本周高关注。
- **可借鉴：** 对同一题做受控选项扰动；专门构造无有效选项；把可靠性作为并列轴而不是准确率附注。
- **链接：** [https://arxiv.org/abs/2611.15777](https://arxiv.org/abs/2611.15777) · [https://lichenlillc.github.io/SO-Arena](https://lichenlillc.github.io/SO-Arena) · [https://github.com/holdrain/SO-Arena](https://github.com/holdrain/SO-Arena) · [https://huggingface.co/SO-Arena](https://huggingface.co/SO-Arena)

### 5. MechEval｜世界模型 / Agent

- **首次发布：** 2026-11-09（本期未发现需要另列的实质更新日期）
- **第一作者：** Ku Onoda
- **发布机构：** Third Intelligence、University of Tokyo
- **评什么：** 世界模型在互动中见到一种新机制多少次后，才能准确预测该机制改变的网格单元。
- **规模：** 20 个 ARC-AGI-3 游戏、69 种重复机制；按每次 exposure 对机制触发的变更单元评分。
- **评测：** WARC 接收最近三帧与动作，逐单元预测下一帧；每次 transition 后更新全部参数，并比较 frozen 设置。闭环还报告 ARC 官方效率分。
- **开放：** GitHub 已有模型、训练/测试时更新代码、explorer、复现实验文档与 HF 权重；README 当前标注 MechEval annotations/scorer 在 release plan，故以“论文定义、部分待释出”标注。
- **值得关注：** 把世界模型泛化从笼统的下一帧误差，改成“机制学习曲线”，更适合分析在线适应效率。
- **可借鉴：** 从环境程序抽取因果机制；以 exposure 而非 timestep 对齐方法；只在机制真实改变的单元上判分。
- **链接：** [https://arxiv.org/abs/2611.12324](https://arxiv.org/abs/2611.12324) · [https://github.com/third-intelligence/WARC](https://github.com/third-intelligence/WARC) · [https://huggingface.co/third-intelligence/WARC](https://huggingface.co/third-intelligence/WARC)

### 6. JustRUA｜具身 Agent / Harness

- **首次发布：** 2026-11-11（本期未发现需要另列的实质更新日期）
- **第一作者：** Zefan Wang
- **发布机构：** 清华、面壁智能、华科、北大、腾讯
- **评什么：** RoboDojo 上 Robot-Use Agent 的 harness、动作接口、经验复用与场景几何分别贡献多少。
- **规模：** 使用官方 L3 映射的固定开发子集；论文公开各配置分数、成本和 rollouts。完整任务数以官方项目配置为准，摘要未给出独立新 benchmark 总量。
- **评测：** 同一 GPT-6 Astra 与同一任务子集做单变量消融；官方 L3 harness 29.7，精简后的 JustRUA 50.3。
- **开放：** 论文、项目页、GitHub、回放数据集与 replay explorer 已开放。
- **值得关注：** 它不是新造榜单，而是罕见地控制变量解释 harness 提升，能防止把框架工程收益误归因于模型。
- **可借鉴：** 冻结模型、任务和预算后逐项加入设计；同时发布 rollouts、分数与成本；把“场景几何”作为独立信息条件。
- **链接：** [https://arxiv.org/abs/2611.16009](https://arxiv.org/abs/2611.16009) · [https://zefanw.github.io/JustRUA](https://zefanw.github.io/JustRUA) · [https://github.com/ZefanW/JustRUA](https://github.com/ZefanW/JustRUA) · [https://huggingface.co/datasets/ZefanW/robodojo-devset-replays](https://huggingface.co/datasets/ZefanW/robodojo-devset-replays)

### 7. PolyRoute｜多语种模型评测

- **首次发布：** 2026-11-10（本期未发现需要另列的实质更新日期）
- **第一作者：** Mohammed Nayeem Khan
- **发布机构：** Intel Corporation
- **评什么：** typed-decision encoder 对多语客服消息做三部门路由时的跨语言、混写与罗马化泛化。
- **规模：** 322 条 12 语言/9 书写系统测试消息，156 条 Hinglish/Spanglish/Arabizi 混写消息，967 条可选训练行；13 个系统。
- **评测：** 准确率与置信区间；四种 withheld language；代码混写单列。标签由 Qwen3.8-27B 生成并盲二次筛选，保留 91%，独立模型一致率 97.2%。
- **开放：** 论文开放；artifact 路径在论文中给出。全部文本与标签均为 LLM 生成，非真实客服日志。
- **值得关注：** 规模不大但协议透明，还用字符 5-gram 检查训练测试相似度（最大 0.33），适合小型多语决策模型。
- **可借鉴：** 单列 code-mixed split；设置 withheld-language；报告传统 TF-IDF 强基线，防止复杂模型在小数据上制造虚假优势。
- **链接：** [https://arxiv.org/abs/2611.13843](https://arxiv.org/abs/2611.13843)

### 8. Consensus Capture｜多模态 / 视觉

- **首次发布：** 2026-11-12（本期未发现需要另列的实质更新日期）
- **第一作者：** Robert Fonod
- **发布机构：** EPFL
- **评什么：** 无人机悬停视频中，同向运动的车辆如何以“高一致性内点”欺骗单应估计，并评估物体遮罩能否修复。
- **规模：** 动态协议含 304 个 realtime pairs；另有 offline pairs 与静态真值协议，比较 10 条完整配准流水线。
- **评测：** 背景对齐、物体位置误差、估计跟随移动群体位移比例；伪真值由人工地面控制点审计。静态集报告 mAA。
- **开放：** 代码、Zenodo 数据与结果均发布；GitHub 仓库可复现 detector/descriptor/matcher/estimator/masking 全链路。
- **值得关注：** 揭示“内点多但答案错”的真实视觉失效，判分对象从匹配统计回到静态地面几何。
- **可借鉴：** 加入运动一致性反例；把离线与实时预算分开；人工控制点用于审计伪真值而非直接替代全部标注。
- **链接：** [https://arxiv.org/abs/2611.17190](https://arxiv.org/abs/2611.17190) · [https://github.com/rfonod/stabilo-benchmark](https://github.com/rfonod/stabilo-benchmark) · [https://huggingface.co/datasets/rfonod/stabilo-benchmark](https://huggingface.co/datasets/rfonod/stabilo-benchmark)

### 9. UAV Stabilo OBB｜Dataset / 视觉基础设施

- **首次发布：** 2026-11-12（本期未发现需要另列的实质更新日期）
- **第一作者：** Robert Fonod
- **发布机构：** EPFL
- **评什么：** 为动态无人机配准提供移动目标遮罩和审计数据，支持比较水平框、定向框与不遮罩。
- **规模：** 274,190 个 oriented boxes，覆盖 5,419 帧 4K 无人机图像；这是与第 8 项同步发布的独立数据资源。
- **评测：** 用于构造遮罩后重新运行完整配准；论文报告遮罩消除所有 pipeline 的 consensus capture，静态 mAA 成本小于 0.005。
- **开放：** Hugging Face 数据集页面可下载；与 stabilo-benchmark 代码共同使用。
- **值得关注：** 它把 benchmark 的关键干预变量开放成可替换数据层，便于复现实验与训练检测器。
- **可借鉴：** 把基准运行数据和辅助标注分包；保留帧级来源与审计记录；让遮罩类型成为显式实验因子。
- **链接：** [https://arxiv.org/abs/2611.17190](https://arxiv.org/abs/2611.17190) · [https://huggingface.co/datasets/rfonod/songdo-vision-obb](https://huggingface.co/datasets/rfonod/songdo-vision-obb)

## 本周 Benchmark 变化趋势

1. 具身评测从单一机械臂成功率，转向跨机器人、跨控制范式的统一可执行考试。
2. “安全”开始在闭环执行中判分：不仅看拒绝，还检查修复、注入、历史记忆与不可逆动作。
3. 决策模型评测不再只看准确率，稳定性、无答案识别、长上下文与大选项空间进入主指标。
4. 基础设施越来越强调外置 verifier、冻结初态、资源上限、轨迹回放和可复现数据锁。

## 编辑说明

- 关注度优先采用 Hugging Face Daily Papers 的可见 upvote/榜单位置或仓库可见信号；没有稳定社区信号的条目标为“编辑精选/中等”，不把编辑判断伪装成热度。
- 开放状态严格区分：论文声称、项目页可见、数据可下载、代码可运行。MechEval 的 scorer/annotations 仍按官方 release plan 标注，不声称已完整开放。
- 第 8 与第 9 项共享论文来源，但第 9 项是独立可下载数据集，不是重复填充；两者在任务、交付物与复用方式上分列。