import React from "react";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";
// se usa info de momento

function Home() {
  return (
    <div>
      <Link to="/flights">
        <button>Flights</button>
      </Link>
      <Alert />
    </div>
  );
}

export default Home;
