# 项目交接说明：八年级上册数学互动学习 App

这份文件给换电脑、重开对话或后续协作者使用。继续开发前，请先阅读本文件，保持产品方向和内容标准一致。

## 项目定位

本项目是给八年级学生使用的数学自学 Web App，不是纯文字教案，也不是题库网站。

核心目标：

- 让孩子通过图形、拖动、观察、猜想、验证、练习和即时反馈，自己理解八年级上册数学知识点。
- 让家长能用侧边栏提示进行追问、观察和陪学，但不需要家长擅长教学。
- 内容要来自并细看人教版八年级上册数学教材，包含主干知识点、旁枝细节、例题思想、易错点、证明理由和应用场景。
- 界面优先适配 Apple iPad，兼顾窄屏和桌面浏览器。

## 当前仓库

- GitHub 仓库：https://github.com/ChenHongzhou-sz/math8-learning-app
- GitHub Pages 地址：https://chenhongzhou-sz.github.io/math8-learning-app/
- 本地开发目录曾为：`C:\Users\chenh\Desktop\MATH\math8-learning-app`

## 教材范围

教材为人教版八年级上册数学 PDF。

目录：

- 第十一章 三角形
- 第十二章 全等三角形
- 第十三章 轴对称
- 第十四章 整式的乘法与因式分解
- 第十五章 分式

## 已完成内容

已完成第十一章“三角形”的互动样板。

第十一章包含 8 个学习单元：

1. 三角形的边
2. 高、中线、角平分线
3. 三角形的稳定性
4. 三角形内角和
5. 直角三角形与外角
6. 多边形基本概念
7. 多边形内角和、外角和
8. 章节复习与综合

每个单元包含：

- 观察：生活情境、动态图形或可拖动图形。
- 领悟：把直观发现变成数学语言。
- 练习：选择题、即时反馈、解题抓手。
- 通关：用自己的话复述核心结论。
- 家长提示：目标、观察点、追问问题、掌握标准。

第十一章已增强为更形象化的版本，包含：

- 生活情境图文卡。
- 动手任务卡。
- “从图形到原理”的推理台阶。
- 更多练习题和提示。
- iPad / 窄屏布局修正。
- PWA 缓存版本更新。

最近重要提交：

- `58b08ea Build math 8 interactive learning app`
- `2a7080c Configure Supabase sync`
- `865958c Support Supabase publishable key auth`
- `eae6a63 Enrich chapter 11 visual learning content`

## 技术方案

当前项目是纯静态 Web App：

- `index.html`：页面结构。
- `styles.css`：iPad 优先的响应式样式。
- `app.js`：课程数据、互动图形、练习逻辑、Supabase 同步逻辑。
- `config.js`：Supabase 前端公开配置。
- `supabase/schema.sql`：数据库表和 RLS 策略。
- `sw.js`：PWA 缓存。

没有 npm 依赖，不需要构建步骤。

部署方式：

- GitHub Pages
- GitHub Actions workflow：`.github/workflows/pages.yml`

数据同步：

- Supabase Auth：邮箱和密码注册/登录。
- Supabase 表：
  - `learning_progress`
  - `quiz_attempts`
- 只使用公开前端 key；不要使用或要求用户提供 `service_role` key。

## Supabase 状态

用户已在 Supabase 项目中运行过 `supabase/schema.sql`，页面显示 `Success. No rows returned`，说明建表 SQL 已成功执行。

项目链接曾为：

- https://supabase.com/dashboard/project/nflwctvdykqrxwpiqqrn

前端 Project URL 推断并已写入 `config.js`：

- `https://nflwctvdykqrxwpiqqrn.supabase.co`

注意：

- `config.js` 中的 publishable / anon key 是前端公开 key，可以放在静态站点。
- 不要要求用户发送 `service_role`、数据库密码或任何 secret。

## 后续开发原则

继续开发第十二章及后续章节时，沿用第十一章样板，但内容要继续增强形象化和自主学习体验。

每章开发建议流程：

1. 从教材 PDF 仔细提取本章目录、正文、例题、探究、思考、阅读材料、信息技术应用、数学活动、章末小结和复习题。
2. 先整理知识地图：概念、定理、公式、证明、应用、易错点。
3. 把每个知识点改写成孩子容易理解的话。
4. 给每节设计一个可视化或可操作体验。
5. 每节至少包含：
   - 生活情境
   - 可观察图形
   - 动手任务
   - 原理解释
   - 易错反例
   - 练习题
   - 通关复述
   - 家长追问
6. 推送前检查 iPad 尺寸和窄屏尺寸，不要出现按钮溢出、文字遮挡、图形空白。

## 第十二章建议方向

下一章应继续做“全等三角形”。

重点不是让孩子背 SSS、SAS、ASA、AAS、HL，而是让孩子理解：

- “全等”是什么意思：形状和大小完全相同，可以重合。
- “对应”为什么重要：对应边、对应角不能乱配。
- 判定方法为什么够用：给哪些条件就能唯一确定一个三角形。
- 证明题怎么写：先找已知，再找公共边/公共角/对顶角/平行线角，再选判定方法，最后得对应边角相等。
- 尺规作图和角平分线性质要做成可视化操作。

可以考虑的互动：

- 拖动两个三角形，看是否能重合。
- 点选对应边/对应角，高亮配对关系。
- 条件拼图：给出 SSS/SAS/ASA/AAS/HL，判断能否唯一确定三角形。
- 证明路线卡：把“已知、公共量、判定、结论”拖到正确顺序。
- 角平分线性质：点在角平分线上，到两边距离相等的动态演示。

## 给后续 Codex 的提醒

- 用户重视“课本细枝末节”，不要只做考试提纲。
- 用户希望孩子“自己学习和领悟”，不要把 App 做成大段文字页面。
- 用户偏好直接执行，不喜欢只停留在方案讨论。
- 修改后需要提交并推送 GitHub。
- 如果继续连接外部服务，只能使用公开配置，不要索取 secret。
- 任何新内容都要尽量简洁直白，但原理要讲清楚。
