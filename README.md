# learning-ts

TypeScript実装の基礎学習用リポジトリ

## Init Project

### 2回目以降（このリポジトリをテンプレートとして使う場合、推奨）

```bash
npx degit kn1uji/learning-ts my-new-project
cd my-new-project
npm install
```

`.devcontainer`・`tsconfig.json`・`eslint.config.js`・`package.json`の依存関係一式がそのままコピーされる。

### ゼロから作る場合

```bash
npm init -y                 # package.json を自動生成
npm install -D typescript @tsconfig/node22 ts-node nodemon jest ts-jest @types/jest @types/node
npx eslint --init            # eslint.config.js（Flat Config）を対話形式で生成
```

`eslint --init`の質問には以下で回答する。

| 質問                                | 回答                               |
| ----------------------------------- | ---------------------------------- |
| How would you like to use ESLint?   | To check syntax and find problems  |
| What type of modules?               | JavaScript modules (import/export) |
| Which framework?                    | None of these                      |
| Does your project use TypeScript?   | Yes                                |
| Where does your code run?           | Node（Browserは外す）              |
| Which language for config file?     | JavaScript                         |
| Would you like to install them now? | Yes                                |
| package manager                     | npm                                |

**注意**: 対話中にチェックボックス選択（スペースキー）が効かない場合、日本語入力(IME)がオンになっている可能性が高い。英数モードに切り替えて再実行する。

## tsconfig.json を作成

`@tsconfig/node22`をベースにすることで、Node.js向けの`lib`・`types`・`module`などを手動設定する手間を省く。  
以下の内容で`tsconfig.json`を新規作成する（`npx tsc --init`は使わない）。

```jsonc
{
  "extends": "@tsconfig/node22/tsconfig.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
  },
  "include": ["src/**/*"],
}
```

## package.json 補足

MCP SDKなどESM前提のライブラリを使う場合は`"type": "module"`を追加する。`scripts`は以下を追記する。

```jsonc
{
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts",
    "lint": "eslint src",
  },
}
```

## エントリーポイントを作成

```bash
mkdir src
echo "console.log('hello world');" > src/index.ts
```

## Run/Build Project

```bash
npm run dev              # nodemon + ts-node でファイル保存のたびに自動実行（学習中はこれが楽）
npm run build && npm run start  # tsc でコンパイル → dist/index.js を node で実行
npm run lint              # ESLintでコード検査
```

## Java経験者向けメモ

| Java                           | TypeScript                                           |
| ------------------------------ | ---------------------------------------------------- |
| Maven/Gradle                   | npm（`package.json`が`pom.xml`相当）                 |
| Checkstyle/SpotBugs            | ESLint                                               |
| google-java-format             | Prettier                                             |
| 名前的型付け（implements必須） | 構造的型付け（形が同じなら互換）                     |
| `Optional<T>`                  | `T \| null` / `T \| undefined`（`strictNullChecks`） |
| `CompletableFuture<T>`         | `Promise<T>`                                         |
| JUnit                          | Jest                                                 |
| コンパイル後も型情報が一部残る | コンパイル後、型情報は完全に消える（型消去）         |
