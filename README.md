## Init Project

npm init -y # package.json を自動生成
npx tsc --init # tsconfig.json を自動生成（コメント付きで親切）
npx eslint --init # .eslintrc.json を対話形式で生成

## Run/Build Project

npm run dev # nodemon + ts-node でファイル保存のたびに自動実行（学習中はこれが楽）
npm run build && npm run start # tsc でコンパイル → dist/index.js を node で実行
