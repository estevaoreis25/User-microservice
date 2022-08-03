FROM node:16.16.0

WORKDIR /user-service

COPY package.json ./

COPY prisma ./prisma/

COPY .env ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start:dev" ]