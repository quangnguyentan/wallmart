const {
  Create,
  List,
  GetMyOrders,
  processPayment,
  GetOrderById,
} = require("../controllers/orderController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

const router = require("express").Router();
router.post("/", [verifyToken], Create);
router.get("/", [verifyToken], List);
router.get("/myOrder", [verifyToken], GetMyOrders);
router.post("/payment", [verifyToken], processPayment);
router.get("/getOrder/:id", [verifyToken], GetOrderById);

module.exports = router;
