FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build
RUN npm prune --omit=dev
EXPOSE 2222
