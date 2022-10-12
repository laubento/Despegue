const axios = require('axios');
const API_KEY = "6346ec1e305b47e49ad6a38d"

async function getFlightsOneWay({ departurePlace, arrivalPlace, departureDate, returningDate, adults, childern, infants, cabinClass, currency }) {
    const data = await axios
        .get(
            `https://api.flightapi.io/onewaytrip/${API_KEY}/${departurePlace}/${arrivalPlace}/${departureDate}/${adults}/${childern}/${infants}/${cabinClass}/${currency}`
        )
        .then((response) => response.data)

    const flights = data.legs.map((flight) => {
        return {
            id: flight.id.split(":").slice(1, -1).join("-"),
            departureTime: flight.departureTime,
            arrivalTime: flight.arrivalTime,
            duration: flight.duration,
            airlinesNames: data.airlines
                .map((airline) =>
                    flight.airlineCodes.includes(airline.code)
                        ? airline.name
                        : null
                )
                .filter((a) => a !== null),
            stopoversCount: flight.stopoversCount,
            price: data.fares
                .map((fare) =>
                    fare.tripId.split(":")[1] ===
                        flight.id.split(":").slice(1, -1).join("-")
                        ? fare.price.totalAmount
                        : null
                )
                .filter((a) => a !== null)
                .toString()
                .split(",")[0],
            cabinClass,
        };
    });
    return flights;
}

async function getFlightsRoundTrip({ departurePlace, arrivalPlace, departureDate, returningDate, adults, childern, infants, cabinClass, currency }) {
    const data = await axios
        .get(
            `https://api.flightapi.io/roundtrip/${API_KEY}/${departurePlace}/${arrivalPlace}/${departureDate}/${returningDate}/${adults}/${childern}/${infants}/${cabinClass}/${currency}`
        )
        .then((response) => response.data)

    const flights = data.legs.map((flight) => {
        return {
            id: flight.id.split(":").slice(1, -1).join("-"),
            departureTime: flight.departureTime,
            arrivalTime: flight.arrivalTime,
            duration: flight.duration,
            airlinesNames: data.airlines
                .map((airline) =>
                    flight.airlineCodes.includes(airline.code)
                        ? airline.name
                        : null
                )
                .filter((a) => a !== null),
            stopoversCount: flight.stopoversCount,
            going:
                flight.id.split(":")[0] === `${departurePlace}-${arrivalPlace}` ? true : false,
            returning:
                flight.id.split(":")[0] === `${arrivalPlace}-${departurePlace}` ? true : false,
            tripId: data.trips
                .map((trip) => (trip.legIds[0] === flight.id ? trip.code : null))
                .filter((a) => a !== null),
            price: data.fares
                .map((fare) =>
                    fare.tripId.includes(
                        flight.id.split(":").slice(1, -1).join("-")
                    )
                        ? fare.price.totalAmount
                        : null
                )
                .filter((a) => a !== null)
                .toString()
                .split(",")[0],
            cabinClass,
        };
    });
    return flights;
}

module.exports = {
    getFlightsOneWay,
    getFlightsRoundTrip
}