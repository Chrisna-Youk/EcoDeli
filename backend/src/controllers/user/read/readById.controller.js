import User from "../../../models/user.model.js";

async function readByIdUserController(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ where: { id: userId } });
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
      company: user.company,
      email: user.email,
      phone: user.phone,
      photo: user.photo,
      status: user.status,
    };
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}

export default readByIdUserController;
