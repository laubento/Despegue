import { GET_FLIGHTS, FILTER_FLIGHTS, FILTER_FLIGHT_BY_ID, CLEAR_FLIGHTS, SEARCH_AIRPORT_FROM, SEARCH_AIRPORT_TO, STORE_USER_INFO, BUY_FLIGHTS, GET_ROUNDTRIP_FF, GET_ROUNDTRIP_SF, ADD_FLIGHT_TO_CART, SET_FF_TRUE, SET_SF_TRUE, USERS_LIST, OFFERS_LIST, ADD_USER_ROLE, GET_HISTORY } from "./Actions";
import roundTripExample from "./roundTripExapmle";

const initialState = {
    allFlights: [],
    flights: [],
    firstFlights: [],
    allFirstFlights: [],
    secondFlighs: [],
    allSecondFlighs: [],
    onFirstFlightRoute: false,
    onSecondFlightRoute: false,
    flightDetail: [],
    airportsFrom: [],
    airportsTo: [],
    flightsToBuy: [],
    flightsCart: [],
    getPayment: [],
    getPaymentInfo: [],
    user: null,
    listUsers: [],
    offersList: [],
    history: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FLIGHTS:
            return {
                ...state,
                // flights: roundTripExample,
                // allFlights: roundTripExample,
                flights: action.payload,
                allFlights: action.payload
            };
        case CLEAR_FLIGHTS:
            return {
                ...state,
                flights: []
            }
        case FILTER_FLIGHTS:
            const { minPrice, maxPrice, maxDuration, maxHour, minHour, stopOvers, order, findAirline } =
                action.payload;

            let filteringFlights;

            // roundtrip - me quedo con los vuelos de ida o vuelta dependiendo en que ruta del front estoy
            if (state.onFirstFlightRoute) {
                filteringFlights = state.allFirstFlights.slice();
            } else if (state.onSecondFlightRoute){
                filteringFlights = state.allSecondFlighs.slice();
            } else {
                filteringFlights = state.allFlights.slice();
            }
            
            // logica de filtros
            if (stopOvers !== "default") {
                if (stopOvers == 0) {
                    filteringFlights = filteringFlights.filter(
                        (flight) => flight.stopoversCount === Number(stopOvers)
                    )
                } else stopOvers == 1 ?
                    filteringFlights = filteringFlights.filter(
                        (flight) => flight.stopoversCount === Number(stopOvers)
                    )
                    :
                    filteringFlights = filteringFlights.filter(
                        (flight) => flight.stopoversCount >= Number(stopOvers)
                    )
            }
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
                    if (a.duration.split('h')[0] === b.duration.split('h')[0]) return a.duration.split('h')[1].split('m')[0] - b.duration.split('h')[1].split('m')[0]
                    else return a.duration.split('h')[0] - b.duration.split('h')[0]
                })
            }
            if (order === 'orderS') {
                filteringFlights = filteringFlights.sort((a, b) => {
                    return a.stopoversCount - b.stopoversCount
                })
            }
            if (findAirline.type === 'find') {
                filteringFlights = filteringFlights.filter(e =>
                    e.airlinesNames.find(e => e.toLowerCase().includes(findAirline.payload))
                )
            }
            if(state.onSecondFlightRoute){
                return {
                    ...state,
                    secondFlighs: filteringFlights
                }
            }else if(state.onFirstFlightRoute){
                return {
                    ...state,
                firstFlights: filteringFlights
            }
            }
            return {
                ...state,
                flights: filteringFlights,
            };
        case FILTER_FLIGHT_BY_ID:
            const a = state.flights;
            const flight = a.filter(el => el.id === action.payload);
            return {
                ...state,
                flightDetail: flight
            }
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
        case STORE_USER_INFO:
            return {
                ...state, 
                user: action.payload
            }
        case BUY_FLIGHTS:
            return {
                ...state,
                flightsToBuy: action.payload
            }
        case USERS_LIST:
            // console.log(action.payload)
            return {
                ...state,
                listUsers: action.payload
            }
        case OFFERS_LIST:
            return {
                ...state,
                offersList: action.payload
            }
        case ADD_USER_ROLE:
            return{
                ...state,
                user: action.payload
            }
        case "GET_PAYMENT": 
            return{
                ...state,
                getPayment: [action.payload]
            }
        case  "GET_PAYMENT_INFO":
            return {
                ...state,
                getPaymentInfo: [...state.getPaymentInfo, action.payload]
            }
        case GET_ROUNDTRIP_FF:
            const b = state.allFlights.filter(el => el.going);
            return{
                ...state,
                firstFlights: b,
                allFirstFlights: b
            }
        case GET_ROUNDTRIP_SF:
            const c = state.allFlights.filter(el => !el.going);
            return{
                ...state,
                secondFlighs: c,
                allSecondFlighs: c
            }
        case ADD_FLIGHT_TO_CART:
            return{
                ...state,
                flightsCart: [...state.flightsCart, action.payload]
            }
        case SET_FF_TRUE:
            return{
                ...state,
                onFirstFlightRoute: action.payload,
                onSecondFlightRoute: !action.payload
            }
        case SET_SF_TRUE:
            return{
                ...state,
                onFirstFlightRoute: !action.payload,
                onSecondFlightRoute: action.payload
            }

        case GET_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        default:
            return state;
    }
}
