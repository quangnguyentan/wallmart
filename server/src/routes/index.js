const authRouter = require("./auth");
// const collectionRouter = require("./match");
const userRouter = require("./user");
const storeRouter = require("./store");
const productRouter = require("./product");
const orderRouter = require("./order");
const addressRouter = require("./addres");

const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  // app.use("/api/match", collectionRouter);
  app.use("/api/users", userRouter);
  app.use("/api/store", storeRouter);
  app.use("/api/product", productRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/address", addressRouter);

};
module.exports = initRoutes;
