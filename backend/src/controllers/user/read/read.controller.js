import User from "../../../models/user.model.js";

async function readUserController(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ error: error.message || "Bad request" });
  }
}

export default readUserController;


  