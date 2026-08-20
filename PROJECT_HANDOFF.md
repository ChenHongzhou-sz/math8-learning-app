# 项目交接说明：八年级数学自学 App

这份文件用于换电脑、重开对话或后续继续开发。继续前请先阅读本文件。

## 最新方向

用户已经要求“全部重新做”，参考页面：

https://wu-sheng.github.io/middle-school-curriculum/lesson/math/grade9/quadratic-functions/

同时用户提供了《八年级数学自学 Web App 改造任务书》。新方向不是继续做家长教案版，而是把 App 改成：

**100% 面向孩子独立使用的数学自学系统。**

不要设计：

- 家长模式
- 家长账号
- 家长报告
- 教师后台
- 班级排名
- 学生排名

孩子打开网站后，应能独立完成：

学习 -> 理解 -> 例题 -> 练习 -> 检测 -> 错题 -> 复习 -> 掌握

## 当前仓库

- GitHub 仓库：https://github.com/ChenHongzhou-sz/math8-learning-app
- GitHub Pages：https://chenhongzhou-sz.github.io/math8-learning-app/
- 本地目录：`C:\Users\chenh\Desktop\MATH\math8-learning-app`

## 当前技术现实

任务书里提到的参考项目 `wu-sheng/middle-school-curriculum` 是 Next.js / YAML / TSX / GeometryDiagrams 体系。

但当前仓库不是那个项目，而是一个纯静态项目：

- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `supabase/schema.sql`
- `.github/workflows/pages.yml`

因此当前执行策略是：

1. 在现有 `math8-learning-app` 里按任务书重做产品体验。
2. 保留 GitHub Pages 静态部署能力。
3. 保留 Supabase 公开配置和同步能力。
4. 不强行引入 Next.js，除非用户以后明确要求迁移技术栈。

## 已完成的新版 Phase 1

已重构为五大导航：

- 今天
- 学习
- 练习
- 错题
- 我的

已完成第 13 章“三角形”完整样板：

1. 13.1 三角形的基本概念
2. 13.2 三角形三边关系
3. 13.3 高、中线、角平分线
4. 13.4 三角形内角和
5. 13.5 直角三角形与外角
6. 13.6 多边形与内角和

每个知识点统一为：

- 知识
- 例题
- 练习
- 易错
- 测试

已经实现：

- 首页“今天”
- 今日任务
- 薄弱点推荐
- 最近错题
- 章节页不做成长页面
- 知识点独立学习单元
- 知识页面折叠区
- 分步例题
- 一题一屏练习
- 做错后进入错题本
- 错因选择
- 错题复习状态
- 掌握度计算
- 完成后推荐下一步
- 课内学习 / 能力提高 / AMC 8 分离入口
- 中文默认，中英双语能力保留为设置项
- iPad 横屏左侧导航
- 手机底部导航

## 后续开发重点

下一阶段不要马上铺开所有章节。先继续打磨第 13 章样板：

1. 增加更多例题和练习题。
2. 把三角形三边关系做成真正“先判断 -> 点击验证 -> 图形拼接 -> 总结规律”的互动。
3. 给全等三角形第 14 章设计对应边角点击高亮。
4. 加强错题复习间隔逻辑。
5. 如果用户希望迁移到 Next.js，再另起技术迁移方案。

## 章节编号

新版按任务书采用：

- 第13章 三角形
- 第14章 全等三角形
- 第15章 轴对称
- 第16章 整式的乘法
- 第17章 因式分解
- 第18章 分式

注意：这与最初 PDF 中的 11-15 编号不同。当前以用户最新任务书为准。

## Supabase

已配置：

- Project URL：`https://nflwctvdykqrxwpiqqrn.supabase.co`
- 前端公开 key 在 `config.js`

用户已运行过：

```text
supabase/schema.sql
```

显示 `Success. No rows returned`。

不要要求用户发送：

- `service_role`
- 数据库密码
- secret key

## 验证记录

已检查：

- `node --check app.js`
- iPad 横屏截图
- 学习页截图
- 一题一屏练习页截图
- 手机竖屏截图

Codex 内置浏览器/Chrome 插件在本机连接失败，已使用后台 Edge headless 截图验证。

## 给后续 Codex 的提醒

- 用户希望直接执行，不要停在方案讨论。
- 用户对“形象化、自主学习、少文字堆砌”很敏感。
- 新版不要恢复家长侧边栏。
- 数学准确性优先于 UI。
- 有问题的题不要猜测上线，先标记 disabled 或记录到审查清单。
- 修改后需要提交并推送 GitHub。
