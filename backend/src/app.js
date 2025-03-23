import express from "express";
const app = express();

import middlewares from "./middlewares/_index.js";
middlewares.forEach((middleware) => {
  app.use(middleware);
});

import routes from "./routes/_index.js";
routes.forEach((route) => {
  app.use("/api/v1", route);
});

app.listen(process.env.PORT);
console.log(`Server listening on http://localhost:${process.env.PORT}`);
