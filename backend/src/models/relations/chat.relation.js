import Chat from "../chat.model.js";
import User from "../user.model.js";
import Service from "../service.model.js";

Chat.belongsTo(Service, {
  foreignKey: "serviceId",
  as: "service",
});

Chat.belongsTo(User, {
  foreignKey: "customerId",
  as: "customer",
});

Chat.belongsTo(User, {
  foreignKey: "providerId",
  as: "provider",
});
