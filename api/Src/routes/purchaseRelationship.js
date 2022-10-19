const {Router} = require("express")
const User = require("../../models/user")
const History = require("../../models/history")
const router = Router()

router.post("/purchaseComplete", async (req, res) => {
    try{
    const {id} = req.body.user
    const flight = req.body.flight
    
    const history = await new History({
        destination: flight.arrivalAirportCode,
        scales: flight.segments,
        schedule: flight.departureTime + " | " + flight.arrivalTime ,
        exit: flight.departureAirportCode,
        type: flight.cabinClass,
        userId: _id,
        price: flight.price,
        flightId: flight.id

    })
    await history.save()
    const user = await User.find({"_id:":id}).populate("purchaseHistory")
    
    await user.save()
    res.status(200).send("Succesfull Saved in User History")
    
    }catch(err){console.log(err)}
})





module.exports = router

