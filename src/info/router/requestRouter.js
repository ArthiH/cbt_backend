const express = require("express");
const router = express.Router();
const {
  createRequestData,
  getRequestData,
} = require("../controller/requestController");

router.post("/requestdata/post", createRequestData);
router.get("/requestdata/get", getRequestData);


module.exports=router;