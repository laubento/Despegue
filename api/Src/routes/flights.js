const {Router} = require('express')
const utils = require('./utils')
const router = Router()

router.get('/oneWay', async(req, res) => {
    try {
        const flights = await utils.getFlightsOneWay(req.body)
        console.log(flights);
        res.status(200).send(flights)
    } catch (error) {
        res.status(404).send({error: error.response.data.message})
    }
})

router.get('/roundTrip', async(req, res) => {
    try {
        const flights = await utils.getFlightsRoundTrip(req.body)
        res.status(200).send(flights)
    } catch (error) {
        res.status(404).send({error: error.response.data.message})
    }
})

module.exports = router