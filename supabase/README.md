# Supabase 设置

## 需要的信息

在 Supabase 项目中打开 `Project Settings > API`，复制：

- Project URL
- anon public key

不要复制或公开 `service_role` key。

## 数据库

在 Supabase SQL Editor 中执行 `schema.sql`。它会创建：

- `learning_progress`：每个登录用户每课一条进度。
- `quiz_attempts`：练习答题记录。

表已启用 RLS，每个用户只能读写自己的数据。

## 前端配置

复制 `config.example.js` 的内容到 `config.js`，填入 Supabase URL 和 anon key。

```js
window.MATH8_APP_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_PUBLIC_KEY"
};
```
