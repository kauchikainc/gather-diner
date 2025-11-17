# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

80年代アメリカンダイナー風のファストフードバーのランディングページ。
Figmaデザイン: https://www.figma.com/design/XFottPQnrXp15gxiWOCM3A/80%E5%B9%B4%E4%BB%A3%E3%83%95%E3%82%A1%E3%82%B9%E3%83%88%E3%83%95%E3%83%BC%E3%83%89%E3%83%90%E3%83%BCLP

**注意**: このプロジェクトは、グローバルCLAUDE.mdに記載されている「HP Mock Sampleプロジェクト」とは異なる独立したプロジェクトです。グローバルCLAUDE.mdの「HP Mock Sample プロジェクト設計方針」はこのプロジェクトには適用されません。

## 技術スタック

- **フレームワーク**: React 18 + Vite
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: Radix UI + shadcn/ui
- **アイコン**: Lucide React
- **画像**: Unsplash (外部参照)
- **ビルドツール**: Vite 6.3.5 with SWC

## 開発コマンド

```bash
# 依存関係のインストール
npm i

# 開発サーバー起動 (localhost:3000)
npm run dev

# プロダクションビルド
npm run build
```

## アーキテクチャ

### ページ構造とナビゲーション

- **ルーティング**: React Routerは使用せず、`App.tsx`内でステート管理による簡易ページ切り替え
- `currentPage`ステートが`'home'`または`'menu'`を保持
- `onNavigate(page: string)`関数でページ遷移を管理
- ページ遷移時は`window.scrollTo({ top: 0, behavior: 'smooth' })`で自動的にトップへスクロール

### コンポーネント階層

```
App (ステート管理とページ切り替え)
├── Header (ナビゲーション)
├── HomePage (ホーム画面のコンテナ、currentPage === 'home'のとき表示)
│   ├── Hero (メインビジュアル、CTAボタン)
│   ├── Menu (ランチメニュー概要)
│   ├── About (店舗紹介)
│   └── Location (アクセス情報)
├── FullMenu (フルメニュー画面、currentPage === 'menu'のとき表示)
└── Footer (フッター)
```

**重要**: `HomePage`は単なるコンテナコンポーネントで、`Hero`、`Menu`、`About`、`Location`を順番にレンダリングするだけです。各セクションコンポーネントは独立して実装されています。

### 主要コンポーネント一覧

`src/components/`直下:
- `App.tsx` - ルートコンポーネント、ページ状態管理
- `Header.tsx` - ナビゲーションヘッダー
- `Footer.tsx` - フッター
- `HomePage.tsx` - ホーム画面のコンテナ
- `Hero.tsx` - ヒーローセクション
- `Menu.tsx` - メニュー概要セクション
- `About.tsx` - 店舗紹介セクション
- `Location.tsx` - アクセス情報セクション
- `FullMenu.tsx` - フルメニューページ
- `figma/ImageWithFallback.tsx` - 画像フォールバック処理コンポーネント

`src/components/ui/`:
- 48種類のshadcn/uiコンポーネント（Radix UIベース）
- 使用例: `Button`, `Badge`, `Card`, `Dialog`, `Accordion`など

### デザインシステム（最終更新: 2025-11-11）

**カラーパレット (80年代レトロ風)**:
- **メインカラー (Red)**: `#ff0000`
- **サブカラー (Cyan)**: `#58c6ca`
- **アクセントカラー (Yellow)**: `#f5b91f`
- **ベース背景 (White)**: `#ffffff`
- **ベーステキスト (Black)**: `#000000`
- ~~Background Cream: `#fef6e4`~~ (使用廃止)
- ~~Dark Text: `#1d3557`~~ (使用廃止)

**重要**: 古いカラーコード（`#e63946`, `#f4a261`, `#2a9d8f`, `#fef6e4`, `#1d3557`）は全て新カラーコードに置き換え済みです。

**デザインコンセプト: 白黒ベース + 3色アクセント**

全体は白と黒をベースとし、3色（赤・水色・黄色）を戦略的にアクセントとして配置することで、80年代レトロの雰囲気を保ちつつ、モダンで引き締まった印象を実現しています。

**スタイリング原則**:

1. **ベースカラー**:
   - 背景: 純白 (`bg-white`)
   - テキスト: 純黒 (`text-black`)
   - ボーダー: 黒4px (`border-4 border-black`)
   - シャドウ: 黒ドロップシャドウ (`shadow-[6px_6px_0px_rgba(0,0,0,1)]`)

2. **アクセントカラーの使用箇所**:
   - **赤 (#ff0000)**:
     - タイトルテキスト（"Gather"）
     - 主要なCTAボタン背景
     - 重要な強調要素
   - **黄色 (#f5b91f)**:
     - タイトルテキスト（"DINER"）
     - バッジ背景
     - セカンダリボタン
   - **水色 (#58c6ca)**:
     - テキストシャドウ
     - セクションバッジ背景
     - アイコン背景

3. **装飾要素**:
   - **グラデーションストライプ**: セクション区切りに3色グラデーション (`bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]`)
   - **背景パターン**: 黒グリッド（opacity-5）
   - **画像**: grayscaleフィルター適用、hover時カラー表示
   - **テキストシャドウ**: 3色を循環させる
     - 赤テキスト → 黄色シャドウ
     - 黄色テキスト → 水色シャドウ

4. **タイポグラフィ**:
   - 極太フォント (`fontWeight: 900`, `font-black`)
   - インラインスタイル(`style={{ fontWeight: 900 }}`)とTailwind CSSの併用

5. **立体感の演出**:
   - 太いボーダー (`border-4`)
   - 黒ドロップシャドウ (`shadow-[6px_6px_0px_rgba(0,0,0,1)]`)
   - hover時のシャドウ拡大とtranslate効果
     ```tsx
     hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
     hover:translate-x-[-2px]
     hover:translate-y-[-2px]
     ```
   - 要素の傾き (`transform rotate-1`, `-rotate-2`)

6. **インタラクティブ要素**:
   - 画像: grayscale → hover時カラー
   - ボタン: シャドウ拡大 + 位置移動
   - カード: ボーダー色変化（黒 → 赤）

**デザイン上の注意**:
- **必須**: 白背景 + 黒テキスト + 黒ボーダーをベースとすること
- **必須**: 3色はアクセントのみに使用し、背景やベーステキストには使用しない
- レトロな雰囲気を保つため、太字・太いボーダーを維持すること
- グラデーションストライプはセクション区切りのみに使用
- 過度にカラフルにしない（白黒ベースを崩さない）
- 黒ドロップシャドウで立体感を出す

### UIコンポーネント (shadcn/ui)

- すべてRadix UIベースでアクセシビリティ対応済み
- `src/components/ui/`に配置
- カスタマイズ可能なプリミティブコンポーネント

### 画像管理

- **必須**: 画像使用時は`ImageWithFallback`コンポーネント (`src/components/figma/ImageWithFallback.tsx`) を使用すること
- Unsplashから直接画像を参照 (`utm_source=figma`付き)
- フォールバック処理実装済み（画像読み込み失敗時の対応）
- 使用例:
  ```tsx
  <ImageWithFallback
    src="https://images.unsplash.com/photo-xxxx?utm_source=figma"
    alt="説明"
    className="w-full h-64 object-cover"
  />
  ```

## 設定ファイル

### Vite設定 (`vite.config.ts`)

- **開発サーバー**:
  - ポート: 3000
  - 自動ブラウザ起動: 有効
- **ビルド**:
  - 出力先: `build/`
  - ターゲット: `esnext`
- **パス解決**:
  - エイリアス: `@/` → `./src/`
  - すべてのRadix UIパッケージとメインライブラリに対してバージョン付きエイリアスを設定済み
    - 例: `'vaul@1.1.2': 'vaul'`, `'@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog'`
    - これにより、複数バージョンの依存関係の競合を回避
- **プラグイン**:
  - `@vitejs/plugin-react-swc` - React Fast Refreshに対応

### TypeScript

- プロジェクトはTypeScriptで記述
- tsconfig.jsonは存在しないが、ViteのデフォルトTypeScript設定を使用
- パスエイリアス `@/` が設定されているため、インポート時に使用可能
  ```tsx
  import { Button } from '@/components/ui/button'
  ```

### Tailwind CSS

- tailwind.config.jsは存在しないが、Tailwind CSSは動作している
- デフォルト設定 + カスタムカラー（インラインスタイルで対応）を使用

## 開発時の注意点

### コンポーネント追加時

1. **配置場所**:
   - 新規ページコンポーネント: `src/components/`直下
   - 再利用可能なUIコンポーネント: `src/components/ui/`を使用（shadcn/ui）
   - ユーティリティコンポーネント: `src/components/`直下または適切なサブディレクトリ

2. **画像使用時**:
   - 必ず`ImageWithFallback`コンポーネントを使用
   - Unsplashの画像URLには`utm_source=figma`を付与

3. **型定義**:
   - Propsは必ずインターフェースで定義
   - 例: `interface HomePageProps { onNavigate: (page: string) => void; }`

### スタイリング

- インラインスタイル(`style={{ fontWeight: 900 }}`)とTailwind CSSの併用OK
- レトロな雰囲気を保つため、以下を維持:
  - 太字フォント (`font-black`, `fontWeight: 900`)
  - 太いボーダー (`border-4`)
  - 鮮やかな色
  - テキストシャドウ
  - 要素の傾き
- カスタムカラーはインラインスタイルで指定
  - メインカラー: `style={{ backgroundColor: '#ff0000' }}`
  - サブカラー: `style={{ backgroundColor: '#58c6ca' }}`
  - アクセントカラー: `style={{ backgroundColor: '#f5b91f' }}`

### ページ遷移の追加

新しいページを追加する場合:

1. `App.tsx`の`currentPage`型定義を更新（例: `'home' | 'menu' | 'newpage'`）
2. 新しいページコンポーネントを作成
3. `App.tsx`の条件分岐に追加:
   ```tsx
   {currentPage === 'newpage' && <NewPage />}
   ```
4. 必要に応じて`onNavigate`関数をpropsで渡す
5. ナビゲーションリンクを`Header.tsx`に追加

### 状態管理

- 現在はReactのローカルステート（`useState`）のみ使用
- グローバルステート管理ライブラリ（Redux、Zustandなど）は使用していない
- ページ状態は`App.tsx`で一元管理

## プロジェクト固有の情報

### 店舗情報
- **店舗名**: Gather（ギャザー）
- **所在地**: 北海道釧路市愛国東
- **営業時間**: ランチタイム 11:00-15:00
- **電話番号**: 03-1234-5678
- **創業**: 1985年 (Since 1985バッジで表示)

### カラー設定
- **メインカラー**: `#ff0000` (赤)
- **サブカラー**: `#58c6ca` (水色)
- **アクセントカラー**: `#f5b91f` (黄色)

これらの情報を変更する場合は、該当するコンポーネントファイル（Hero.tsx、Location.tsx等）を直接編集してください。
