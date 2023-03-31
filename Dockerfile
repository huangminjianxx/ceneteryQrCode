FROM node:16

ENV PROJECT_ENV development
ENV NODE_ENV development

COPY . /app/

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

# RUN npm run dev

EXPOSE 3000