FROM node:lts-alpine

WORKDIR /jwt_service

COPY package.json .

RUN npm install -g npm@latest &&\
    npm install && npm cache clean --force

COPY . .

CMD [ "npm", "run", "start" ]