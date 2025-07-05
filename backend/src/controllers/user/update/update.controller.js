import User from "../../../models/user.model.js";

async function updateUserController(req, res) {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ where: { id: userId } });
    const body = req.body;
    await user.update(body);
    return res.status(200).json({ message: user });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default updateUserController;
