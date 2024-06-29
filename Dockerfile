# https://docs.strapi.io/dev-docs/installation/docker
FROM node:20-alpine as build
RUN apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  vips-dev
ENV NODE_ENV=production
WORKDIR /opt
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install --legacy-peer-deps --omit=dev
WORKDIR /opt/app
COPY ./config ./config
COPY ./database ./database
COPY ./public ./public
COPY ./src ./src
COPY ./types ./types
COPY ./package.json ./package-lock.json ./favicon.png ./
RUN npm run build


FROM node:20-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk add --no-cache vips-dev
ENV NODE_ENV=production
WORKDIR /opt/app
COPY --from=build --chown=node:node /opt/node_modules ./node_modules
COPY --from=build --chown=node:node /opt/app ./
USER node
ENV PATH /opt/app/node_modules/.bin:$PATH
EXPOSE 1337
CMD ["npm", "run", "start"]
