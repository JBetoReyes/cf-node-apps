FROM node:alpine

ARG APP_PORT

COPY ["package.json", "package-lock.json", "/usr/app/"]

WORKDIR /usr/app

RUN npm install
COPY [".", "/usr/app"]

ENV APP_PORT=$APP_PORT
ENV DEBUG=b:*

CMD ["npx", "nodemon", "./src/app.js"]
