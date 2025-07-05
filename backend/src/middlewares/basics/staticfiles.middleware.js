import express from "express";
import path from "path";

const __dirname = path.resolve();

const staticfilesMiddleware = () => {
  return express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, path) => {
      res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
      res.setHeader("Access-Control-Allow-Origin", "*"); // ou ton domaine front spécifique
    },
  });
};

export default staticfilesMiddleware;
