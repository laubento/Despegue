import axios from 'axios';

export function getFlights(flight){
    const tripType = flight.tripType;
    const apiKey = '633df619b8f7611a58d22a5e';
    return async (dispatch) => {
        // var json = await axios.get(`https://api.flightapi.io/${tripType}/${apiKey}/${from}/${to}/${depart}/${adults}/${children}/${infants}/${cabinClass}/${currency}`)
        var json = await axios.get(`/flights/${tripType}`, {flight})

        console.log(json);
        return dispatch({
            type: 'GET_FLIGHTS',
            payload: json.data
        })
    }


}

