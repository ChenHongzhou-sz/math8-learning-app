# 八上数学互动学习 App

面向 iPad 的八年级上册数学互动学习 Web App。当前样板覆盖第十一章“三角形”，包含学习地图、互动几何、即时练习、家长提示和本地进度。

## 当前内容

- 第 1 课：三角形的边
- 第 2 课：高、中线、角平分线
- 第 3 课：三角形的稳定性
- 第 4 课：三角形内角和
- 第 5 课：直角三角形与外角
- 第 6 课：多边形基本概念
- 第 7 课：多边形内角和、外角和
- 第 8 课：章节复习与综合

## 部署

这是纯静态项目，可部署到 GitHub Pages。仓库启用 Pages 的 GitHub Actions 来源后，`.github/workflows/pages.yml` 会发布根目录。

## Supabase

默认使用浏览器本地进度。若要跨设备同步：

1. 在 Supabase 新建项目。
2. 在 SQL Editor 执行 `supabase/schema.sql`。
3. 在 `config.js` 中填入 `supabaseUrl` 和 `supabaseAnonKey`。

`anon public key` 可以放在前端；不要把 `service_role` key 放进仓库或网页。
