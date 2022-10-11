const mongoose = require("mongoose");

const flights = mongoose.Schema({
  exiteDate: {
    type: String,
    required: true,
  },
  arriveDate: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  daysQuantity: {
    type: Number,
  },
  scalesQuantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Flights", flights);
