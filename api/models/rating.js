const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema({
   userEmail:{
     type:"String",
     required: true
   },

   value:{
     type:"Number",
     required: true
   },
   description:{
     type: "String",
     required: true
   },
})

module.exports = mongoose.model("Rating", ratingSchema)