const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  exit: {
    type: String,
    required: true,
  },
  arrive: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  userId: {type: mongoose.Schema.Types.ObjectId,ref:'User'}
});

module.exports = mongoose.model("History", historySchema);