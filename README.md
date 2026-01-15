# My Skills

自作のAgent Skillsコレクション。

## インストール

```bash
npx skill-sync your-username/my-skills
```

## スキル一覧

| スキル | 説明 |
|--------|------|
| hello-world | 挨拶をするときに使うスキル |
| git-commit-helper | Gitコミットメッセージを生成するスキル |

## 使い方

### 特定のスキルだけインストール

```bash
npx skill-sync your-username/my-skills --skill hello-world
```

### 全スキルをグローバルにインストール

```bash
npx skill-sync your-username/my-skills --global --yes
```

## スキルの作り方

1. `skills/` 配下にディレクトリを作成
2. `SKILL.md` を配置（name と description は必須）

```
skills/
└── my-new-skill/
    └── SKILL.md
```

## ライセンス

MIT
