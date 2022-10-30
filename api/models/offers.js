const mongoose = require("mongoose");

const Offers = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },

  nigth: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  dateFrom: {
    type: String,
    required: true,
  },
  dateTo: {
    type: String,
    required: true,
  },

  nameAirportFrom: {
    type: String,
    required: true,
  },
  nameAirportTo: {
    type: String,
    required: true,
  },
  asistans: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
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
},{ timestamps: true });

module.exports = mongoose.model("Offers", Offers);
