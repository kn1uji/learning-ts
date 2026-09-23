FROM node:20-bookworm

RUN apt-get update && apt-get install -y vim git curl less

# Java でいう Maven/Gradle のグローバルツール相当
RUN npm install -g typescript ts-node nodemon

WORKDIR /workspace
