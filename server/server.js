const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/admin", adminRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  console.log(message, "message");
  res.status(status).json({ message: message, status: error.statusCode });
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then((success) => {
    app.listen(8000);
    console.log("Database connection successfull.");
  })
  .catch((err) => {
    throw new Error("Database connection failed.");
  });
