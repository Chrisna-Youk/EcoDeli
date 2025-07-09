import User from "../../../models/user.model.js";

async function readUserByRoleController(req, res) {
  try {
    const { userRole } = req.params;
    const users = await User.findAll({ where: { role: userRole } }
    );

    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Bad request" });
  }
}


export default readUserByRoleController;
