import axios from 'axios';

export const GET_FLIGHTS = "GET_FLIGHTS"
export const CLEAR_FLIGHTS = "CLEAR_FLIGHTS"
export const FILTER_FLIGHTS = "FILTER_FLIGHTS"
export const FILTER_FLIGHT_BY_ID = "FILTER_FLIGHT_BY_ID"
export const SEARCH_AIRPORT_FROM = "SEARCH_AIRPORT_FROM"
export const SEARCH_AIRPORT_TO = "SEARCH_AIRPORT_TO"
export const STORE_USER_INFO = "STORE_USER_INFO"
export const BUY_FLIGHTS = "BUY_FLIGHTS"
export const GET_USER_HISTORY = "GET_USER_HISTORY"
 
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

export function filterFlightById(id){
    return function(dispatch){
        dispatch({
            type: FILTER_FLIGHT_BY_ID,
            payload: id
        })
    }
}

export function searchAirportFrom (name) {
    return async function(dispatch){
        let response = await axios.get(`/searchByName/from?nombre=${name}`)
        return dispatch({type: SEARCH_AIRPORT_FROM, payload: response.data})
    }
}


export function searchAirportTo (name) {
    return async function(dispatch){
        let response = await axios.get(`/searchByName/to?nombre=${name}`)
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

export const storeFlightsToBuy = (flights) => {
    return function(dispatch){
        dispatch({
            type: BUY_FLIGHTS,
            payload: flights
        })
    }
}

export const getUserHistory = (userId) => {
    return async function(dispatch){
        let route = await axios.get(`http://localhost:3001/users/getHistory?id=${userId}`)
        return dispatch(
                {
                    type: GET_USER_HISTORY,
                    payload: route.data
                }
            )
        
    }
}

export const storePurchase = (user, flight) => {
    return async function(){
        await axios.post(`/purchaseComplete`)
    }
}