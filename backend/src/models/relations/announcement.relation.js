import Announcement from "../announcement.model.js";
import Category from "../category.model.js";

Announcement.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});
