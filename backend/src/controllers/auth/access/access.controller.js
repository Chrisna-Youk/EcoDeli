import User from "../../../models/user.model.js";
import jwt from "jsonwebtoken";
const { sign } = jwt;

async function accessController(req, res) {
  const { verifyToken, code } = req.body;
  try {
    const user = await User.findOne({
      where: {
        verifyToken: verifyToken,
        otp: code,
      },
    });

    const actualTimeStamp = new Date();
    const updatedAt = new Date(user.updatedAt);
    const diffInMinutes = (actualTimeStamp - updatedAt) / (1000 * 60);

    if (
      user ||
      user.otp != "" ||
      (user.verifyToken != "" && diffInMinutes < 10)
    ) {
      const payload = {
        email: user.email,
        customer: user.customer,
        delivrer: user.delivrer,
        merchant: user.merchant,
      };

      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "15m",
      });

      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, {
        expiresIn: "7d",
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
      return res
        .status(200)
        .json({ message: req.t("200/OK/ACCESS"), accessToken: accessToken });
    }
    return res.status(400).json({ message: req.t("400/BAD_REQUEST/ACCESS") });
  } catch (error) {
    return res.status(400).json({ message: req.t("400/BAD_REQUEST/ACCESS") });
  }
}

export default accessController;
