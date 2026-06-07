# 普段の開発方法

# Getting Started

このプロジェクトは Next.js を使用して開発されています。

## 1. Node.js のインストール

本プロジェクトを実行するには Node.js が必要です。

### Windows / macOS

1. [Node.js公式サイト](https://nodejs.org/ja)から最新版のLTS（推奨版）をダウンロードします。
2. ダウンロードしたインストーラを実行し、画面の指示に従ってインストールします。

インストール後、ターミナル（Windowsの場合は PowerShell または コマンドプロンプト）を開き、以下を実行してください。

```bash
node -v
npm -v
```

バージョン番号が表示されればインストールは完了です。

## 2. リポジトリの取得

好きなディレクトリに移動した上でリポジトリをクローンします。

```bash
cd <directory>
git clone https://github.com/iGEM-Waseda/podcast-homepage.git
cd podcast-homepage
```

## 3. 依存パッケージのインストール

プロジェクトディレクトリで以下を実行します。

```bash
npm install
```

初回は数分かかる場合があります。

## 4. 開発サーバーの起動

以下のコマンドを実行します。

```bash
npm run dev
```

正常に起動すると、以下のようなメッセージが表示されます。

```text
Local: http://localhost:3000
```

## 5. ブラウザで確認

ブラウザで以下の URL を開いてください。

```text
http://localhost:3000
```

アプリケーションが表示されればセットアップ完了です。

## 開発方法

ページの内容は以下のファイルを編集することで変更できます。

```text
app/page.tsx
```

ファイルを保存すると、ブラウザが自動的に更新されます。

## トラブルシューティング

### `node: command not found`

Node.js がインストールされていないか、PATH が正しく設定されていません。

Node.js を再インストールしてください。

### `npm: command not found`

npm が正しくインストールされていません。

Node.js を再インストールしてください。

### `npm install` でエラーが発生する

Node.js のバージョンが古い可能性があります。

以下でバージョンを確認してください。

```bash
node -v
```

LTS版の利用を推奨します。

## Learn More

* Next.js Documentation: https://nextjs.org/docs
* Learn Next.js: https://nextjs.org/learn
* Next.js GitHub Repository: https://github.com/vercel/next.js

## Deploy

デプロイには Vercel の利用を推奨します。

詳細は以下を参照してください。

https://nextjs.org/docs/app/building-your-application/deploying
