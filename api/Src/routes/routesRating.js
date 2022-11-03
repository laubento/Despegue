const { Router } = require("express");
const router = Router()
const mongoose = require("mongoose");
const Rating = require("../../models/rating")
const users = require("../../models/user")


router.post("/ratingComprobation", async (req, res) => {
    try{
        console.log(req.body)
        const user = req.body
        const matchedEmail = await Rating.find({userEmail: user.email})
        if(matchedEmail.length){
            
            return res.status(200).send(true)
        } else return res.status(400).send(false)
        


    }catch(err){
        console.log(err)
    } 
})


router.post("/newRating", async (req,res) => {
    try {
        const {user, description, value} = req.body
        if(!user && !description && !value ){
            res.status(500).send("Missing Data")
        } else {
            const dbRating = await new Rating({
                userEmail: user.email,
                description: description,
                value: value,
            }).save()

        res.status(200).send(dbRating)
        }
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }


})

router.delete("/deleteRating", async (req,res) => {
    try{
        const {ratingId} = req.body
        const {user} = req.body
        if(!user.roles.includes("admin")){
            res.status(500).send("Your user Role is not admin")
        } else if(!ratingId)
        res.status(500).send("Missing ID")
        else {
               await Rating.remove({_id: ratingId})
               res.send("Succesfully removed Rating")
            }
        } catch(err){
            console.log(err)
    }
})

router.get("/getUserRating", async (req,res) => {
    let {userEmail} = req.query
    try{
        if(!userEmail){
            res.status(400).send("Missing Email")
        } else {
            let ratingData = await Rating.find({userEmail: userEmail})
            let addUserData = await Rating.aggregate([
                {
                    $lookup:{
                        from:"users",
                        localField:"userEmail",
                        foreignField:"email",
                        as:"userData"
                    }
                }
            ])
            
            res.status(200).send(ratingData.concat(addUserData))
        }
    }catch(err){
        console.log(err)
        res.status(500).send({message: err})
    }
})

router.get("/getAllRatings", async (req,res) => {
    try{
        // const allInDB = await Rating.find({})
        let addUserData = await Rating.aggregate([
            {
                $lookup:{
                    from:"users",
                    localField:"userEmail",
                    foreignField:"email",
                    as:"userData"
                }
            },
        ])

        res.status(200).send(addUserData)
    } catch(err){
        console.log(err)
        res.status(500).send({message: err})
    }
})

module.exports = router