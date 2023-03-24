FROM node

WORKDIR /app

COPY . .

VOLUME [ "/app" ]

EXPOSE 80

ENTRYPOINT node server.js

