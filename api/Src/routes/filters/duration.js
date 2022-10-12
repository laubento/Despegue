const {Router} = require('express');
const router = Router()

const data = require('../../API Mock/data.json')

router.post('/', (req, res) =>{
    const {maxDuration} = req.body

    const filteredFlights = data.filter((flight) => flight.duration < maxDuration)

    res.status(200).send(filteredFlights)
})

module.exports = router