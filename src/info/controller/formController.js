const formModel = require("../model/formModel");

const createFormData = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const form = new formModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      resume: {
        filePath: req.file.path,
        originalName: req.file.originalname,
      },
    });
    await form.save();
    res.send(form);
  } catch (error) {
    res.status(500).json({ error: "Failed to create form" });
  }
};

const getFormData = async (req, res) => {
  try {
    const getForm = await formModel.find(res.param);
    res.send(getForm);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createFormData, getFormData };
