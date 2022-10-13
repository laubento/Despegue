import React from "react";

const Alert = ({ alert, msg }) => {
  return (
    <div className="container-fluid user-select-none">
      <div className="card-div border-right border-left">
        <div className="text-center">
          <div className="card-title">
            <h2>Alert</h2>
            <span className="font-weight-bold">
              {msg ? msg : "Vuelo no especificado"}
            </span>
          </div>
          <button className="">Try again</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
