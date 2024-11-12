const {
  getAllUsers,
  getCurrent,
  updatedUser,
  getDeleteUserById,
  getGetUserById,
  addToCart,
  DepositUser,
} = require("../controllers/userController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
router.get("/", [verifyToken], getAllUsers);
router.put("/updateDeposit/:id", [verifyToken, isAdmin], DepositUser);

router.get("/getUserById/:id", [verifyToken], getGetUserById);

router.get("/get-current", verifyToken, getCurrent);
router.put(
  "/update/:id",
  [verifyToken, isAdmin],
  upload.fields([{ name: "images", maxCount: 1 }]),
  updatedUser
);

router.delete("/delete/:id", verifyToken, getDeleteUserById);
router.post("/addToCart", verifyToken, addToCart);

module.exports = router;
