import { Router } from "express";
import route from "./route.js";

import myController from "../controllers/myController.controller.js";

const router = Router({ mergeParams: true });

// route function API :
// 1st arg    (object)      : express.Router object
// 2nd arg    (string)      : endpoint path
// 3rd arg    (function)    : controller function in camelCase format to handle the route response
// 4th arg    (array)       : allowed methods to this endpoint choices are ["get", "post", "patch", "delete", etc...]
// 5th kwargs (function)    : each function is a middleware to add to the route (example: auth middleware)

const routes = [route(router, "/", myController, ["get"])];

export default routes;
