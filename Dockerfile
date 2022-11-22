FROM node:latest

RUN mkdir -p /usr/scr/app

WORKDIR /usr/scr/app

COPY package.json /usr/scr/app

RUN npm install

COPY . /usr/scr/app/

#like the port of index.js
EXPOSE 3001

CMD ["npm","start"]

# docker build -t myapp  --> tao image ten myapp

# docker run --publish 3002:3001  --> tao container 3002:3001, 3001 is the same in index.js

# Test: http://localhost:3002/foo1 