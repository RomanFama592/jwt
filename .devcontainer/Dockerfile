FROM node:lts-alpine

RUN npm install -g npm@latest &&\
    npm upgrade --global yarn 

COPY package.json .

RUN yarn install

RUN yarn upgrade