import jwt from "jsonwebtoken";
const { verify } = jwt;

function authMiddleware() {
  return (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken && !refreshToken) {
      return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP"), hello: "world" });
    }

    verify(
      accessToken,
      process.env.ACCESS_TOKEN_KEY,
      (err, validatedAccessToken) => {
        if (validatedAccessToken) {
          req.user = validatedAccessToken;
          return next();
        }

        verify(
          refreshToken,
          process.env.REFRESH_TOKEN_KEY,
          (err, validatedRefreshToken) => {
            if (err || !validatedRefreshToken) {
              return res
                .status(403)
                .json({ message: req.t("403/FORBIDDEN/HTTP"), hello: "hello" });
            }

            const { iat, exp, ...payload } = validatedRefreshToken;

            const newAccessToken = jwt.sign(
              payload,
              process.env.ACCESS_TOKEN_KEY,
              { expiresIn: "15m" }
            );

            req.user = payload;

            res.cookie("accessToken", newAccessToken, {
              httpOnly: true,
              secure: true,
              sameSite: "Strict",
              maxAge: 15 * 60 * 1000, // 15 min
            });

            return next();
          }
        );
      }
    );
  };
}

export default authMiddleware;
