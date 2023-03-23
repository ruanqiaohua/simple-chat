FROM node:16

COPY ./simple-chat ./simple-chat

ENTRYPOINT 80

ENTRYPOINT node ./simple-chat/server.js

