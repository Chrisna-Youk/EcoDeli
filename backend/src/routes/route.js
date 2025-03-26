function route(router, path, controller, methods, ...middlewares) {
  methods.forEach((method) => {
    router[method](path, ...middlewares, controller);
  });

  router.all(path, (req, res) => {
    const response = req
      .t("405/METHOD_NOT_ALLOWED/HTTP")
      .replace("{METHOD}", req.method)
      .replace("{URL}", req.originalUrl);

    res.status(405).json({ message: response });
  });

  return router;
}

export default route;
