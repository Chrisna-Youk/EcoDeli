import jwt from "jsonwebtoken";
const { decode } = jwt;

async function roleController(req, res) {
  const { refreshToken } = req.cookies;
  const role = decode(refreshToken, process.env.REFRESH_TOKEN_KEY).role;
  res.status(200).json({ data: role });
}

export default roleController;
