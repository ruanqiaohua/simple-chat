FROM node

WORKDIR /app

VOLUME [ "/app" ]

EXPOSE 80

ENTRYPOINT node server.js

