import express from "express"

const jsonParserMiddleware = () => {
  return express.json();
};

export default jsonParserMiddleware;
