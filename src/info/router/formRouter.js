const express = require("express");
const router = express.Router();
const { createFormData, getFormData } = require("../controller/formController");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/formdata/add", upload.single("resume"), createFormData);
router.get("/formdata/get", getFormData);

module.exports = router;
