FROM node:13.10-alpine

RUN apk update && \
  apk upgrade && \
  apk add ca-certificates && update-ca-certificates

RUN apk add --update tzdata
ENV TZ=America/New_York

# Clean APK cache
RUN rm -rf /var/cache/apk/*

# Copy package.json inside, then npm install the dependencies
WORKDIR /usr/src/
COPY package*.json ./
RUN npm install

COPY . .
WORKDIR /usr/src/app/
EXPOSE 3000
CMD npm start