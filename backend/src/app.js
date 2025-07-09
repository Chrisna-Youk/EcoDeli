import app from "./webserver/server.js";
import http from "http";
import websocketInit from "./websocket/socket.js";

const server = http.createServer(app);

websocketInit(server);

import { dbConnection } from "./database/db.js";

await dbConnection();

import middlewares from "./middlewares/_index.js";
middlewares.forEach((middleware) => {
  app.use(middleware);
});

import staticfilesMiddleware from "./middlewares/basics/staticfiles.middleware.js";

app.use("/uploads", staticfilesMiddleware());

import routes from "./routes/_index.js";
routes.forEach((route) => {
  app.use("/api/v1", route);
});

server.listen(process.env.PORT);
console.log(`Server listening on http://localhost:${process.env.PORT}`);
