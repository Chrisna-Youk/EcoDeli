const intervalMiddleware = () => {
    return (req, res, next) => {
      setTimeout(() => {
        next();
      }, 2000);
    };
  };
  
  export default intervalMiddleware;
  