import {
  validateEmail,
  validatePassword,
} from "../../../utilities/format.utilities.js";
import { verifyTokenGenerator } from "../../../utilities/generator.utilities.js";
import { validateName, passwordHashGenerator } from "./register.utilities.js";
import { sendEmail } from "../../../emails/transporter.js";
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

  try {
    const [user, created] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordHashGenerator(password),
        verifyToken: verifyTokenGenerator(),
      },
    });
    
    if (created) {
      const response = req.t("201/CREATED/REGISTER").replace("{USER}", email);
      sendEmail(
        `EcoDeli ${process.env.SMTP_EMAIL}`,
        email,
        "EcoDeli Verification Email",
        `${process.env.URL}:${process.env.PORT}/api/v1/auth/confirmation/${user.verifyToken}`
      );
      return res.status(201).json({ message: response });
    } else if (user) {
      return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ message: req.t("500/INTERNAL_SERVER_ERROR/HTTP") });
  }
}

export default registerController;
