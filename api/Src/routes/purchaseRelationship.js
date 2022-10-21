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
                    scales: e.segments.length ? e.segments.map((e) => {
                        return({
                            cabin: e.cabin,
                            arrival: e.arrivalDateTime.slice(0,10),
                            arrivalTime: e.arrivalDateTime.slice(11,16),
                            departure: e.departureDateTime.slice(0,10),
                            departureTime: e.departureDateTime.slice(11,16),
                            duration: e.durationMinutes,
                            arrivalAirport: e.arrivalAirportCode,
                            departureAirport: e.departureAirportCode,
                            airline: e.airlineCode
                        })
                    }) : [],
                    schedule: e.departureTime + " | " + e.arrivalTime,
                    exit: e.departureAirportCode,
                    type: e.cabinClass,
                    price: e.price,
                    flightId: e.id
                })
            })
            console.log(vuelos)
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
                scales: flight.segments.length ? flight.segments.map((e) => {
                        return({
                            cabin: e.cabin,
                            arrival: e.arrivalDateTime.slice(0,10),
                            arrivalTime: e.arrivalDateTime.slice(11,16),
                            departure: e.departureDateTime.slice(0,10),
                            departureTime: e.departureDateTime.slice(11,16),
                            duration: e.durationMinutes,
                            arrivalAirport: e.arrivalAirportCode,
                            departureAirport: e.departureAirportCode,
                            airline: e.airlineCode
                        })
                    }) : [],
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