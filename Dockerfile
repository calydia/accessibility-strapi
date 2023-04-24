# https://docs.strapi.io/dev-docs/installation/docker
FROM node:18-alpine as build
RUN apk update && apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  vips-dev \
  && rm -rf /var/cache/apk/*
ENV NODE_ENV=production
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install --production
WORKDIR /opt/app
COPY ./ .
RUN npm run build


FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache vips-dev \
  && rm -rf /var/cache/apk/*
ENV NODE_ENV=production
WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/app/node_modules/.bin:$PATH
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["npm", "run", "start"]
