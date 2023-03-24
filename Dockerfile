FROM node

WORKDIR /app

COPY . .

EXPOSE 80

ENTRYPOINT node server.js

