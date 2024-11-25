const {
  Create,
  GetMyAddress,
  deleteAddress,
  updateAddress,
  GetAddressById,
  getAddressByUserId,
  CreateUserById,
} = require("../controllers/addressController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

const router = require("express").Router();
router.get("/userId/:userId", [verifyToken], getAddressByUserId);
router.post("/", [verifyToken], Create);
router.post("/create/:id", [verifyToken], CreateUserById);
router.get("/myAddress", [verifyToken], GetMyAddress);
router.put("/update/:id", [verifyToken], updateAddress);
router.delete("/:id", [verifyToken], deleteAddress);
router.get("/:id", [verifyToken], GetAddressById);

module.exports = router;
