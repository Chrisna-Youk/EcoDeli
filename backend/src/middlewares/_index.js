import jsonParserMiddleware from "./basics/jsonparser.middleware.js";
import helmetMiddleware from "./basics/helmet.middleware.js";
import corsMiddleware from "./basics/cors.middleware.js";
import cookieParserMiddleware from "./basics/cookieparser.middleware.js";
import i18nMiddleware from "./i18n/i18n.middleware.js";
import intervalMiddleware from "./dev/interval.middleware.js";

const middlewares = [
  jsonParserMiddleware(),
  // helmetMiddleware(),
  corsMiddleware(),
  cookieParserMiddleware(),
  i18nMiddleware(),
  // intervalMiddleware(),
];

export default middlewares;
