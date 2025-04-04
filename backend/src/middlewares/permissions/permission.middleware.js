import jwt from "jsonwebtoken";
const { verify, decode } = jwt;

function permissionMiddleware(role) {
  return (req, res, next) => {
    if (typeof role !== "string") {
      throw new TypeError('Expected "role" to be a string');
    }

    const accessToken = req.header("Authorization")?.split(" ")[1];

    try {
      verify(
        accessToken,
        process.env.ACCESS_TOKEN_KEY,
        (err, validAccessToken) => {
          if (err) {
            return res
              .status(403)
              .json({ message: req.t("403/FORBIDDEN/HTTP") });
          } else {
            const { customer, delivrer, merchant, admin } = validAccessToken;
            switch (role) {
              case "customer":
                if (customer) {
                  next();
                } else {
                  return res
                    .status(403)
                    .json({ message: req.t("403/FORBIDDEN/HTTP") });
                }
                break;
              case "delivrer":
                if (delivrer) {
                  next();
                } else {
                  return res
                    .status(403)
                    .json({ message: req.t("403/FORBIDDEN/HTTP") });
                }
                break;
              case "merchant":
                if (merchant) {
                  next();
                } else {
                  return res
                    .status(403)
                    .json({ message: req.t("403/FORBIDDEN/HTTP") });
                }
                break;
              case "admin":
                if (admin) {
                  next();
                } else {
                  return res
                    .status(403)
                    .json({ message: req.t("403/FORBIDDEN/HTTP") });
                }
                break;

              default:
                return res
                  .status(403)
                  .json({ message: req.t("403/FORBIDDEN/HTTP") });
            }
          }
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
    }
  };
}

export default permissionMiddleware;
