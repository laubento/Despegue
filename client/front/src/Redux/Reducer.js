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
                allFlights: action.payload,
            };
        case CLEAR_FLIGHTS:
            return {
                ...state,
                flights: []
            }
        case FILTER_FLIGHTS:
            const { minPrice, maxPrice, maxDuration,maxHour,minHour, stopOvers, order } =
                action.payload;

            let filteringFlights = state.allFlights.slice();
            // console.log(action.payload)
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
            if (minHour !== "default" && maxHour !== "default") {
                filteringFlights = filteringFlights.filter(
                    (flight) =>
                        Number(flight.departureTime.split(':')[0]) >= minHour && Number(flight.departureTime.split(':')[0]) <= maxHour
                );
            }
            if (maxDuration !== "default") {
                // console.log(maxDuration)
                filteringFlights = filteringFlights.filter(
                    (flight) => flight.duration.split('h')[0] <= maxDuration);
            }
            if (order === 'orderP') {
                filteringFlights = filteringFlights.sort((a, b) => {
                    return a.price - b.price
                })
            }
            if (order === 'orderD') {
                filteringFlights = filteringFlights.sort((a, b) => {
                    if(a.duration.split('h')[0] === b.duration.split('h')[0])  return a.duration.split('h')[1].split('m')[0] - b.duration.split('h')[1].split('m')[0]
                    else return a.duration.split('h')[0] - b.duration.split('h')[0]
                })
            }
            if (order === 'orderS') {
                filteringFlights = filteringFlights.sort((a, b) => {
                    return a.stopoversCount - b.stopoversCount
                })
            }
            if (filteringFlights.length === 0) {
                filteringFlights = 'Error'
            }
            return {
                ...state,
                flights: filteringFlights,
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
