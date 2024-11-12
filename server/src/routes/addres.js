const {
    Create,
   GetMyAddress
  } = require("../controllers/addressController");
  const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
  
  const router = require("express").Router();
  router.post("/", [verifyToken], Create);
  router.get("/myAddress", [verifyToken], GetMyAddress);

  
  module.exports = router;
  