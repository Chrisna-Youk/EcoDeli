import { Router } from "express";
import route from "./route.js";

// middlewares
// import authMiddleware from "../middlewares/auth/auth.middleware.js";

// controllers/auth
import registerController from "../controllers/auth/register/register.controller.js";

// controllers
// import myController from "../controllers/myController.controller.js";

const router = Router({ mergeParams: true });

// route function API :
// 1st arg    (object)      : express.Router object
// 2nd arg    (string)      : endpoint path
// 3rd arg    (function)    : controller function in camelCase format to handle the route response
// 4th arg    (array)       : allowed methods to this endpoint choices are ["get", "post", "patch", "delete", etc...]
// 5th kwargs (function)    : each function is a middleware to add to the route (example: authMiddleware)

const routes = [
  // controllers/auth
  route(router, "/register", registerController, ["post"]),
  // controllers
  // route(router, "/", myController, ["get"])
];

export default routes;
