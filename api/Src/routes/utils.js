const axios = require('axios');
const API_KEY = process.env.API_KEY || "635f2a695f6de60cc4d48b6a"

async function getFlightsOneWay({ departurePlace, arrivalPlace, departureDate, returningDate, adults, childern, infants, cabinClass, currency }) {
    const data = await axios
        .get(
            `https://api.flightapi.io/onewaytrip/${API_KEY}/${departurePlace}/${arrivalPlace}/${departureDate}/${adults}/${childern}/${infants}/${cabinClass}/${currency}`
        )
        .then((response) => response.data)

    const flights = data.legs.map((flight) => {
        return {
            id: flight.id.split(":").slice(1, -1).join("-"),
            departureAirportCode: flight.departureAirportCode,
            departureAirportName: data.airports
                .map((airport) =>
                    flight.departureAirportCode === airport.code
                        ? airport.name
                        : null
                    )
                .filter((a) => a !== null),
            departureTime: flight.departureTime,
            arrivalAirportCode: flight.arrivalAirportCode,
            arrivalAirportName: data.airports
            .map((airport) =>
                flight.arrivalAirportCode === airport.code
                    ? airport.name
                    : null
                )
            .filter((a) => a !== null),
            arrivalTime: flight.arrivalTime,
            duration: flight.duration,
            airlinesNames: data.airlines
                .map((airline) =>
                    flight.airlineCodes.includes(airline.code)
                        ? airline.name
                        : null
                )
                .filter((a) => a !== null),
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
            stopoversCount: flight.stopoversCount,
            stopoverAirportCodes: flight.stopoverAirportCodes,
            segments: flight.segments.map((segment) => {
                return{
                    ...segment,
                    departureAirportName: data.airports.map((airport) => segment.departureAirportCode === airport.code
                                                                    ? airport.name
                                                                    : null
                                                            )
                                                            .filter((a) => a !== null),
                    arrivalAirportName: data.airports.map((airport) => segment.arrivalAirportCode === airport.code
                                                                            ? airport.name
                                                                            : null
                                                        )
                                                        .filter((a) => a !== null)
                }
            })
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
            departureAirportCode: flight.departureAirportCode,
            departureAirportName: data.airports
            .map((airport) =>
                flight.departureAirportCode === airport.code
                    ? airport.name
                    : null
                )
            .filter((a) => a !== null),
            departureTime: flight.departureTime,
            arrivalAirportCode: flight.arrivalAirportCode,
            arrivalAirportName: data.airports
            .map((airport) =>
                flight.arrivalAirportCode === airport.code
                    ? airport.name
                    : null
                )
            .filter((a) => a !== null),
            arrivalTime: flight.arrivalTime,
            duration: flight.duration,
            airlinesNames: data.airlines
                .map((airline) =>
                    flight.airlineCodes.includes(airline.code)
                        ? airline.name
                        : null
                )
                .filter((a) => a !== null),
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
            stopoversCount: flight.stopoversCount,
            stopoverAirportCodes: flight.stopoverAirportCodes,
            segments: flight.segments.map((segment) => {
                return{
                    ...segment,
                    departureAirportName: data.airports.map((airport) => segment.departureAirportCode === airport.code
                                                                    ? airport.name
                                                                    : null
                                                            )
                                                            .filter((a) => a !== null),
                    arrivalAirportName: data.airports.map((airport) => segment.arrivalAirportCode === airport.code
                                                                            ? airport.name
                                                                            : null
                                                        )
                                                        .filter((a) => a !== null)
                }
            })
        };
    });
    return flights;
}

module.exports = {
    getFlightsOneWay,
    getFlightsRoundTrip
}