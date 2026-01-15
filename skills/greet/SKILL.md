---
name: greet
description: システム情報と一緒に挨拶を表示するスキル。「/greet」で実行する。
---

# Greet スキル

Node.jsスクリプトを使ってシステム情報と挨拶を表示します。

## 発動条件

以下のようなリクエストで発動：
- `/greet`
- 「システム情報を表示して挨拶して」

## 実行方法

このスキルには `greet.js` スクリプトが含まれています。

```bash
node skills/greet/greet.js
```

## 出力例

```
==================================
  Hello, World from Node.js!
==================================

System Information:
  User:     username
  Hostname: my-mac
  Date:     2026/01/15 12:00:00
  OS:       Darwin 25.2.0
  Node:     v20.x.x
  PWD:      /current/directory
  Platform: darwin (arm64)
  Memory:   8192MB free / 16384MB total

==================================
  Have a great day!
==================================
```

## スクリプトの機能

- ユーザー名とホスト名を表示
- 現在の日時を日本語形式で表示
- OS情報とNode.jsバージョンを表示
- メモリ使用状況を表示
