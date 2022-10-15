import React from "react";
import { Link } from "react-router-dom";
import FlightsSearch from "../FlightsSearch/FlightsSearch";

// se usa info de momento

function Home({ user }) {
  return (
    <div>
      <h1>ASDASDASD</h1>
      <Link to="/flights">
        <button>Flights</button>
      </Link>
      <FlightsSearch />
    </div>
  );
}

export default Home;
