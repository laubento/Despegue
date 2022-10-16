const {Router} = require("express")
const User = require("../../models/user")
const router = Router()

router.post("/purchaseComplete", async (req, res) => {
    try{
    const {_id} = req.body.user
    const flightsData = req.body.flight
    
    const user = await User.findById(_id)
    user.historyPurchase.push(req.body.flight)
    await user.save()
    
    console.log(user)
    }catch(err){console.log(err)}
})





module.exports = router

