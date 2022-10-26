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
export const CLEAR_FLIGHT_DETAIL = 'CLEAR_FLIGHT_DETAIL';
export const CREATE_OFFERS = 'CREATE_OFFERS';
export const HISTORY_LIST = 'HISTORY_LIST';
export const DELETE_FLIGHT = 'DELETE_FLIGHT'

export function getFlights(flight) {
    // localStorage.setItem('record', JSON.stringify(flight));
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
    return function (dispatch) {
        dispatch({
            type: CLEAR_FLIGHTS
        })
    }
}

// filters = estado de los botones
export const filterFlights = (filters) => {
    return function (dispatch) {
        dispatch({
            type: FILTER_FLIGHTS,
            payload: filters
        })
    }
}

export function filterFlightById(id) {
    return function (dispatch) {
        dispatch({
            type: FILTER_FLIGHT_BY_ID,
            payload: id
        })
    }
}

export function searchAirportFrom(name) {
    return async function (dispatch) {
        try {
            let response = await axios.get(`/searchByName/from?nombre=${name}`)
            return dispatch({ type: SEARCH_AIRPORT_FROM, payload: response.data })
        } catch (error) {
            return dispatch({type: SEARCH_AIRPORT_FROM, payload: error.message})
        }

    }
}


export function searchAirportTo(name) {
    return async function (dispatch) {
        try {
            let response = await axios.get(`/searchByName/to?nombre=${name}`)
            return dispatch({ type: SEARCH_AIRPORT_TO, payload: response.data })  
        } catch (error) {
            return dispatch({type: SEARCH_AIRPORT_TO, payload: error.message})
        }

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
    return function (dispatch) {
        dispatch({
            type: BUY_FLIGHTS,
            payload: flights
        })
    }
}


export const storePurchase = (user, flight) => {
    return async function () {
        await axios.post(`/purchaseComplete`)
    }
}

export function listUsers() {
    return async function (dispatch) {
        let response = await axios.get(`/admin/users`)
        let obj = response.data.map((e) => {
            let userName;
            if(e.lastname){
                userName = `${e.firstName} ${e.lastname}`
            } else {
                userName = `${e.firstName}`
            }
            return ({
                name: userName,
                email: e.email,
                id: e._id,
                roles: e.roles,
                active: e.active,
                banned: e.banned,
                membership: e.membership,
            })
        })
        return dispatch({ type: USERS_LIST, payload: obj })
    }
}

export const updateUser = (user) => {
    return async function () {
        await axios.put(`/admin/userupdate`, { user })
    }
}

export const deleteOffer = (offer) => {
    // console.log(offer)
    return async function () {
        await axios.put(`/admin/offers/delete`, offer)
    }
}

export function listOffers() {
    return async function (dispatch) {
        let response = await axios.get(`/admin/offers/getoffers`)
        return dispatch({ type: OFFERS_LIST, payload: response.data })
    }
}

export const offersCreate = (offer) => {
    
    return async function (dispatch) {
        await axios.post(`/admin/offers/`, offer )
        return dispatch({ type: CREATE_OFFERS, payload: offer })
    }
}

export function getHistory(id) {
    return async function (dispatch) {
        let response = await axios.get(`/users/getHistory?id=${id}`)
        return dispatch({ type: GET_HISTORY, payload: response.data })
    }
}

export const updateOffer = (offer) => {
    return async function () {
        await axios.put(`/admin/offers/offer`, { offer })
    }
}

export function listHistory() {
    return async function (dispatch) {
        let response = await axios.get(`/admin/history/`)
        return dispatch({ type: HISTORY_LIST, payload: response.data })
    }
}

// export const addUserRole = (user) => {
//     return function(dispatch){
//         dispatch({
//             type: ADD_USER_ROLE,
//             payload: user
//         })
//     }
// }

export const getPayment = (body) => {
    // console.log(body)
    return async function (dispatch) {
        const response = await axios.post(`/mercadopago/payment`, body)
        return dispatch({ type: "GET_PAYMENT", payload: response.data })
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

export const addFlightToCart = (flightDetail) => {
    return {
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

export const onSecondFlightRoute = () => {
    return {
        type: SET_SF_TRUE,
        payload: true
    }
}


export const sendMailCompra = (id, idPago) => {
    return async function (dispatch){
        console.log(id)
       let response =  await axios.post(`/sendmailpago/${id}/${idPago}`)
       return dispatch({type: "SEND_MAIL_COMPRA", payload:response.data })
    }
}

export const clearFlightDetail = () => {
    return{
        type: CLEAR_FLIGHT_DETAIL
    }
}


export const getoffers = () => {
    
}

export const deleteFlight = (id) => {
    return{
        type:DELETE_FLIGHT,
        payload: id
    }
 };

export const clearCart = () => {
    return{
        type: "CLEAR_CART"
    }
}