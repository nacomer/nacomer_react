FROM node:12.16.1 as build

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install
COPY . .
RUN yarn build

#==========マルチステージビルド============

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]