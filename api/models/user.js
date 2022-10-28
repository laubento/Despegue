const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: false,
  },

  dni: {
    type: String,
    required: false,
  },

  phone: {
    type: String,
    required: false,
  },

  birthDate: {
    type: String,
    required: false,
  },

  photo: {
    type: String,
    required: false,
  },


  // age:{
  //     type: Number,
  //     required: true
  // },

  banned:{
    type: Boolean,
    default: false,
    required: true
  },

  membership: {
    type: Boolean,
    default: false,
    required: true
  },


  password: {
    type: String,
    default: '1',
    required: true,
  },

  purchaseHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "History",
  },

  email: {
    type: String,
    required: false,
    unique: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  // gender: {
  //     type: String,
  //     required: true
  // },
  // phone: {
  //     type: Number,
  //     required: false
  // },
  // admin: {
  //     type: Boolean,
  //     required: false
  // },
  sub: {
    type: String,
  },
  roles: {
    type: Array,
    default: ["user"],
  },
  verify:{
    type: Boolean,
    default: false,
    required: true
  },
});
User.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

User.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// User.pre("findOne", function () {
//   this.where({ active: true });
// });

module.exports = mongoose.model("User", User);