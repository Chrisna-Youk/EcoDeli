import jwt from "jsonwebtoken";
const { verify, decode } = jwt;

// Faire une liste de roleList et non juste un seul

function permissionMiddleware(roleList) {
  return (req, res, next) => {
    const { role } = req.user;

    console.log(role)

    try {
      switch (role) {
        case "customer":
          if (roleList.includes(role)) {
            next();
          } else {
            return res
              .status(403)
              .json({ message: req.t("403/FORBIDDEN/HTTP") });
          }
          break;
        case "delivrer":
          if (roleList.includes(role)) {
            next();
          } else {
            return res
              .status(403)
              .json({ message: req.t("403/FORBIDDEN/HTTP") });
          }
          break;
        case "merchant":
          if (roleList.includes(role)) {
            next();
          } else {
            return res
              .status(403)
              .json({ message: req.t("403/FORBIDDEN/HTTP") });
          }
          break;
        case "admin":
          if (roleList.includes(role)) {
            next();
          } else {
            return res
              .status(403)
              .json({ message: req.t("403/FORBIDDEN/HTTP"), hello: "hello"  });
          }
          break;

        default:
          return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP")});
      }
    } catch (error) {
      return res.status(403).json({ message: req.t("403/FORBIDDEN/HTTP") });
    }
  };
}

export default permissionMiddleware;
