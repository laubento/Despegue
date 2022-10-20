const {Router} = require("express")
const User = require("../../models/user")
const router = Router()
const History = require("../../models/history")
const mongoose = require("mongoose")

router.get("/getHistory", async (req,res) => {
    const {id} = req.query
    console.log(id)
    History.find({userId:id}).then((data) => {
        if(!data){
            res.status(404).send("No History for requested User")
        } else {
            res.status(200).send(data)
        }
    }).catch((err) => {
        res.status(500).send("No History")
    })
})

module.exports= router