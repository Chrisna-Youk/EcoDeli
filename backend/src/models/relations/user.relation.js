import User from "../user.model.js";
import Subscription from "../subscription.model.js";

User.belongsTo(Subscription, {
  foreignKey: "subscriptionId",
  as: "subscription",
});
