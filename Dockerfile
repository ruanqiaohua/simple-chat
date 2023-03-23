FROM node:16

WORKDIR /app

COPY . .

EXPOSE 80

ENTRYPOINT node server.js

