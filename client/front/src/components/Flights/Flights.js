import React from "react";
import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import "../styles/Flights.css";
// se usa info de momento

function Flights() {

  const flights = useSelector((state) => state.flights);

  return (
    <div className="flights-cont position-relative">
      <div className="flights-container-cards">
          <Paginado
            data={flights}
          />
      </div>
    </div>
  );
}

export default Flights;
