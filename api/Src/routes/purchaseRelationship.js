const { Router } = require("express")
const User = require("../../models/user")
const History = require("../../models/history")
const router = Router()
const mongoose = require("mongoose")
const e = require("express")

router.post("/purchaseComplete", async (req, res) => {
    try {
        const { id } = req.body.user
        const flight = req.body.flight
        // const extras = req.body.asistant

        if (Array.isArray(flight)) {
            let vuelos = flight.map((e) => {
                return ({
                    destination: e.arrivalAirportCode,
                    scales: e.segments,
                    schedule: e.departureTime + " | " + e.arrivalTime,
                    exit: e.departureAirportCode,
                    type: e.cabinClass,
                    price: e.price,
                    flightId: e.id
                })
            })

            const history = new History({
                package: vuelos,
                userId: id
            })
            await history.save()
            const user = await User.find({ "_id:": id }).populate("purchaseHistory")
            res.status(200).send("Succesfull Saved in User History")
        }else{
            let vuelos = [{
                destination: flight.arrivalAirportCode,
                scales: flight.segments,
                schedule: flight.departureTime + " | " + flight.arrivalTime,
                exit: flight.departureAirportCode,
                type: flight.cabinClass,
                price: flight.price,
                flightId: flight.id
            }]

            const history = new History({
                package: vuelos,
                userId: id
            })
            await history.save()
            const user = await User.find({ "_id:": id }).populate("purchaseHistory")
            res.status(200).send("Succesfull Saved in User History")
        }
    } catch (err) { console.log(err) }
})



module.exports = router;