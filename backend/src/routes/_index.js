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
import registerMerchantController from "../controllers/auth/register/registerMerchant.js";
import readByIdOrder from "../controllers/order/read/readByIdOrder.controller.js";
import readByActiveCustomerController from "../controllers/order/read/readByActiveCustomer.js";
import readByActiveProviderController from "../controllers/order/read/readByActiveProvider.js";
import readByNotActiveProviderController from "../controllers/order/read/readByNotActiveProvider.js";
import readByNotActiveCustomerController from "../controllers/order/read/readByNotActiveCustomer.js";
import readByNotActiveController from "../controllers/order/read/readByNotActive.js";
import readByActiveController from "../controllers/order/read/readByActive.js";

// controller/payement
import createPayementController from "../controllers/payement/create/create.controller.js";

// controller/step
import createStepController from "../controllers/step/create/create.controller.js";
import createOfferPaymentController from "../controllers/payement/create/createservice.controller.js";
import updateContractController from "../controllers/papers/update/updateContract.controller.js";

// controller/subscription
import subscriptionController from "../controllers/subscription/read/read.controller.js"
import paySubscriptionController from "../controllers/subscription/create/paysubscription.controller.js"


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
  route(router, "/auth/register/merchant", registerMerchantController, ["post"]),
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
  route(router, "/paper/read/:userId", readPapersController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer", "merchant"])),
  route(router, "/paper/read/", readPapersAllController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/paper/update/contract/:userId", updateContractController, ["put"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer", "merchant"]), upload.fields([{name: "contract", maxCount: 1}])),



  // controllers/checkpoint
  route(router, "/checkpoint/create", createCheckpointController, ["post"], authMiddleware(), permissionMiddleware(["admin"])),
  route(router, "/checkpoint/read", readCheckpointController, ["get"], authMiddleware(), permissionMiddleware(["admin", "delivrer"])),

  // controllers/service
  route(router, "/service/create", createServiceController, ["post"], upload.fields([{ name: "photoService", maxCount: 1 }]), authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer", "merchant"])),
  route(router, "/service/read", readServiceController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer", "merchant"])),
  route(router, "/service/read/:serviceId", readServiceByIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer", "merchant"])),
  route(router, "/service/read/user/:userId", readServiceByUserIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer", "merchant"])),
  route(router, "/service/delete", deleteServiceController, ["delete"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer", "merchant"])),
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

  //controller/review
  route(router, "/review/read/:userId", readReviewByUserIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/review/create", createReviewController, ["post"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),


   //controller/transport
   route(router, "/transport/create", createTransportController, ["post"], upload.fields([{ name: "photoTransport", maxCount: 1 }]), authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  //controller/transport
  route(router, "/transport/create", createTransportController, ["post"], upload.fields([{ name: "photoTransport", maxCount: 1 }]), authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/transport/read", readTransportController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/transport/delete", deleteTransportController, ["delete"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/transport/read/:transportId", readTransportByIdController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // conroller/payement
  route(router, "/payement/create", createPayementController, ["post"], authMiddleware(), permissionMiddleware(["admin", "customer"])),
  route(router, "/payement/service/create", createOfferPaymentController, ["post"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),

  // controller/step
  route(router, "/step/create", createStepController, ["post"], authMiddleware(), permissionMiddleware(["admin", "customer", "delivrer"])),
  //Controllers/Order
  route(router, "/order/create", createOrderController, ["post"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/read/:providerId", readByIdProviderController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/customer/read/:customerId", readByIdCustomerController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/update/:id", updateOrdersController, ["put"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/read/:orderid", readByIdOrder, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/customer/read/active/:customerId", readByActiveCustomerController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/provider/read/active/:providerId", readByActiveProviderController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/customer/read/desactive/:customerId", readByNotActiveCustomerController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/provider/read/desactive/:providerId", readByNotActiveProviderController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/read/all/desactive", readByNotActiveController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),
  route(router, "/order/read/all/active", readByActiveController, ["get"], authMiddleware(), permissionMiddleware(["admin", "provider", "delivrer", "customer"])),



  // controllers/subscription
  route(router, "/subscription/subscribe", subscriptionController, ["get"], authMiddleware(), permissionMiddleware(["admin", "customer"])),
  route(router, "/subscription/subscribe/create", paySubscriptionController, ["post"], authMiddleware(), permissionMiddleware(["admin", "customer"])),


];

export default routes;
 