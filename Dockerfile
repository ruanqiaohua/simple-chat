FROM node

WORKDIR /app

COPY . .

RUN echo "$(cat key.text)" >> ~/.bashrc

EXPOSE 80

ENTRYPOINT node server.js

