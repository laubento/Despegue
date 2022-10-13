import React from "react";
import { Link } from "react-router-dom";

// se usa info de momento

function Home() {
  return (
    <div>
      <Link to="/flights">
        <button>Flights</button>
      </Link>
    </div>
  );
}

export default Home;
