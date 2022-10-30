const {Router} = require("express")
const User = require("../../models/user")
const router = Router()
const History = require("../../models/history")
const mongoose = require("mongoose")
const axios = require('axios')
const { isUser } = require("./login/auth/verifyToken")

router.get("/getHistory",isUser, async (req,res) => {
    const {id} = req.query
  
    History.find({userId:id}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(200).send([])
    })
})

module.exports= router