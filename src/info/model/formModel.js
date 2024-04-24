const mongoose = require("mongoose");

const FormModel = new mongoose.Schema({
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
  resume: {
    filePath: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
  },
});

const applicationmodel = mongoose.model("forminfo", FormModel);

module.exports = applicationmodel;
