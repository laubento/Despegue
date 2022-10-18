const { Router } = require("express");
const router = Router();
const User = require("../../models/user")

router.put("/", async (req, res) => {
    try{
        const updateUser = await User.updateOne({_id: req.body._id}, {$set: {name: req.body.name}})
        res.send(updateUser)
}   
    catch(err){console.log(err)}
})

module.exports = router