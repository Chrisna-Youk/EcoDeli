import jwt from "jsonwebtoken";
const { verify, sign } = jwt;

async function refreshController(req, res) {
  const { cookies } = req;
  const refreshToken = cookies.refreshToken;
  
  if (!refreshToken) {
    return res.status(400).json({ message: req.t("400/BAD_REQUEST/HTTP") });
  }

  verify(
    refreshToken,
    process.env.REFRESH_TOKEN_KEY,
    async (err, validatedRefreshToken) => {
      if (err) {
        res.clearCookie("refreshToken");
        return res.status(400).json({ message: req.t("400/BAD_REQUEST/HTTP") });
      }

      if (validatedRefreshToken) {
        const { iat, exp, ...payload } = validatedRefreshToken;
        const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
          expiresIn: "15m",
        });
        return res.status(200).json({
          message: req.t("200/OK/ACCESS"),
          accessToken: newAccessToken,
        });
      }
    }
  );
}

export default refreshController;
