import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import "../styles/Flights.css";

// se usa info de momento

function Flights() {
  let flights = useSelector((state) => state.flights);
  // let infofiltrada = useSelector(state => state.filteredFlights)
  // // console.log(infofiltrada)
  // if(infofiltrada.length > 0){
  //   flights = infofiltrada
  // }

  return (
    <div className="d-flex">
      <Filter />
      <div className="flights-cont position-relative ms-5">
        <div className="flights-container-cards">
          {flights !== 'Error' ?<Paginado
            data={flights}
          />: <h2>There are no flights with these characteristics</h2>}
        </div>
      </div>
    </div>
  );
}

export default Flights;
