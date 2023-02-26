"use strict";
import {} from "dotenv/config"; // instead of import dotenv from 'dotenv' then dotenv.config()
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";

const app = express();
// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init routes
app.get("/", (req, res, next) => {
  console.log("Hello World");
  const data = "ngocanh";
  res
    .status(200)
    .send({ message: "Hello World", metadata: data.repeat(10000) });
});

// init log

export default app;
