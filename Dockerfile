FROM node:12.3.0 as builder
RUN npm install npm@latest -g
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
RUN npm run build

CMD ["npm", "start"]