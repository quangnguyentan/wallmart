const {
  GetProductByShop,
  GetAllProduct,
  CreateNewProduct,
  GetProductById,
} = require("../controllers/productController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    console.log(file.originalname);
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
router.get("/", GetAllProduct);
router.get("/shop/:id", GetProductByShop);
router.get("/:id/:userId", GetProductById);
router.post(
  "/create",
  [verifyToken, isAdmin],
  upload.array("photos", 20),
  CreateNewProduct
);

module.exports = router;