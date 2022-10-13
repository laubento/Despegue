import { GET_ALL_FLIGHTS } from "./Actions";

const initialState = {
  flights: [],
  allFlights: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_FLIGHTS:
      return {
        ...state,
        allFlights: action.payload,
      };
    case 'GET_FLIGHT':
      return{
          ...state,
          flights: action.payload
      }
    default:
      return state;
  }
}