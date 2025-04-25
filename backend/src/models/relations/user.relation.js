import User from "../user.model.js";
import Subscription from "../subscription.model.js";

// Many users can share one subscription type
User.belongsTo(Subscription, {
  foreignKey: "subscription_id",
  as: "subscription", // alias facultatif
});
