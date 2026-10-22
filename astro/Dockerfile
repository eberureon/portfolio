FROM node:lts-alpine AS builder
# Pin pnpm to the version that writes pnpm-lock.yaml; newer majors reject it with --frozen-lockfile
RUN npm install -g pnpm@10.12.4
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
