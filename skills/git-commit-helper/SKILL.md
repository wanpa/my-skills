---
name: git-commit-helper
description: Gitコミットメッセージを生成するスキル。「コミットして」「変更をコミット」などと言われたら発動する。
---

# Git Commit Helper

良いコミットメッセージを生成するためのガイドライン。

## 発動条件

以下のようなリクエストで発動：
- 「コミットして」
- 「コミットメッセージ作って」
- 「変更をコミット」

## コミットメッセージのフォーマット

### Conventional Commits形式を使用

```
<type>(<scope>): <subject>

<body>
```

### Type一覧

| Type | 説明 |
|------|------|
| feat | 新機能 |
| fix | バグ修正 |
| docs | ドキュメント |
| style | コードスタイル（動作に影響なし） |
| refactor | リファクタリング |
| test | テスト追加・修正 |
| chore | ビルド・補助ツール |

## 手順

1. `git diff --staged` で変更内容を確認
2. 変更の種類を判断（feat/fix/docs等）
3. 影響範囲（scope）を特定
4. 簡潔な説明文（subject）を50文字以内で作成
5. 必要に応じてbodyで詳細説明

## 例

```bash
git commit -m "feat(auth): ログイン機能を追加

- メールアドレスとパスワードによる認証
- JWTトークンの発行
- セッション管理"
```
