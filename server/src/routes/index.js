const authRouter = require("./auth");
const collectionRouter = require("./match");
const userRouter = require("./user");
const evaluateRouter = require("./evaluate");
const withDrawAndDepositRouter = require("./withDrawAndDeposit");

const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/match", collectionRouter);
  app.use("/api/users", userRouter);
  app.use("/api/evaluate", evaluateRouter);
  app.use("/api/transform", withDrawAndDepositRouter);
};
module.exports = initRoutes;
