const authRouter = require("./auth");
// const collectionRouter = require("./match");
const userRouter = require("./user");
const storeRouter = require("./store");
const productRouter = require("./product");


const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  // app.use("/api/match", collectionRouter);
  app.use("/api/users", userRouter);
  app.use("/api/store", storeRouter);
  app.use("/api/product", productRouter);

};
module.exports = initRoutes;
