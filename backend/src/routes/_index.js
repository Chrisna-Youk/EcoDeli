import { Router } from "express";
import route from "./route.js";

// middlewares
import authMiddleware from "../middlewares/auth/auth.middleware.js";
import permissionMiddleware from "../middlewares/permissions/permission.middleware.js";
import staticfilesMiddleware from "../middlewares/basics/staticfiles.middleware.js";

// uploader
import upload from "../upload/uploader.js";

// controllers/auth
import registerController from "../controllers/auth/register/register.controller.js";
import confirmationController from "../controllers/auth/confirmation/confirmation.controller.js";
import loginController from "../controllers/auth/login/login.controller.js";
import accessController from "../controllers/auth/access/access.controller.js";
import refreshController from "../controllers/auth/refresh/refresh.controller.js";
import roleController from "../controllers/auth/role/role.controller.js";
import signoutController from "../controllers/auth/signout/signout.controller.js";

// controllers/category
import readCategoryController from "../controllers/category/read/read.controller.js";

// controllers/user
import createUserController from "../controllers/user/create/create.controller.js";
import readUserController from "../controllers/user/read/read.controller.js";
import readByIdUserController from "../controllers/user/read/readById.controller.js";
import updateUserController from "../controllers/user/update/update.controller.js";
import deleteUserController from "../controllers/user/delete/delete.controller.js";
import deleteUserById from "../controllers/user/delete/deleteUserById.controller.js";
import readUserByRoleController from "../controllers/user/read/readByRole.controller.js";

// controllers/announcement
import createAnnouncementController from "../controllers/announcement/create/create.controller.js";
import readAnnouncementController from "../controllers/announcement/read/read.controller.js";
import readAnnouncementByIdController from "../controllers/announcement/read/readById.controller.js";

// controllers/papers
import updatePapersController from "../controllers/papers/update/update.controller.js";
import readPapersController from "../controllers/papers/read/read.controller.js";
import readPapersByRoleRequested from "../controllers/papers/read/readPapersAllController.controller.js";

// controllers/checkpoint
import createCheckpointController from "../controllers/checkpoint/create/create.controller.js";
import readCheckpointController from "../controllers/checkpoint/read/read.controller.js";

// controllers/service
import createServiceController from "../controllers/service/create/create.controller.js";
import readServiceController from "../controllers/service/read/read.controller.js";
import readServiceByIdController from "../controllers/service/read/readById.controller.js";
import readServiceByUserIdController from "../controllers/service/read/readByUserId.controller.js";
import deleteServiceController from "../controllers/service/delete/delete.controller.js";
import updateServiceController from "../controllers/service/update/update.controller.js";

// controllers/message
import readMessageByChatIdController from "../controllers/message/read/readByChatId.controller.js";

// controller/chat
import readChatByUserIdController from "../controllers/chat/read/readChatByUserId.controller.js";
import readChatsByProviderIdController from "../controllers/chat/read/readChatByProviderId.controller.js";
import readChatsByCustomerIdController from "../controllers/chat/read/readChatByCustomerId.controller.js";

// controller/review
import readReviewByUserIdController from "../controllers/review/read/readReviewByUserId.controller.js";
import readPapersAllController from "../controllers/papers/read/readPapersAllController.controller.js";

// controller/transport
import createTransportController from "../controllers/transport/create/create.controller.js";
import readTransportController from "../controllers/transport/read/read.controller.js";
import deleteAnnouncementController from "../controllers/announcement/delete/delete.controller.js";
import deleteTransportController from "../controllers/transport/delete/delete.controller.js";
import readTransportByIdController from "../controllers/transport/read/readById.controller.js";
import createReviewController from "../controllers/review/create/create.controller.js";
import createChatController from "../controllers/chat/create/createChat.controller.js";
import createOrderController from "../controllers/order/create/createOrder.controller.js";
import readByIdProviderController from "../controllers/order/read/readByIdProvider.controler.js";
import readByIdCustomerController from "../controllers/order/read/readByIdCustomer.controler.js";
import updateOrdersController from "../controllers/order/update/updateOrder.controller.js";

// controller/payement
import createPayementController from "../controllers/payement/create/create.controller.js";

// controller/step
import readStepsByProviderIdController from "../controllers/step/read/readByProviderId.controller.js";
import readStepsByAnnouncementIdController from "../controllers/step/read/readByAnnouncementId.controller.js"
import readStepsByCheckpointIdController from "../controllers/step/read/readByCheckpointId.controller.js";
import readNearestCheckpointController from "../controllers/step/read/readNearestCheckpoint.controller.js";
import readNearestCheckpointsController from "../controllers/step/read/readNearestCheckpoints.controller.js";
import createStepController from "../controllers/step/create/create.controller.js";
import refreshStatusController from "../controllers/step/update/refreshStatus.controller.js";
import cancelStepController from "../controllers/step/delete/delete.controller.js";


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
  route(router, "/auth/refresh", refreshController, ["get"]),
  route(router, "/auth/role", roleController, ["get"]),
  route(router, "/auth/signout", signoutController, ["get"]),

  // controllers/user
  route(router, "/user/read", readUserController, ["get"], authMiddleware(), permissionMiddleware(["admin"])),
  route(router, "/user/read/:userId", readByIdUserController, ["get"]),
  route(router, "/user/read/:userRole", readUserByRoleController, ["get"]),
  route(router, "/user/create", createUserController, ["post"], authMiddleware(), permissionMiddleware(["admin"])),
  route(router, "/user/update/:userId", updateUserController, ["put"]),
  route(router, "/user/delete", deleteUserController, ["delete"], authMiddleware()),
  route(router, "/user/delete/:userId", deleteUserById, ["delete"], authMiddleware(), permissionMiddleware(["admin"])),

  // controllers/announcement
  route(router, "/announcement/read", readAnnouncementController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/announcement/read/:announcementId", readAnnouncementByIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "delivrer", "customer", "provider"])),
  route(router, "/announcement/create", createAnnouncementController, ["post"], upload.fields([{ name: "photoDelivery", maxCount: 1 }]), authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/announcement/delete", deleteAnnouncementController, ["delete"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // controllers/papers
  route(router, "/paper/update/:userId", updatePapersController, ["put"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"]), upload.fields([{name: "idCard", maxCount: 1}, {name: "driverLicense", maxCount: 1}, {name: "profilePhoto", maxCount: 1}, {name: "pricesDocument", maxCount: 1}])),
  route(router, "/paper/read/:userId", readPapersController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/paper/read/", readPapersAllController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),


  // controllers/checkpoint
  route(router, "/checkpoint/create", createCheckpointController, ["post"], authMiddleware(), permissionMiddleware(["admin"])),
  route(router, "/checkpoint/read", readCheckpointController, ["get"], authMiddleware(), permissionMiddleware(["admin", "delivrer"])),

  // controllers/service
  route(router, "/service/create", createServiceController, ["post"], upload.fields([{ name: "photoService", maxCount: 1 }]), authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/service/read", readServiceController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/service/read/:serviceId", readServiceByIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/service/read/user/:userId", readServiceByUserIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/service/delete", deleteServiceController, ["delete"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/service/update/:serviceId", updateServiceController, ["put"], upload.fields([{ name: "photoService", maxCount: 1 }]), authMiddleware(), permissionMiddleware(["admin", "provider"])),

  // controllers/message
  route(router, "/message/read/:chatId", readMessageByChatIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // controllers/chat
  route(router, "/chat/read/:customerId/:providerId/:serviceId", readChatByUserIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/chat/provider/read/:providerId", readChatsByProviderIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/chat/customer/read/:customerId", readChatsByCustomerIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/chat/create", createChatController, ["post"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // controllers/category
  route(router, "/category/read", readCategoryController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // controller/review
  route(router, "/review/read/:userId", readReviewByUserIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/review/create", createReviewController, ["post"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // controller/transport
  route(router, "/transport/create", createTransportController, ["post"], upload.fields([{ name: "photoTransport", maxCount: 1 }]), authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/transport/read", readTransportController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/transport/delete", deleteTransportController, ["delete"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/transport/read/:transportId", readTransportByIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // conroller/payement
  route(router, "/payement/create", createPayementController, ["post"], authMiddleware(), permissionMiddleware(["admin", "customer"])),

  // controller/step
  route(router, "/step/read/provider", readStepsByProviderIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "customer", "delivrer"])),
  route(router, "/step/read/announcement/:announcementId", readStepsByAnnouncementIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "customer", "delivrer"])),
  route(router, "/step/read/checkpoint/:checkpointId", readStepsByCheckpointIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "customer", "delivrer"])),
  route(router, "/step/read/checkpoint/nearest", readNearestCheckpointController, ["get"], authMiddleware(), permissionMiddleware(["admin", "customer", "delivrer"])),
  route(router, "/step/read/checkpoints/nearest", readNearestCheckpointsController, ["get", "post"], authMiddleware(), permissionMiddleware(["admin", "customer", "delivrer"])),
  route(router, "/step/create", createStepController, ["post"], authMiddleware(), permissionMiddleware(["admin", "customer", "delivrer"])),
  route(router, "/step/status/update", refreshStatusController, ["put"], authMiddleware(), permissionMiddleware(["admin"])),
  route(router, "/step/cancel/:stepUuid", cancelStepController, ["delete"], authMiddleware(), permissionMiddleware(["admin", "delivrer"])),

  // controller/order
  route(router, "/order/create", createOrderController, ["post"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/read/:providerId", readByIdProviderController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/customer/read/:customerId", readByIdCustomerController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/update/:id", updateOrdersController, ["put"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),



];

export default routes;
 