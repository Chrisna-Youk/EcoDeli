import { Router } from "express";
import route from "./route.js";

// middlewares
import authMiddleware from "../middlewares/auth/auth.middleware.js";
import permissionMiddleware from "../middlewares/permissions/permission.middleware.js";

// controllers/auth
import registerController from "../controllers/auth/register/register.controller.js";
import confirmationController from "../controllers/auth/confirmation/confirmation.controller.js";
import loginController from "../controllers/auth/login/login.controller.js";
import accessController from "../controllers/auth/access/access.controller.js";

// controllers/user
import createUserController from "../controllers/user/create/create.controller.js";
import readUserController from "../controllers/user/read/read.controller.js";
import readByIdUserController from "../controllers/user/read/readById.controller.js";
import updateUserController from "../controllers/user/update/update.controller.js";
import deleteUserController from "../controllers/user/delete/delete.controller.js";

// controllers
import myController from "../controllers/myController.controller.js";


const router = Router({ mergeParams: true });

// route function API :
// 1st arg    (object)      : express.Router object
// 2nd arg    (string)      : endpoint path
// 3rd arg    (function)    : controller function in camelCase format to handle the route response
// 4th arg    (array)       : allowed methods to this endpoint choices are ["get", "post", "patch", "delete", etc...]
// 5th kwargs (function)    : each function is a middleware to add to the route (example: authMiddleware)

const routes = [
  // controllers/auth
  route(router, "/auth/register", registerController, ["post"]),
  route(router, "/auth/confirmation/:verifyToken", confirmationController, ["get"]),
  route(router, "/auth/login", loginController, ["post"]),
  route(router, "/auth/access", accessController, ["post"]),
  // contorllers/user
  route(router, "/user/create", createUserController, ["post"], authMiddleware()),
  route(router, "/user/read", readUserController, ["get"], authMiddleware()),
  route(router, "/user/read/:userId", readByIdUserController, ["get"], authMiddleware()),
  route(router, "/user/update", updateUserController, ["put"], authMiddleware()),
  route(router, "/user/delete", deleteUserController, ["delete"], authMiddleware()),

  // controllers
  route(router, "/", myController, ["get"], authMiddleware(), permissionMiddleware("merchant"))
];

export default routes;
