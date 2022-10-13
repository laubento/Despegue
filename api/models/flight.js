const mongoose = require("mongoose");

const flight = mongoose.Schema({
  airport: {
    type: String,
    required: true,
  },

  departureDate: {
    type: String,
    required: true,
  },

  returnDate: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  scales: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Flight", flight);
