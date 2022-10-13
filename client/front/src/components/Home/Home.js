import React from "react";
import { Link } from "react-router-dom";
import FlightsSearch from "../FlightsSearch/FlightsSearch";

// se usa info de momento

function Home() {
  return (
    <div>
      <Link to="/flights">
        <button>Flights</button>
      </Link>
      <FlightsSearch />
    </div>
  );
}

export default Home;
