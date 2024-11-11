const {
  Create,
  CreateNewStore,
  GetAllStore,
  GetStoreById,
} = require("../controllers/storeController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
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
const router = require("express").Router();
router.post("/", [verifyToken], Create);
router.get("/", GetAllStore);
router.get("/:id", GetStoreById);

router.post(
  "/create",
  [verifyToken, isAdmin],
  upload.fields([{ name: "images", maxCount: 1 }]),
  CreateNewStore
);
module.exports = router;
