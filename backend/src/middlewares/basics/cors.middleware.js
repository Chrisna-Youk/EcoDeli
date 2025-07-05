import cors from "cors";

export const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept-Language"],
  credentials: true,
};

const corsMiddleware = () => {
  return cors(corsOptions);
};

export default corsMiddleware;
