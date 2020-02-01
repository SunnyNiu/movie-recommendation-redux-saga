FROM node:10-alpine

WORKDIR /usr/src/app
COPY . .

RUN yarn

CMD [ "yarn", "start" ]