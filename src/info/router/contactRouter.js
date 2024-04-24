const express = require("express");
const router = express.Router();
const {
  createContactData,
  getContactData,
} = require("../controller/contactController");

router.post("/contactdata/add", createContactData);
router.get("/contactdata/get", getContactData);

module.exports = router;
