const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    lastname:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    admin: {
        type: Boolean,
        required: false
    },
    // historyPurchase: [
    //     {type: mongoose.Schema.Types.ObjectId,ref:'History'}
    // ] 
    historyPurchase: {
        type: Array,
    }
    
})

module.exports = mongoose.model("User", userSchema)