FROM node:23-alpine3.21

WORKDIR /app/backend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV key=value

ENTRYPOINT [ "npm" ]
CMD [ "run", "prod" ]

