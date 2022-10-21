import axios from 'axios';

export const GET_FLIGHTS = "GET_FLIGHTS";
export const CLEAR_FLIGHTS = "CLEAR_FLIGHTS";
export const FILTER_FLIGHTS = "FILTER_FLIGHTS";
export const FILTER_FLIGHT_BY_ID = "FILTER_FLIGHT_BY_ID";
export const SEARCH_AIRPORT_FROM = "SEARCH_AIRPORT_FROM";
export const SEARCH_AIRPORT_TO = "SEARCH_AIRPORT_TO";
export const STORE_USER_INFO = "STORE_USER_INFO";
export const BUY_FLIGHTS = "BUY_FLIGHTS";
export const GET_ROUNDTRIP_FF = 'GET_ROUNDTRIP_FF';
export const GET_ROUNDTRIP_SF = 'GET_ROUNDTRIP_SF';
export const ADD_FLIGHT_TO_CART = 'ADD_FLIGHT_TO_CART';
export const SET_FF_TRUE = 'SET_FF_TRUE';
export const SET_SF_TRUE = 'SET_SF_TRUE';
export const USERS_LIST = "USERS_LIST"
export const OFFERS_LIST = "OFFERS_LIST"
export const ADD_USER_ROLE = "ADD_USER_ROLE"
export const GET_HISTORY = "GET_HISTORY"

 
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


export const storePurchase = (user, flight) => {
    return async function(){
        await axios.post(`/purchaseComplete`)
    }
}
 
export function listUsers () {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/admin/users`)
        return dispatch({type: USERS_LIST, payload: response.data})
    }
}

export const updateUser = (user) => {
    return async function(){
        await axios.put(`http://localhost:3001/admin/userupdate`,{user})
    }
}

export function listOffers () {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/admin/offers/getoffers`)
        return dispatch({type: OFFERS_LIST, payload: response.data})
    }
}

export const offersCreate = (offer) => {
    return async function(){
        await axios.post(`http://localhost:3001/admin/offers`,{offer})
    }
}

export function getHistory(id){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/users/getHistory?id=${id}`)
        return dispatch({type: GET_HISTORY, payload: response.data})
    }
}

export const updateOffer = (offer) => {
    return async function(){
        await axios.put(`http://localhost:3001/admin/offers/offer`,{offer})
    }
}

export const addUserRole = (user) => {
    return function(dispatch){
        dispatch({
            type: ADD_USER_ROLE,
            payload: user
        })
    }
}

export const getPayment = (body) => {
    // console.log(body)
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/mercadopago/payment`, body)
        return dispatch({type: "GET_PAYMENT", payload: response.data })
    }
}

export const getRoundTripFF = () => {
    return {
        type: GET_ROUNDTRIP_FF
    }
}

export const getRoundTripSF = () => {
    return {
        type: GET_ROUNDTRIP_SF
    }
}
export const onSecondFlightRoute = () => {
    return {
        type: SET_SF_TRUE,
        payload: true
    }
}



export const addFlightToCart = (flightDetail) => {
    return{
        type: ADD_FLIGHT_TO_CART,
        payload: flightDetail[0]
    }
}

export const onFirstFlightRoute = () => {
    return {
        type: SET_FF_TRUE,
        payload: true
    }
}
