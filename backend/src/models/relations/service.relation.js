import Service from "../service.model.js";
import Category from "../category.model.js";
import User from "../user.model.js";

Service.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Service.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});
