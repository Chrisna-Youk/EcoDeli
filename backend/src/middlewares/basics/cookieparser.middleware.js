import cookieParser from "cookie-parser";

const cookieParserMiddleware = () => {
  return cookieParser(`${process.env.COOKIE_SECRET}`, {
    decode: (str) => decodeURIComponent(str),
  });
};

export default cookieParserMiddleware;
