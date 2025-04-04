import User from "../../../models/user.model.js";
import {
  validateEmail,
  validatePassword,
} from "../../../utilities/format.utilities.js";
import { validateFirstName, validateLastName } from "../user.utilities.js";

async function createUserController(req, res) {
  const { firstName, lastName, email, password } = req.body;

  if (!validateFirstName(firstName)) {
    const response = req
      .t("400/BAD_REQUEST/USER_CREATE")
      .replace("{INPUT}", "Firstname");
    return res.status(400).json({ message: response });
  }

  if (!validateLastName(lastName)) {
    const response = req
      .t("400/BAD_REQUEST/USER_CREATE")
      .replace("{INPUT}", "Lastname");
    return res.status(400).json({ message: response });
  }

  if (!validateEmail(email)) {
    const response = req
      .t("400/BAD_REQUEST/USER_CREATE")
      .replace("{INPUT}", "Email");
    return res.status(400).json({ message: response });
  }

  if (!validatePassword(password)) {
    const response = req
      .t("400/BAD_REQUEST/USER_CREATE")
      .replace("{INPUT}", "Password");
    return res.status(400).json({ message: response });
  }

  try {
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      active: false,
    });
  } catch (error) {
    const response = req
      .t("400/BAD_REQUEST/USER_CREATE")
      .replace("{INPUT}", "Email");
    return res.status(400).json({ message: response });
  }
}

export default createUserController;
