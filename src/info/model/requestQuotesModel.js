const mongoose = require("mongoose");

const RequestQuotesModel = new mongoose.Schema({
  customername: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  choice: {
    type: Array,
    default: [],
  },
  feature: {
    type: Array,
    default: [],
  },
  language: {
    type: Array,
    default: [],
  },
  backend: {
    type: String,
  },
  backendlist: {
    type: Array,
    default: [],
  },
  payment: {
    type: String,
  },
});

const requestModel = mongoose.model("requestform", RequestQuotesModel);

module.exports = requestModel;
