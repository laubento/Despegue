const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DB CONNECT");
    })
    .catch((err) => console.error(err));
};

module.exports = db;
