const {
    Create,
    GetProductByShop
} = require("../controllers/productController");
  const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
  const router = require("express").Router();
  router.post("/", [verifyToken], Create);
  router.get("/", GetProductByShop);

 
  
module.exports = router;
  