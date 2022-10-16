import { GET_FLIGHTS, FILTER_FLIGHTS, FILTER_FLIGHT_BY_ID } from "./Actions";
// import flightExample from '../components/CardDetail/flightExample'

const initialState = {
    // flights: flightExample,
    flights: [],
    allFlights: [],
    filteredFlights: [],
    flightDetail: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case GET_ALL_FLIGHTS:
        //   return {
        //     ...state,
        //     allFlights: action.payload,
        //   };
        case GET_FLIGHTS:
            return {
                ...state,
                flights: action.payload,
            };
        case FILTER_FLIGHTS:
            const { minPrice, maxPrice, maxDuration, stopOvers } =
                action.payload;

            let filteringFlights = state.flights.slice();

            if (stopOvers !== "default") {
                // console.log(stopOvers)
                stopOvers == 1 ?
                    filteringFlights = filteringFlights.filter(
                        (flight) => flight.stopoversCount === Number(stopOvers)
                    )
                    :
                    filteringFlights = filteringFlights.filter(
                        (flight) => flight.stopoversCount >= Number(stopOvers)
                    )
            }
            // console.log(minPrice,'-------', maxPrice)   
            if (minPrice !== "default" && maxPrice !== "default") {
                filteringFlights = filteringFlights.filter(
                    (flight) =>
                        Number(flight.price) >= minPrice && Number(flight.price) <= maxPrice
                );
            }
            if (maxDuration !== "default") {
                // console.log(maxDuration)
                filteringFlights = filteringFlights.filter(
                    (flight) => flight.duration.split('h')[0] <= maxDuration );
            }
            // console.log(filteringFlights)
            return {
                ...state,
                filteredFlights: filteringFlights,
            };
        case FILTER_FLIGHT_BY_ID:
            const a = state.flights;
            // console.log(`reducer - state flights ${a}`)
            const flight = a.filter(el => el.id === action.payload);
            return {
                ...state,
                flightDetail: flight
            }
        default:
            return state;
    }
}
