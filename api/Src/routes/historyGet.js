const {Router} = require("express")
const User = require("../../models/user")
const router = Router()
const History = require("../../models/history")

router.get("/getHistory", async (req,res) => {
    const {id} = req.query
    try{
        const requestedHistory = await History.find({userId: id})
        if(requestedHistory.length){
            res.status(200).send(requestedHistory)
        } else {
            res.status(400).send("Sorry, no History for this user")
        }
    }catch(err){
        console.log(err)
    }
})

module.exports= router