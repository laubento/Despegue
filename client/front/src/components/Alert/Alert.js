import React from "react";

const Alert = ({ alert, msg }) => {
  return (
    <div className="container m-0 p-0">
      <div className="card-div border-right border-left">
        <div className="text-center">
          <div className="card-title">
            <h2>Alert</h2>
            <span className="font-weight-bold">
              {msg ? msg : "Vuelo no especificado"}
            </span>
          </div>
          <div>
            <button className="btn-bd-primary">Try again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
