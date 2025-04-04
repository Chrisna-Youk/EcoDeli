import User from "../../../models/user.model.js";
import { compare } from "bcrypt";
import {
  validateEmail,
  validatePassword,
} from "../../../utilities/format.utilities.js";
import { sendEmail } from "../../../emails/transporter.js";
import { otpGenerator, verifyTokenGenerator } from "../../../utilities/generator.utilities.js";

async function loginController(req, res) {
  const { email, password } = req.body;

  if (!validateEmail(email) || !email) {
    return res.status(400).json({ message: req.t("400/BAD_REQUEST/LOGIN") });
  }

  if (!validatePassword(password) || !password) {
    return res.status(400).json({ message: req.t("400/BAD_REQUEST/LOGIN") });
  }

  try {
    const user = await User.findOne({ where: { email: email } });
    if (user || user.active == true) {
      compare(password, user.password, (err, result) => {
        if (result) {
          user.update({ verifyToken: verifyTokenGenerator(), otp: otpGenerator() });
          sendEmail(
            `EcoDeli ${process.env.SMTP_EMAIL}`,
            user.email,
            "EcoDeli Code Verification",
            `Hello there is the code ${user.otp}`
          );
          return res
            .status(200)
            .json({
              message: req.t("200/OK/LOGIN"),
              verifyToken: user.verifyToken,
            });
        }
        return res
          .status(400)
          .json({ message: req.t("400/BAD_REQUEST/LOGIN") });
      });
    } else {
      return res.status(400).json({ message: req.t("400/BAD_REQUEST/LOGIN") });
    }
  } catch {
    return res.status(400).json({ message: req.t("400/BAD_REQUEST/LOGIN") });
  }
}

export default loginController;
