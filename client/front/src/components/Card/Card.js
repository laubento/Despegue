import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { addFlightToCart, deleteFlight, filterFlightById, setAsistencias } from "../../Redux/Actions";
import '../styles/Card.css'
import Logo from "../../Images/Logo.png";

function Card({ id, airlinesName, departureTime, arrivalTime, duration, stopoversCount, price, going,
  hideButton, onFlights, onFirstFlight, onSecondFlight, cart, departureName, arrivalName, cabin, departureCode, arrivalCode }) {

  const dispatch = useDispatch();
  const flightDetail = useSelector((state) => state.flightDetail);
  const busqueda = JSON.parse(localStorage.getItem('busqueda'))
  const history = useHistory();
  let exactprice = Number(price)
  const handleClick = (e) => {

    dispatch(filterFlightById(id))
    if (onFlights || onSecondFlight) {
      return history.push('/flights/roundtrip/asistant');
    }

    if (onFirstFlight) {
      return history.push('/flights/roundtrip/secondFlight');
    }
  }
  const handleClickDetail = (e) => {
    console.log('handleClickdetail')
    dispatch(filterFlightById(id))
  }

  let cartRespaldo = JSON.parse(localStorage.getItem('cartRespaldo'))
  const handleDelete = (e) => {
    e.preventDefault();
    if (cartRespaldo !== null) {
      if (cartRespaldo.length > 1) {
        let flightsRestantes = cartRespaldo.filter(e => e.id !== id)
        localStorage.setItem('cartRespaldo', JSON.stringify(flightsRestantes))
      }
      if (cartRespaldo.length === 2) {
        let assistant = JSON.parse(localStorage.getItem('asistant'))
        assistant = null 
        localStorage.setItem('asistant', assistant)
        cartRespaldo.shift()
        cartRespaldo.shift()
        dispatch(setAsistencias(assistant))
        localStorage.setItem('cartRespaldo', JSON.stringify(cartRespaldo))
        swal('Carrito de compras vacío, vuelva a hacer su búsqueda.', '', 'error')
      }
    }
    dispatch(deleteFlight(id))
  }


  return (
    <div className="container Card-ContainerPrincipal">
      <div className="row">
        <div className="col-10">
          <div className="Card-Cabezara pt-1 mb-1">
            <h4 className="Card-IdaVuelta m-0">{(going === undefined || going === true) ? "➯IDA" : "➯VUELTA"}</h4>
            <div className="d-flex justify-content-center ms-1 Card-Cabezara">
              <h6 className="Card-NameAirport mb-0 me-2 ms-2">{busqueda.departureDate} ➯</h6>
              <h6 className="Card-NameAirport mb-0">{departureName[0]} -</h6>
              <h6 className="Card-NameAirport mb-0 ms-1">{arrivalName[0]}</h6>
            </div>
          </div>
          <hr className="m-0" />
          <div className="row Card-Row">
            <div className="Card-ContainerAerolinea col-3">
              <div className="Card-ContainerAerolinea2">
                <img src={Logo} />
                {
                  airlinesName.length > 1
                    ? <h3 className="Card-MoreAirlines">{airlinesName[0]}...<div className="Card-MoreDesplegable">{airlinesName.map(e => { return (<h3>{e}</h3>) })}</div></h3>
                    : <h3>{airlinesName.map(e => e).join('')}</h3>
                }
              </div>
              <p className="Card-Cabin">Clase: <b>{cabin}</b></p>
            </div>
            <div className="col-6 Card-info">
              <div className="Card-Info1">
                <h4>{departureTime}</h4>
                <h4><label>{departureCode}</label></h4>
              </div>
              <div className="Card-Info2">
                <div className="d-flex justify-content-center">
                  <p>Escalas: {stopoversCount}</p>
                </div>
                <hr className="m-0" />
                <p>Duracion: {duration}</p>
              </div>
              <div className="Card-Info1">
                <h4>{arrivalTime}</h4>
                <h4><label>{arrivalCode}</label></h4>
              </div>
            </div>
            <div className="col-3 Card-Detalles" >
              <Link to={`/flights/flightDetail/${id}`} style={{ textDecoration: 'none' }} className='card-link'>
                <button onClick={handleClickDetail} >Detalles</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-2 p-1 Card-Border">
          <div className="Card-Precio">
            <p>Precio total</p>
            <p>$<label>{price}</label></p>
          </div>
          <hr className="mb-1 mt-0"/>
          {cart === true ? <button className="Card-Borrar" onClick={handleDelete} >X</button> : ''}
          {
            going
              ?
              <Link to='/flights/roundtrip/secondFlight'>
                {hideButton ? null : <button onClick={handleClick} className="Card-Siguiente">Siguiente!</button>}
              </Link>
              :
              <Link to='/flights/roundtrip/asistant'>
                {hideButton ? null : <button onClick={handleClick} className="Card-Siguiente">Siguiente!</button>}
              </Link>
          }
        </div>
      </div>
    </div>

    // <div className="card-div row ">
    //   {
    //     (going === undefined || going === true)
    //       ? <div className="card-airline-box col">Ida</div>
    //       : <div className="card-airline-box col">Vuelta</div>
    //   }
    //   <div className="card-border-right col text-center">
    //     {
    //       airlinesName.length > 1 
    //       ? <div className="card-airline-box" >
    //           <h3 >{airlinesName.map(e => e).join('')}</h3>
    //         </div>
    //       : <div className="card-airline-box-one">
    //           <h3>{airlinesName.map(e => e).join('')}</h3>
    //         </div>
    //     }
    //   </div>
    //   <div className="col-2 text-center mt-2">
    //     <span className="font-weight-bold" >Salida</span>
    //     <br/>
    //     <span>{departureTime}</span>
    //   </div>
    //   <div className="col-2 text-center mt-2">
    //     <span className="font-weight-bold"> Llegada</span>
    //     <br/>
    //     <span className="mb-2">{arrivalTime}</span>
    //     <div className="mt-1">
    //       <Link to={`/flights/flightDetail/${id}`} style={{textDecoration:'none'}}>
    //         <button className="btn btn-md card-more-details" onClick={handleClickDetail}>Más detalles</button>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="col-2 text-center mt-2">
    //     <span className="font-weight-bold"> Duración</span>
    //     <br />
    //     <span>{duration}</span>
    //     <br />
    //     <span className="font-weight-bold">Escalas: {stopoversCount}</span>
    //   </div>
    //   <div className="col-2 container card-border-left card-price-box">
    //     {cart === true ? <button className="card-btn-delete" onClick={handleDelete} >X</button> : ''}
    //     <div className="div-price-btn mt-1">
    //       <span className="font-weight-bold text-success" >${price}</span>
    //     </div>
    //     <div className="card-div-price-btn"> 
    //     {
    //       going
    //         ?  <Link to='/flights/roundtrip/secondFlight'>
    //           {
    //             hideButton
    //               ? null
    //               : <button onClick={handleClick} className="card-btn">Siguiente!</button>
    //           }
    //           </Link>
    //         : <Link to='/flights/roundtrip/asistant'>
    //           {
    //             hideButton
    //               ? null
    //               : <button onClick={handleClick} className="card-btn">Siguiente!</button>
    //           }
    //           </Link>
    //     }
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;