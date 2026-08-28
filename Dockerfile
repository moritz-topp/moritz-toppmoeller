FROM node:24-alpine AS build

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app
COPY . .

RUN pnpm install
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm run build

FROM node:24-alpine AS prod

WORKDIR /app
COPY --from=build /app/.output/ /app/

EXPOSE 3000
HEALTHCHECK --interval=60s --start-period=10s --start-interval=1s --timeout=3s  --retries=2 CMD wget --spider --tries=1 --no-verbose http://0.0.0.0:3000

CMD node /app/server/index.mjs
