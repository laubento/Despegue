import axios from "axios";
export const GET_ALL_FLIGHTS = "GET_ALL_FLIGHTS";

export const getAllFlights = () => {
  return async (dispatch) => {
    let response = await axios.get("/flights");
    return dispatch({
      typeof: GET_ALL_FLIGHTS,
      payload: response.data,
    });
  };
};
