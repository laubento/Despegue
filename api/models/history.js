const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  destination: {
    type: String,
    required: false,
  },
  scales: {
    type: Array,
    required: true
  },
  schedule: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  userId: {type: mongoose.Schema.Types.ObjectId,ref:'User'},

  exit: {
    type:String,
    required: true
  },
  price: {
    type:String,
    required: true
  },
  flightId: {
    type:String,
    required: true
  }
});

module.exports = mongoose.model("History", historySchema);