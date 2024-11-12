const {
  Create,
  List,
  GetMyOrders,
  processPayment,
  GetOrderById,
  GetMyOrdersByShop,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

const router = require("express").Router();
router.post("/", [verifyToken], Create);
router.get("/", [verifyToken], List);
router.delete("/delete/:id", [verifyToken], deleteOrder);

router.get("/myOrder", [verifyToken], GetMyOrders);
router.put("/updateOrder/:id", [verifyToken], updateOrder);

router.get("/myOrderByShop", [verifyToken], GetMyOrdersByShop);

router.post("/payment", [verifyToken], processPayment);
router.get("/getOrder/:id", [verifyToken], GetOrderById);

module.exports = router;
