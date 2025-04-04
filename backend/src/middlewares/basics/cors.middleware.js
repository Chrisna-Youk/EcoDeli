import cors from "cors";

const corsMiddleware = () => {
  return cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
};

export default corsMiddleware;
