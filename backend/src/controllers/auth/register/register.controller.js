import {
  validateEmail,
  validatePassword,
} from "../../../utilities/format.utilities.js";
import { validateName } from "./register.utilities.js";
import User from "../../../models/user.model.js";

async function registerController(req, res) {
  let { firstName, lastName, email, password } = req.body;

  if (!validateName(firstName)) {
    firstName = "Firstname";
    const response = req
      .t("400/BAD_REQUEST/REGISTER")
      .replace("{INPUT}", firstName);
    return res.status(400).json({ message: response });
  }

  if (!validateName(lastName)) {
    lastName = "Lastname";
    const response = req
      .t("400/BAD_REQUEST/REGISTER")
      .replace("{INPUT}", lastName);
    return res.status(400).json({ message: response });
  }

  if (!validateEmail(email) || !email) {
    email = "Email";
    const response = req
      .t("400/BAD_REQUEST/REGISTER")
      .replace("{INPUT}", email);
    return res.status(400).json({ message: response });
  }

  if (!validatePassword(password) || !password) {
    password = "Password";
    const response = req
      .t("400/BAD_REQUEST/REGISTER")
      .replace("{INPUT}", password);
    return res.status(400).json({ message: response });
  }

  const [user, created] = await User.findOrCreate({
    where: { email: email },
    default: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
  });

  if (created) {
    const response = req.t("201/CREATED/REGISTER").replace("{USER}", email);
    return res.status(201).json({ message: response });
  } else if (user) {
    return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
  }
}

export default registerController;
