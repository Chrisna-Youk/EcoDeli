import jwt from "jsonwebtoken";
const { verify, decode } = jwt;

function permissionMiddleware(role) {
  return (req, res, next) => {
    if (typeof role !== "string") {
      role = "customer";
      throw new TypeError('Expected "role" to be a string');
    }

    const payload = req.user;

    try {
      const { customer, delivrer, merchant, admin } = payload;
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
          return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
      }
    } catch (error) {
      return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
    }
  };
}

export default permissionMiddleware;
