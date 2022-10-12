const { Router } = require("express");
const router = Router();


router.get("/detail/:id", async (req, res) => {
    let { id } = req.params;


    try {// dac = departureAirportCode // aac = arrivalAirportCode // 
        let result = await axios.get(`https://api.flightapi.io/onewaytrip/6346eea92985d74fecfb407c/${dac}/${aac}/${departureDate}/1/0/0/${type}/USD`)

        let flight = result.legs.find(el => el.id === id);

        let detail = {
            id: flight.id,
            departureTime: flight.departureTime,
            arrivalTime: flight.arrivalTime,
            duration: flight.duration,
            departureAirportCode: flight.departureAirportCode,
            arrivalAirportCode: flight.arrivalAirportCode,
            stopoverCode: flight.stopoverCode,
            type,
        };
        
        return res.status(200).json(detail)
    } catch (err) {
        res.status(400).json({err})
    }
})

module.exports = router;