import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
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
