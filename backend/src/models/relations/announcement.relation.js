import Announcement from "../announcement.model.js";
import Category from "../category.model.js";
import User from "../user.model.js";

Announcement.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Announcement.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});
