const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const {URI, USER, PASSWORD} = process.env

const app = express()



module.exports = app