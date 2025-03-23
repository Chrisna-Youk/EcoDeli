function route(router, path, controller, methods, ...middlewares) {
  methods.forEach((method) => {
    router[method](path, ...middlewares, controller);
  });
  return router;
}

export default route;
