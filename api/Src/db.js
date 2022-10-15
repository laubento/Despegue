const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB CONNECT");
    })
    .catch((err) => console.error(err));
};
mongoose.connection.on("error", (err) => {
  console.log("Error al conectar", err);
});

module.exports = db;
