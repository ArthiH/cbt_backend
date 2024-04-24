const contactModel = require("../model/contactModel");

const createContactData = async (req, res) => {
  try {
    const contact = new contactModel(req.body);
    await contact.save();
    res.send(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to create contact" });
  }
};
const getData = async (req, res) => {
  try {
    const contact = await contactModel.find();

    res.send(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to create contact" });
  }
};

const getContactData = async (req, res) => {
  try {
    const getContact = await contactModel.find(res.param);
    res.send(getContact);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createContactData, getContactData,getData };
