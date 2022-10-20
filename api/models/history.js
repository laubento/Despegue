const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId,ref:'User'},
  package: {
    type: Array,
    required: true
  }

});

module.exports = mongoose.model("History", historySchema);