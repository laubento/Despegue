import axios from 'axios';

export const GET_FLIGHTS = "GET_FLIGHTS"
export const CLEAR_FLIGHTS = "CLEAR_FLIGHTS"
export const FILTER_FLIGHTS = "FILTER_FLIGHTS"
export const SET_LOADER = "SET_LOADER"

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

export const setLoader = () => {
    return function (dispatch){
        dispatch({type: SET_LOADER})
    }
}