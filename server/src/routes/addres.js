const {
  Create,
  GetMyAddress,
  deleteAddress,
  updateAddress,
  GetAddressById,
} = require("../controllers/addressController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

const router = require("express").Router();
router.post("/", [verifyToken], Create);
router.get("/myAddress", [verifyToken], GetMyAddress);
router.put("/update/:id", [verifyToken], updateAddress);
router.delete("/:id", [verifyToken], deleteAddress);
router.get("/:id", [verifyToken], GetAddressById);

module.exports = router;
