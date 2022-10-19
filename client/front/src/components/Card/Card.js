import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterFlightById, getPayment, getPaymentInfo } from "../../Redux/Actions";
import '../styles/Card.css'

function Card({
  id,
  airlinesName,
  departureTime,
  arrivalTime,
  duration,
  stopoversCount,
  price
}) {
  const dispatch = useDispatch();
  let exactprice = Number(price)
  const payment = useSelector(state => state.getPayment)
  const handleClick = async (e) => {
    dispatch(filterFlightById(id))
    const infoPago = {
      body: {
        payer_email : "test_user_47008967@testuser.com",
        "purpose": "wallet_purchase",
            items:[
                {
                    title: airlinesName.map(e => e + ' ').join('') ,
                    description:'Description',
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id:"category123",
                    quantity: 1,
                    unit_price: exactprice
                }
            ],
            back_urls : {
                failure: "http://localhost:3000",
                success: "http://localhost:3000",
            },
            "payment_methods": {
              "excluded_payment_types": [
                  {
                      "id": "ticket"
                  }
              ],
              "installments": 12
          },
            notification_url: "https://www.your-site.com/ipn"
      }
    }
    await dispatch(getPayment(infoPago))
    await localStorage.setItem('infoCompra', JSON.stringify(payment))
  }

  console.log(price)
  return (
    <div className="card-div row ">
      <div className="card-border-right col text-center">
        {airlinesName.length > 1 ? (
          <div className="card-airline-box" >
        <h3 >{airlinesName.map(e => e).join('')}</h3>
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
            <button className="btn btn-md card-more-details" onClick={handleClick}>Más detalles</button>
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
      <Link to='/purchase'>
        <button onClick={handleClick} className="card-btn">Comprar!</button>
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Card;
