const {
  getAllUsers,
  getCurrent,
  updatedUser,
  getDeleteUserById,
  getGetUserById,
  addToCart
} = require("../controllers/userController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
router.get("/", [verifyToken], getAllUsers);
router.get("/getUserById/:id", [verifyToken], getGetUserById);

router.get("/get-current", verifyToken, getCurrent);
router.put("/update/:id", verifyToken, updatedUser);

router.delete("/delete/:id", verifyToken, getDeleteUserById);
router.post("/addToCart", verifyToken, addToCart);



module.exports = router;
