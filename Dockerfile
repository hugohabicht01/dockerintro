FROM oven/bun AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN yarn build

FROM oven/bun:alpine

ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json bun.lockb ./

RUN bun install --production

COPY --from=builder /usr/src/app/dist ./.output

EXPOSE 3000
CMD [ "node", ".output/index.js" ]
