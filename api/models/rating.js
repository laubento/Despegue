const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema({
   user:{
        type: String,
        required: true
   },

   value:{
        type: Number,
        required: true
   }
})

module.exports = mongoose.model("Rating", ratingSchema)