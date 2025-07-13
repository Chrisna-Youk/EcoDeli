import jwt from "jsonwebtoken";
const { decode } = jwt;

async function roleController(req, res) {
  const { refreshToken } = req.cookies;
  try {
    const role = decode(refreshToken, process.env.REFRESH_TOKEN_KEY).role;
    res.status(200).json({ data: role });
  } catch (error) {
    res.status(500).json({ data: "Erreur serveur" });
  }
}

export default roleController;
