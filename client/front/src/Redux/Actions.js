import axios from 'axios';

export const GET_FLIGHTS = "GET_FLIGHTS"
export const CLEAR_FLIGHTS = "CLEAR_FLIGHTS"
export const FILTER_FLIGHTS = "FILTER_FLIGHTS"
export const SEARCH_AIRPORT_FROM = "SEARCH_AIRPORT_FROM"
export const SEARCH_AIRPORT_TO = "SEARCH_AIRPORT_TO"
export const STORE_USER_INFO = "STORE_USER_INFO"

export function getFlights(flight){
    const tripType = flight.tripType;

    return async (dispatch) => {
        // var json = await axios.get(`https://api.flightapi.io/${tripType}/${apiKey}/${from}/${to}/${depart}/${adults}/${children}/${infants}/${cabinClass}/${currency}`)
        const flights = await axios.post(`/flights/${tripType}`, {flight})

        return dispatch({
            type: GET_FLIGHTS,
            payload: flights.data
        })
    }
}

export const clearFlights = () => {
    return function(dispatch){
        dispatch({
            type: CLEAR_FLIGHTS
        })
    }
}

// filters = estado de los botones
export const filterFlights = (filters) => {
    return function(dispatch){
        dispatch({
            type: FILTER_FLIGHTS,
            payload: filters
        })
    }
}

export function searchAirportFrom (name) {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/searchByName/from?nombre=${name}`)
        return dispatch({type: SEARCH_AIRPORT_FROM, payload: response.data})
    }
}


export function searchAirportTo (name) {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/searchByName/to?nombre=${name}`)
        return dispatch({type: SEARCH_AIRPORT_TO, payload: response.data})
    }
}

export const storeUserInfo = (user) => {
    return (dispatch) => {
        dispatch({
            type: STORE_USER_INFO,
            payload: user
        })
    }
}