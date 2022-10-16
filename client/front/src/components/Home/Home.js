import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FlightsSearch from "../FlightsSearch/FlightsSearch";

// se usa info de momento

function Home({ user }) {
  return (
    <div className="p-4">
      <FlightsSearch />
    </div>
  );
}

export default Home;
