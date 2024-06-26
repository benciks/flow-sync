FROM node:20-alpine as builder
RUN apk add --no-cache python3 build-base
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@9.7.1
RUN npm install

ARG VITE_API_URL="https://flow.benciks.me/query"
ARG VITE_TASKD_SERVER="benciks.me"
ARG VITE_TIMEW_SERVER="https://timew.benciks.me"

COPY . .
RUN npm run build

FROM caddy as prod
WORKDIR /app
COPY --from=builder /app/dist /app/
COPY Caddyfile /app/
CMD ["caddy", "run"]