# syntax=docker/dockerfile:1

FROM node:22-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
