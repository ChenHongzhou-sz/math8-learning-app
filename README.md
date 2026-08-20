# 八年级数学自学 App

面向孩子独立使用的八年级上册数学自学 Web App。

线上地址：

https://chenhongzhou-sz.github.io/math8-learning-app/

## 当前版本

本版本按新的产品任务书重新设计，不再以“家长教案”为中心，而是以孩子自己的学习闭环为中心：

- 今天
- 学习
- 练习
- 错题
- 我的

第 13 章“三角形”已作为第一阶段样板实现：

- 知识
- 例题
- 练习
- 易错
- 测试
- 错题记录
- 掌握度
- 下一步推荐

## 技术方案

当前项目保持纯静态实现：

- HTML
- CSS
- JavaScript
- GitHub Pages
- Supabase Auth + `learning_progress` 表同步进度

没有 npm 依赖，也不需要构建步骤。

## 本地查看

直接打开：

```text
index.html
```

或使用已有的简单静态服务器：

```bash
node server.js
```

## Supabase

前端公开配置在：

```text
config.js
```

数据库脚本在：

```text
supabase/schema.sql
```

不要提交或索取 `service_role`、数据库密码等 secret。
