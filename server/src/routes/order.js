const {
  Create,
  List,
  GetMyOrders,
  processPayment,
  GetOrderById,
  GetMyOrdersByShop,
  updateOrder,
  deleteOrder,
  processPaymentBot,
  processPaymentStore,
  ListSuccess,
} = require("../controllers/orderController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

const router = require("express").Router();
router.post("/", [verifyToken], Create);
router.get("/", [verifyToken], List);
router.get("/", [verifyToken], List);
router.get("/success", [verifyToken], ListSuccess);
router.delete("/delete/:id", [verifyToken], deleteOrder);

router.get("/myOrder", [verifyToken], GetMyOrders);
router.put("/updateOrder/:id", [verifyToken], updateOrder);

router.get("/myOrderByShop", [verifyToken], GetMyOrdersByShop);

router.post("/payment", [verifyToken], processPayment);
router.post("/paymentBot", [verifyToken], processPaymentBot);
router.post("/paymentStore", [verifyToken], processPaymentStore);

router.get("/getOrder/:id", [verifyToken], GetOrderById);

module.exports = router;
