const { Router } = require("express");
const utils = require("./utils");
const router = Router();

// const flights = require("../API Mock/data.json");
// const flights = require('../API Mock/lessData.json')

router.get("/oneWay", async (req, res) => {
    const { stopOversCount, minPrice, maxPrice, maxDuration } = req.query;

    const stopOversCountNumber = parseInt(stopOversCount);
    const minPriceNumber = parseInt(minPrice);
    const maxPriceNumber = parseInt(maxPrice);
    const maxDurationNumber = parseInt(maxDuration);

    try {
        const flights = await utils.getFlightsOneWay(req.body);
        let filteredFlights = flights;

        if (stopOversCount) {
            filteredFlights = filteredFlights.filter(
                (flight) => flight.stopoversCount === stopOversCountNumber
            );
        }
        if (minPrice && maxPrice) {
            filteredFlights = filteredFlights.filter(
                (flight) =>
                    flight.price >= minPriceNumber &&
                    flight.price <= maxPriceNumber
            );
        }
        if (maxDuration) {
            filteredFlights = filteredFlights.filter(
                (flight) => flight.duration < maxDurationNumber
            );
        }

        res.status(200).send(filteredFlights);
    } catch (error) {
        console.log(error);

        res.status(404).send({
            error: error.response.data.message
                ? error.response.data.message
                : error,
        });
    }
});

router.get("/roundTrip", async (req, res) => {
    try {
        const flights = await utils.getFlightsRoundTrip(req.body);
        res.status(200).send(flights);
    } catch (error) {
        res.status(404).send({ error: error.response.data.message });
    }
});

module.exports = router;
