import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import info from "../Data/data.js";
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import "../styles/Flights.css";

// se usa info de momento

function Flights() {
  let info = useSelector(state => state.flights)
  let infofiltrada = useSelector(state => state.filteredFlights)
  // console.log(infofiltrada)
  if(infofiltrada.length > 0){
    info = infofiltrada
  }

  return (
    <div className="d-flex">
      <Filter />
      <div className="flights-cont position-relative ms-5">
        <div className="flights-container-cards">
          <Paginado
            data={info}
          />
        </div>
      </div>
    </div>
  );
}

export default Flights;
