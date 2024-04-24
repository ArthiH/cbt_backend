const requestModel = require("../model/requestQuotesModel");

const createRequestData = async (req, res) => {
  try {
    const requestData = new requestModel(req.body);
    await requestData.save();
    console.log("hi");
    res.send(requestData);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving form data" });
  }
};

const getRequestData = async (req, res) => {
  try {
    const getRequest = await requestModel.find(res.param);
    res.send(getRequest);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createRequestData, getRequestData };
