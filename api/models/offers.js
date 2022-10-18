const mongoose = require("mongoose");

const Offers = mongoose.Schema({
  airlines: {
    type: String,
    required: true,
  },
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
  prevPrice: {
    type: Number,
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
  image: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  arrive: {
    type: String,
  },
});

module.exports = mongoose.model("Offers", Offers);
