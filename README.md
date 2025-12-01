# 楽天ビューティ - コンポーネントライブラリ

楽天ビューティのUIコンポーネントを管理するNext.jsプロジェクトです。

## 🚀 セットアップ

### 必要な環境

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
npm install
```

または

```bash
yarn install
```

## 📦 開発サーバーの起動

```bash
npm run dev
```

または

```bash
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 🏗️ ビルド

本番環境用にビルドする場合：

```bash
npm run build
```

ビルド後、本番サーバーを起動：

```bash
npm start
```

## 📁 プロジェクト構造

```
.
├── components/          # Reactコンポーネント
│   ├── Button.tsx      # ボタンコンポーネント
│   ├── Footer.tsx      # フッターコンポーネント
│   ├── Header.tsx      # ヘッダーコンポーネント
│   ├── SearchForm.tsx  # 検索フォームコンポーネント
│   └── Table.tsx       # テーブルコンポーネント
├── pages/              # Next.jsページ
│   ├── _app.tsx        # アプリケーションルート
│   └── index.tsx       # トップページ
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 コンポーネント一覧

### Header
ヘッダーコンポーネント。タイトルとナビゲーション、オプションでキービジュアルを表示。

```tsx
<Header title="楽天ビューティ" showKV={true} />
```

### SearchForm
サロン検索フォームコンポーネント。ジャンル、都道府県の選択が可能。

```tsx
<SearchForm />
```

### Button
汎用ボタンコンポーネント。3つのバリアント（primary, secondary, outline）と3つのサイズ（small, medium, large）をサポート。

```tsx
<Button variant="primary" size="medium" onClick={() => {}}>
  クリック
</Button>
```

### Table
データテーブルコンポーネント。カラム定義とデータ配列を渡して使用。

```tsx
<Table columns={columns} data={data} />
```

### Footer
フッターコンポーネント。サイトリンクと著作権表示。

```tsx
<Footer />
```

## 🛠️ 技術スタック

- **Next.js 14** - Reactフレームワーク
- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **CSS-in-JS** - styled-jsx（Next.js組み込み）

## 📝 開発ガイド

### 新しいコンポーネントの追加

1. `components/` ディレクトリに `.tsx` ファイルを作成
2. TypeScriptでコンポーネントを実装
3. `pages/index.tsx` にコンポーネントを追加して表示確認

### スタイリング

このプロジェクトではNext.js組み込みの `styled-jsx` を使用しています。

```tsx
<style jsx>{`
  .my-class {
    color: red;
  }
`}</style>
```

## 🔧 トラブルシューティング

### ポートが使用中の場合

別のポートで起動：

```bash
PORT=3001 npm run dev
```

### 依存関係のエラー

node_modules を削除して再インストール：

```bash
rm -rf node_modules
npm install
```

## 📄 ライセンス

© 2024 Rakuten Beauty. All rights reserved.
