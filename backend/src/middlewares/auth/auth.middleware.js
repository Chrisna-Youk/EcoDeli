import jwt from "jsonwebtoken";
const { verify } = jwt;

function authMiddleware() {
  return (req, res, next) => {
    const accessToken = req.header("Authorization")?.split(" ")[1];

    if (!accessToken) {
      return res
        .status(401)
        .json({ success: false, message: "Access token not provided" });
    }

    verify(
      accessToken,
      process.env.ACCESS_TOKEN_KEY,
      (err, validatedAccessToken) => {
        if (err) {
          const { refreshToken } = req.cookies;
          verify(
            refreshToken,
            process.env.REFRESH_TOKEN_KEY,
            (err, refreshedAccessToken) => {
              if (err) {
                return res.status(403).json({ error: "Invalid token" });
              } else {
                req.user = refreshedAccessToken;
              }
            }
          );
          return res.status(403).json({ error: "Invalid token" });
        } else {
          req.user = validatedAccessToken;
        }
      }
    );
    next();
  };
}

export default authMiddleware;
