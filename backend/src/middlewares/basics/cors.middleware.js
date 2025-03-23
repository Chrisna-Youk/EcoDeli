import cors from "cors";

const corsMiddleware = () => {
  return cors({
    origin: ["127.0.0.1"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
};

export default corsMiddleware;
