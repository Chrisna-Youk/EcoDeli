import Category from "../../../models/category.model.js";

async function readCategoryController(req, res) {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({ data: categories });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readCategoryController;
