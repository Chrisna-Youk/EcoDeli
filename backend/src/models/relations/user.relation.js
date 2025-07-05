import User from "../user.model.js";
import Subscription from "../subscription.model.js";
import Papers from "../papers.model.js";

User.belongsTo(Subscription, {
  foreignKey: "subscriptionId",
  as: "subscription",
});

User.hasOne(Papers, {
  foreignKey: "userId",
  as: "user",
});
