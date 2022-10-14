import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../Redux/Actions.js";
// import { useSelector } from "react-redux";
import Filter from "../Filter/Filter.js";
import Loader from "../Loader/Loader.js";
import Paginado from "../Paginado/Paginado";
import "../styles/Flights.css";

// se usa info de momento

function Flights() {
  let flights = useSelector((state) => state.flights);
  let infofiltrada = useSelector(state => state.filteredFlights)
  let loadState = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  console.log(loadState)
  // console.log(infofiltrada)
  if(infofiltrada.length > 0){
    flights = infofiltrada
  }

  useEffect(() => {
    dispatch(setLoader())
  })

  return (
    <div className="d-flex">
      <Filter />
      <div className="flights-cont position-relative ms-5">
        <div className="flights-container-cards">
          {loadState === true && (
            <div>
              <Loader/>
            </div>
          )}
          <Paginado
            data={flights}
          />
        </div>
      </div>
    </div>
  );
}

export default Flights;
