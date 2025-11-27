# tsugehara-test

モダンな開発ツールとベストプラクティスを備えた、包括的なTypeScriptテンプレートリポジトリです。

## 機能

- 🚀 型安全な開発のためのTypeScript
- 🧪 カバレッジレポート付きのJestテスト
- 🎨 コード品質とフォーマットのためのESLint + Prettier
- 📦 事前設定済みのビルドスクリプト
- 🔧 すぐに使えるプロジェクト構造

## 前提条件

- Node.js (v16以上を推奨)
- npmまたはyarn

## はじめに

### インストール

```bash
npm install
```

### 開発

ts-nodeを使用して開発モードでアプリケーションを実行します：

```bash
npm run dev
```

### ビルド

TypeScriptコードをJavaScriptにコンパイルします：

```bash
npm run build
```

### 実行

コンパイルされたJavaScriptを実行します：

```bash
npm start
```

## スクリプト

- `npm run build` - TypeScriptをJavaScriptにコンパイル
- `npm run dev` - 開発モードでアプリケーションを実行
- `npm start` - コンパイルされたアプリケーションを実行
- `npm test` - テストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジレポート付きでテストを実行
- `npm run lint` - コードベースをリント
- `npm run lint:fix` - リントして問題を自動修正
- `npm run format` - Prettierでコードをフォーマット
- `npm run format:check` - コードフォーマットをチェック
- `npm run clean` - ビルド成果物を削除

## プロジェクト構造

```
.
├── src/
│   ├── __tests__/       # テストファイル
│   │   └── math.test.ts
│   ├── index.ts         # メインエントリーポイント
│   └── math.ts          # サンプルモジュール
├── dist/                # コンパイルされたJavaScript（生成）
├── coverage/            # テストカバレッジレポート（生成）
├── eslint.config.js     # ESLint設定
├── .prettierrc          # Prettier設定
├── tsconfig.json        # TypeScript設定
├── jest.config.js       # Jest設定
├── .gitignore           # Git無視ルール
└── package.json         # プロジェクトの依存関係とスクリプト
```

## テスト

このプロジェクトはテストにJestを使用しています。テストは `src/__tests__` ディレクトリに配置されています。

全てのテストを実行：
```bash
npm test
```

ウォッチモードでテストを実行：
```bash
npm run test:watch
```

カバレッジレポートを生成：
```bash
npm run test:coverage
```

## コード品質

### リント

ESLintはTypeScriptサポートとPrettier統合で設定されています。

```bash
npm run lint
npm run lint:fix
```

### フォーマット

Prettierは一貫したコードフォーマットのために設定されています。

```bash
npm run format
npm run format:check
```

## 設定

### TypeScript (`tsconfig.json`)

TypeScript設定は、最大限の型安全性のためにストリクトモードを有効にしたES2020をターゲットにしています。

### ESLint (`eslint.config.js`)

ESLintは以下で設定されています：
- TypeScript ESLintパーサーとプラグイン
- Prettier統合
- 推奨ルールセット

### Prettier (`.prettierrc`)

Prettierは標準的なフォーマットルールで設定されています。

## ライセンス

MIT
