FROM node:18 AS builder

WORKDIR /usr/src/app

COPY . .

RUN ls -lrt ./

RUN yarn install --frozen-lockfile  

RUN yarn build

FROM nginx

ENV LOG_PATH="/usr/app/logs/nginx"
ENV APP_PATH="/usr/app"

RUN mkdir -p $LOG_PATH $APP_PATH

COPY deploy/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/dist $APP_PATH

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]