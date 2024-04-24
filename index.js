const express = require("express");
const app = express();
const cors = require("cors");
const contactroute = require("./src/info/router/contactRouter");
const requestroute = require("./src/info/router/requestRouter");
const formroute = require("./src/info/router/formRouter");
const db = require("./src/config/db");

//middleware
app.use(cors());
app.use(express.json());

app.use(contactroute, requestroute, formroute);

app.get("/", (req, res) => {
  res.send("Hello World! running 5000");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
