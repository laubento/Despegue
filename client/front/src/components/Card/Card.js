import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addFlightToCart, filterFlightById } from "../../Redux/Actions";
import '../styles/Card.css'

function Card(  {id, airlinesName, departureTime, arrivalTime, duration, stopoversCount, price, going, 
                hideButton, onFlights, onFirstFlight, onSecondFlight}) {

  const dispatch = useDispatch();
  const flightDetail = useSelector((state) => state.flightDetail);
  const history = useHistory();
  let exactprice = Number(price)
  
  const handleClick = (e) => {

    dispatch(filterFlightById(id))
    if (onFlights || onSecondFlight) {
      return history.push('/flights/roundtrip/cart');
    }

    if (onFirstFlight) {
      return history.push('/flights/roundtrip/secondFlight');
    }
  }

  const handleClickDetail = (e) => {
    dispatch(filterFlightById(id))
  }

  return (
    <div className="card-div row ">
      {
        (going === undefined || going === true)
          ? <div className="card-airline-box col">Ida</div>
          : <div className="card-airline-box col">Vuelta</div>
      }
      <div className="card-border-right col text-center">
        {
          airlinesName.length > 1 
          ? <div className="card-airline-box" >
              <h3 >{airlinesName.map(e => e).join('')}</h3>
            </div>
          : <div className="card-airline-box-one">
              <h3>{airlinesName.map(e => e).join('')}</h3>
            </div>
        }
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold" >Salida</span>
        <br/>
        <span>{departureTime}</span>
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold"> Llegada</span>
        <br/>
        <span className="mb-2">{arrivalTime}</span>
        <div className="mt-1">
          <Link to={`/flights/flightDetail/${id}`} style={{textDecoration:'none'}}>
            <button className="btn btn-md card-more-details" onClick={handleClickDetail}>Más detalles</button>
          </Link>
        </div>
      </div>
      <div className="col-2 text-center mt-2">
        <span className="font-weight-bold"> Duración</span>
        <br />
        <span>{duration}</span>
        <br />
        <span className="font-weight-bold">Escalas: {stopoversCount}</span>
      </div>
      <div className="col-2 container card-border-left card-price-box">
        <div className="div-price-btn mt-1">
          <span className="font-weight-bold text-success" >${price}</span>
        </div>
        <div className="card-div-price-btn"> 
        {
          going
            ?  <Link to='/flights/roundtrip/secondFlight'>
              {
                hideButton
                  ? null
                  : <button onClick={handleClick} className="card-btn">Elegir!</button>
              }
              </Link>
            : <Link to='/flights/roundtrip/cart'>
              {
                hideButton
                  ? null
                  : <button onClick={handleClick} className="card-btn">Comprar!</button>
              }
              </Link>
        }
        </div>
      </div>
    </div>
  );
}

export default Card;