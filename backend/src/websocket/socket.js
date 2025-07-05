import { Server } from "socket.io";
import http from "http";
import { corsOptions } from "../middlewares/basics/cors.middleware";

import app from "../webserver/server";

const server = http.createServer(app);

const io = new Server(server, corsOptions);


