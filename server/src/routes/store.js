const {
    Create
} = require("../controllers/storeController");
  const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
  const router = require("express").Router();
  router.post("/", [verifyToken], Create);
 
  
  module.exports = router;
  