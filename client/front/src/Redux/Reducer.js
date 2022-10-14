import { GET_FLIGHTS, FILTER_FLIGHTS, CLEAR_FLIGHTS,SEARCH_AIRPORT_FROM, SEARCH_AIRPORT_TO } from "./Actions";

const initialState = {
    flights: [],
    allFlights: [],
    filteredFlights: [],
    airportsFrom: [],
    airportsTo: []
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
        case CLEAR_FLIGHTS:
            return{
                ...state,
                flights: []
            }
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
        case SEARCH_AIRPORT_FROM:

        return {
            ...state,
            airportsFrom: action.payload
        }

        case SEARCH_AIRPORT_TO:

        return {
            ...state,
            airportsTo: action.payload
        }

        default:
            return state;
    }
}
