import jwt from "jsonwebtoken";
const { verify, decode } = jwt;

function authMiddleware() {
  return (req, res, next) => {
    const authType = req.header("Authorization")?.split(" ")[0];
    const accessToken = req.header("Authorization")?.split(" ")[1];

    // Verification du type de token (JWT) et de sa validité
    if (!accessToken || authType !== "Bearer") {
      return res
        .status(403)
        .json({ message: req.t("403/FORBIDDEN/HTTP") });
    }

    verify(accessToken, process.env.ACCESS_TOKEN_KEY, (err, validatedAccessToken) => {
      if (!err) {
        req.user = validatedAccessToken;
        return next();
      }
      // Si il n'est pas valide on verifie le refreshToken stocker dans les cookies en mode (httpOnly, secure, strict)
      const { refreshToken } = req.cookies;
      if (!refreshToken) {
        return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
      }

      verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, validatedRefreshedAccessToken) => {
        // Deux scenarios possible soit on rejette le token (erreur de hash ou d'expiration) ou l'on accepte
        if (err) {
          return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
        }

        const {iat, exp, ...payload} = decode(refreshToken)

        const refreshedAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
          expiresIn: "15m",
        });

        req.user = refreshedAccessToken;
        return next();
      });
    });
  };
}

export default authMiddleware;
