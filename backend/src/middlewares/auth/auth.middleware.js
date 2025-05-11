// PATH src/middlewares/auth

import jwt from "jsonwebtoken";
const { verify, decode } = jwt;

function authMiddleware() {
  return (req, res, next) => {
    const authType = req.header("Authorization")?.split(" ")[0];
    const accessToken = req.header("Authorization")?.split(" ")[1];

    // Verification du type de token (JWT) et de sa validité
    if (!accessToken || authType !== "Bearer") {
      return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP")});
    }

    verify(
      accessToken,
      process.env.ACCESS_TOKEN_KEY,
      (err, validatedAccessToken) => {
        if (validatedAccessToken) {
          req.user = validatedAccessToken;
          return next();
        }

        if (err) {
          return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
        }

        const { refreshToken } = req.cookies;

        if (!refreshToken) {
          return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
        }

        verify(
          refreshToken,
          process.env.REFRESH_TOKEN_KEY,
          (err, validatedRefreshedAccessToken) => {
            // Deux scenarios possible soit on rejette le token (erreur de hash ou d'expiration) ou l'on accepte
            if (err) {
              return res
                .status(403)
                .json({ message: req.t("403/FORBIDDEN/HTTP") });
            }

            if (validatedRefreshedAccessToken) {
              const { iat, exp, ...payload } = decode(refreshToken);

              const refreshedAccessToken = jwt.sign(
                payload,
                process.env.ACCESS_TOKEN_KEY,
                {
                  expiresIn: "15m",
                }
              );

              req.user = decode(refreshedAccessToken);
              return next();
            }
          }
        );
      }
    );
  };
}

export default authMiddleware;
