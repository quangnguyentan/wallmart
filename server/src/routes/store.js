const {
  Create,
  CreateNewStore,
  GetAllStore,
  GetStoreById,
  GetMyStore,
  updateStore,
 deleteStore 
} = require("../controllers/storeController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
const router = require("express").Router();
router.post("/", [verifyToken], Create);
router.get("/myStore", [verifyToken], GetMyStore);
router.get("/", GetAllStore);
router.delete("/delete/:id", deleteStore);

router.get("/:id", GetStoreById);
router.put("/update/:id",[verifyToken, isAdmin], updateStore);

router.post(
  "/create",
  [verifyToken],
  upload.fields([{ name: "images", maxCount: 1 },
        { name: "front", maxCount: 1 }, 
        { name: "back", maxCount: 1 }, 
        { name: "yourFace", maxCount: 1 }]),
  CreateNewStore
);
module.exports = router;
