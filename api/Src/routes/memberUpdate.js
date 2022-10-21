const {Router} = require("express")
const router = Router()
const mongoose = require("mongoose")
const User = require("../../models/user")
const infoTransporter = require("../routes/utils/mailer")

router.put("/membership", async (req,res) => {
    const {id} = req.query
    User.updateOne({_id: id}, {$set: {membership: true}}).then((data) => {
        res.status(200).send("User is now a member")
    }).catch((err) =>{
        res.status(500).send(err)
    })
})
router.put("/membershipDisable", async (req,res) => {
    const {id} = req.query
    User.updateOne({_id: id}, {$set: {membership: false}}).then((data) => {
        res.status(200).send("User is no longer a member")
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

router.get("/dispatchEmail", async (req,res) => {
    User.find({membership: true}).then((data) => {
        const emails = data.map((el) => {return el.email})
        console.log(emails)
        infoTransporter("nehuenxtreem6@gmail.com",[emails],"Offers for You!","<h1>KEONDAAAAA</h1>")
        

        res.status(200).send(data)
    })
})

module.exports= router