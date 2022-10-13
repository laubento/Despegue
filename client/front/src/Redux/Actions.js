import axios from 'axios';

export function getFlights(flight){
    const tripType = flight.tripType;

    return async (dispatch) => {
        // var json = await axios.get(`https://api.flightapi.io/${tripType}/${apiKey}/${from}/${to}/${depart}/${adults}/${children}/${infants}/${cabinClass}/${currency}`)
        const flights = await axios.post(`http://localhost:3001/flights/${tripType}`, {flight})

        return dispatch({
            type: 'GET_FLIGHTS',
            payload: flights
        })
    }


}

