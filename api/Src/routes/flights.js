const { Router } = require("express");
const utils = require("./utils");
const router = Router();

// const flights = require('../API Mock/lessData.json')

router.get(
    "/oneWay",
    async (req, res) => {
        // const { stopOversCount, minPrice, maxPrice, maxDuration } = req.query;
        // console.log(stopOversCount);
        // console.log(minPrice);
        // console.log(maxPrice);
        // // console.log(maxDuration);

        try {
            const flights = await utils.getFlightsOneWay(req.body);
            let filteredFlights = flights;

            console.log(filteredFlights);
            if (stopOversCount) {
                console.log("gijfisahfuoashbufgh");
                filteredFlights = filteredFlights.filter((flight) => flight.stopoversCount === stopOversCount);
            }
            console.log(filteredFlights);
            if (minPrice && maxPrice) {
                console.log("mvbncxmbvnmczxbvnmcxb");
                filteredFlights = filteredFlights.filter((flight) => flight.price >= minPrice && flight.price <= maxPrice);
            }
            console.log(filteredFlights);
            if (maxDuration) {
                filteredFlights = filteredFlights.filter(
                    (flight) => flight.duration < maxDuration
                );
            }

            res.status(200).send(flights);
        } catch (error) {
            console.log(error);

            res.status(404).send({ error: error.response.data.message ? error.response.data.message : error});
        }
    }
);

router.get("/roundTrip", async (req, res) => {
    try {
        const flights = await utils.getFlightsRoundTrip(req.body);
        res.status(200).send(flights);
    } catch (error) {
        res.status(404).send({ error: error.response.data.message });
    }
});

module.exports = router;
