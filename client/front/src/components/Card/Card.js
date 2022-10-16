import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.css'

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
      <div className="card-border-right col text-center">
        {airlinesName.length > 1 ? (
          <div className="card-airline-box" >
        <h3 className="card-font-size">{airlinesName.map(e => e).join('')}</h3>
          </div>
        ):
        (
        <div className="card-airline-box-one">
        <h3>{airlinesName.map(e => e).join('')}</h3>
          </div>
        )

        }
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold" >Departure</span>
        <br/>
        <span>{departureTime}</span>
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold"> Arrival</span>
        <br/>
        <span className="mb-2">{arrivalTime}</span>
        <div className="mt-1">
          <Link to='?' style={{textDecoration:'none'}}>
        <span className="card-more-details">More Details</span>
          </Link>
        </div>
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold"> Duration</span>
        <br />
        <span>{duration}</span>
        <br />
        <span className="font-weight-bold">Scales: {stopoversCount}</span>
      </div>
      <div className="col-2 container card-border-left card-price-box">
      <div className="div-price-btn mt-1">
      <span className="font-weight-bold text-success" >${price}</span>
      </div>
      <div className="card-div-price-btn">
      <button className="card-btn">Buy</button>
      </div>
      </div>
    </div>
  );
}

export default Card;
