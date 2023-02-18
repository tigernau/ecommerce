import app from "./app.js";

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Ecommerce server start at port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Exit Ecommerce server !`);
  });
});
