# Benchmark & Dataset 精选周刊

每周精选新发布的 Benchmark 与 Dataset，关注它们如何定义任务、构造数据、验证结果，以及其中哪些设计方法值得复用。

## 项目介绍

Benchmark 与 Dataset 是理解 AI 能力边界、比较系统表现和设计下一代评测的重要基础。但相关成果分散在论文、项目主页和数据平台中，仅靠标题或摘要很难快速判断其价值。

这个项目将每周值得关注的新成果整理成一份结构化周刊。它不只是论文列表，还会提炼每项工作的评测机制、代表性结果、研究意义和可迁移的设计方法，帮助读者更快理解 Evaluation 的最新变化。

网站提供中文和英文版本，包括首页、本周内容及往期归档。

## 为什么持续更新

- **追踪评测范式变化：** 观察 AI Evaluation 如何从静态问答走向真实工作流、长时程 Agent、可执行验证和系统级安全。
- **降低信息筛选成本：** 从当周发布的候选项目中筛出更具研究价值和方法创新的内容。
- **沉淀可复用方法：** 重点记录 Atomic Rubric、Sandbox Execution、Executable Validator、Private Holdout、State Tracking 等可迁移设计。
- **建立连续档案：** 按周保存内容，方便回顾不同阶段的研究重点与趋势变化。

## 每期更新内容

每期通常精选 9 项 Benchmark 或 Dataset，并包含：

- 入选内容总结
- 本周趋势观察
- Benchmark / Dataset 类型与研究方向
- 发布时间、作者和发布机构
- 论文、项目或数据链接
- 主要内容
- 规模与特点
- 评测方式与指标
- 代表性结果（如有）
- 为什么值得关注
- 可借鉴的设计方法
- 编辑关注度

Top 1–3 会作为本周重点项目突出展示，其余项目按研究价值、评测创新和可借鉴程度排序。

## 更新时间

- **更新频率：** 每周一次
- **计划发布时间：** 每周日
- **覆盖范围：** 当周周一至周日新发布或有重要更新的 Benchmark 与 Dataset
- **归档方式：** 最新一期自动显示为“本周内容”，此前各期自动进入“往期归档”

如果项目资料仍在核验，发布时间可能顺延至事实核查完成后，以保证名称、作者、机构、规模数据和链接准确。

## 项目结构

```text
app/
├── data/
│   ├── issues/          # 每周同步的期刊数据
│   ├── index.ts         # 自动发现、排序和归档
│   └── types.ts         # 统一数据结构
├── weekly/              # 最新一期
├── archive/             # 中文归档与动态期刊页
├── en/                  # 英文页面
├── IssueContent.tsx     # 中英文共用的期刊展示组件
└── ArchiveList.tsx      # 自动生成的归档列表
```

## 本地运行

环境要求：Node.js `>=22.13.0`

```bash
npm install
npm run dev
```

构建检查：

```bash
npm run build
```

## 自动部署

项目通过 GitHub Actions 自动部署到 GitHub Pages。每次代码推送到 `main` 分支时都会依次安装依赖、生成静态站点并发布；也可以在 GitHub Actions 页面手动触发部署。

首次使用前，请在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中将 Source 设置为 **GitHub Actions**。工作流使用 GitHub Pages 官方部署权限，不需要配置额外密钥。

工作流配置位于 `.github/workflows/deploy.yml`。

## 技术栈

- React 19
- TypeScript
- vinext / Vite
- Cloudflare Workers-compatible runtime
- OpenAI Sites 托管

## 维护者

[xindoucha](https://github.com/xindoucha)

## License

[MIT](./LICENSE)
