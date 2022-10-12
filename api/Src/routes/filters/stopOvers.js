const {Router} = require('express');
const router = Router()

const data = require('../../API Mock/data.json')

router.post('/', (req, res) => {
    const {stopOvers} = req.body

    const filteredFlights = data.filter((flight) => flight.stopoversCount === stopOvers)

    res.status(200).send(filteredFlights) 
})

module.exports = router