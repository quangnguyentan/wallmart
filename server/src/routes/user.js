const {
  getAllUsers,
  getCurrent,
  updatedUser,
  getDeleteUserById,
  getGetUserById,
  addToCart,
  DepositUser,
  getAllDeposit,
  getAllWithDraw,
  getMyDeposit,
  getMyWithDraw,
  updatedStatusWithDraw,
  withDrawtUser,
  createUser
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
router.put("/createDeposit/:id", [verifyToken, isAdmin], DepositUser);
router.get("/myDeposit", [verifyToken], getMyDeposit);
router.get("/mywithDraw", [verifyToken], getMyWithDraw);
router.get("/getDeposit", [verifyToken], getAllDeposit);
router.get("/getwithDraw", [verifyToken], getAllWithDraw);
router.put(
  "/updateWithDraw/:id",
  [verifyToken, isAdmin],
  updatedStatusWithDraw
);
router.put("/withDrawUser/:id", [verifyToken], withDrawtUser);

router.get("/getUserById/:id", [verifyToken], getGetUserById);

router.get("/get-current", verifyToken, getCurrent);
router.put(
  "/update/:id",
  [verifyToken],
  upload.fields([{ name: "images", maxCount: 1 }]),
  updatedUser
);

router.post(
  "/create",
  [verifyToken],
  upload.fields([{ name: "images", maxCount: 1 }]),
  createUser
);

router.delete("/delete/:id", verifyToken, getDeleteUserById);
router.post("/addToCart", verifyToken, addToCart);

module.exports = router;
