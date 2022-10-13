import React from "react";

const Alert = ({ alert, msg }) => {
  return (
    <div className="card-div ">
      <div className="border-right border-left col text-center">
        <div className="card-title">
          <h2>Alert</h2>
          <span className="font-weight-bold">
            {msg ? msg : "Vuelo no especificado"}
          </span>
        </div>
        <div>
          <button>Try again</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
