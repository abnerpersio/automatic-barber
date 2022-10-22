FROM node:lts-alpine as builder

WORKDIR /home/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM node:lts-alpine as final

WORKDIR /home/app

COPY --from=builder /home/app/dist ./dist 

EXPOSE 80

CMD ["node", "dist/index.js"]