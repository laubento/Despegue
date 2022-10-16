import axios from "axios";
import React, { useEffect } from "react";
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
  // console.log(infofiltrada)
  if (infofiltrada.length > 0) {
    flights = infofiltrada;
  }
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  console.log(flights,'--', allFlights)
  return (
    <div className="d-flex">
      <Filter />
      <div className="flights-cont position-relative ms-5">
        <div className="flights-container-cards">
          {flights.length === 0 && allFlights.length !== 0? <h2>There are no flights with these characteristics</h2> : <Paginado data={flights} /> }
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Flights;
