FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm install -g nodemon
CMD ["nodemon", "--env-file", ".dev.env", "./src/app.js"]
