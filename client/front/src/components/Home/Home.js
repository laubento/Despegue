import React from "react";
import { Link } from "react-router-dom";
import LogReg from "../Login/Formulario/LogReg";

// se usa info de momento

function Home() {
  return (
    <div>
      {/* <LogReg /> */}
      <Link to="/flights">
        <button>Flights</button>
      </Link>
    </div>
  );
}

export default Home;
