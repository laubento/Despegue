import React from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import "../styles/Flights.css";

// se usa info de momento

function Flights() {
  let flights = useSelector((state) => state.flights);
  let allFlights = useSelector((state) => state.allFlights);
  let infofiltrada = useSelector((state) => state.filteredFlights);
  if (infofiltrada.length > 0) {
    flights = infofiltrada;
  }
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  return (
    <div className="d-flex">
      <Filter />
      <div className="flights-cont position-relative ms-5">
        <div className="flights-container-cards">
          {flights.length === 0 && allFlights.length !== 0? <h2>No hay vuelos para esta búsqueda</h2> : <Paginado data={flights} /> }
        </div>
      </div>
    </div>
  );
}

export default Flights;
