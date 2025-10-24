FROM node:lts-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
# Copy pnpm configuration files (if they exist)
COPY .npmrc* pnpm-workspace.yaml* ./
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html 
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
