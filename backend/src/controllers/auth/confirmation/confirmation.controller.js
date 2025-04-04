import User from "../../../models/user.model.js";

async function confirmationController(req, res) {
  const { verifyToken } = req.params;
  try {
    const user = await User.findOne({ where: { verifyToken: verifyToken } });
    if (user || user.verifyToken) {
      user.update({verified: true, active: true, verifyToken: null });
      const response = req
        .t("200/OK/CONFIRMATION")
        .replace("{USER}", user.email);
      return res.status(200).json({ message: response });
    } else {
      return res
        .status(400)
        .json({ message: req.t("400/BAD_REQUEST/CONFIRMATION") });
    }
  } catch (error) {
    if (error instanceof TypeError) {
      return res
        .status(400)
        .json({ message: req.t("400/BAD_REQUEST/CONFIRMATION") });
    }
    return res
      .status(500)
      .json({ message: req.t("500/INTERNAL_SERVER_ERROR/HTTP") });
  }
}

export default confirmationController;
