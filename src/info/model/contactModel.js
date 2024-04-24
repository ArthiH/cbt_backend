const mongoose = require("mongoose");
// const { v4 } = require("uuid");

const ContactModel = new mongoose.Schema({
  // _id: {
  //     type: String,
  //     default: v4,
  //   },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

const contactmodel = mongoose.model("contactinfo", ContactModel);

module.exports = contactmodel;
