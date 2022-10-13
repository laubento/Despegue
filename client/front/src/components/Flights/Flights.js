import React from "react";
import info from "../Data/data.js";
import Paginado from "../Paginado/Paginado";
import "../styles/Flights.css";
// se usa info de momento

function Flights() {

  return (
    <div className="flights-cont position-relative">
      <div className="flights-container-cards">
          <Paginado
            data={info}
          />
      </div>
    </div>
  );
}

export default Flights;
