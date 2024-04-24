const express = require("express");
const router = express.Router();
const {
  createContactData,
  getContactData,
} = require("../controller/contactController");

router.post("/contactdata/add", createContactData);
router.get("/contactdata/get", getContactData);
router.get("/contactdata/get_duplicate", getContactData);

module.exports = router;
