import React from "react";
import { Link } from "react-router-dom";
import './styles/Card.css'

function Card({
  airlinesName,
  departureTime,
  arrivalTime,
  duration,
  stopoversCount,
  price,
}) {
  return (
    <div className="card-div row ">
      <div className="border-right col text-center">
      <div className="airline-box" >
      <h3 className="">{airlinesName}</h3>
      </div>
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold" >Arrival</span>
        <br/>
        <span>{arrivalTime}</span>
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold"> Departure</span>
        <br/>
        <span className="mb-2">{departureTime}</span>
        <div className="mt-1">
          <Link to='?' style={{textDecoration:'none'}}>
        <span className="more-details">More Details</span>
          </Link>
        </div>
      </div>
      <div className="col-2 text-center mt-2">
      <span className="font-weight-bold"> Duration</span>
        <br/>
        <span>{duration}</span>
        <br/>
      <span className="font-weight-bold">Scales: {stopoversCount}</span> 
      </div>
      <div className="col-2 container border-left price-box">
      <div className="div-price-btn mt-1">
      <span className="font-weight-bold text-success" >${price}</span>
      </div>
      <div className="div-price-btn">
      <button>Buy</button>
      
      </div>
      </div>
      {/* <div className="mb-3" style={{ width: "940px" }}>
        <div className="div-grid">
        <div className="div-title">
        <h5 className="card-title">{airlinesName}</h5>
        </div>
              <span>Departure: {departureTime}</span>
              <h4>Stopovers:{stopoversCount}</h4>
              <h3>Duration: {duration}</h3>
              <h3>Arrival: {arrivalTime}</h3>
              <h5>${price}</h5>
     </div>
      </div> */}
    </div>
  );
}

export default Card;
