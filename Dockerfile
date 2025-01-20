FROM oven/bun AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build --preset bun

# --- second stage
FROM oven/bun:alpine as production

ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json bun.lockb ./

RUN bun install

COPY --from=builder /usr/src/app/.output ./.output

EXPOSE 3000
CMD [ "bun", "run","-p", "3000", ".output/server/index.mjs" ]
