FROM node:13.10-alpine

# Install base packages
RUN apk update && \
  apk upgrade && \
  apk add ca-certificates && update-ca-certificates

# Change TimeZone
RUN apk add --update tzdata
ENV TZ=America/New_York

# Clean APK cache
RUN rm -rf /var/cache/apk/*

#copy the repo inside, then npm install the dependencies
WORKDIR /usr/src/
COPY . .
RUN npm install


WORKDIR /usr/src/app/

EXPOSE 3000

CMD npm start