import React, { useEffect, useState } from "react";
import { addUserRole, listUsers, sendMailCompra } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
import FlightsSearch from "../FlightsSearch/FlightsSearch";
import { useDispatch, useSelector } from "react-redux";
import Mexico from '../../Images/Promociones/1.png'
import Brasil from '../../Images/Promociones/2.png'
import Italia from '../../Images/Promociones/3.png'
import Colombia from '../../Images/Promociones/4.png'
import Chile from '../../Images/Promociones/5.png'
import Portada from '../../Images/Promociones/Portada.png'
import Pago from '../../Images/Promociones/Pago.png'
import { Link } from "react-router-dom";
import '../Home/Promociones.css'
import Record from "../Record/Record";
import Logo from "../../Images/Logo.png";


// se usa info de momento

function Home(props) {
  const history = useHistory()
  const [cancel, setCancel] = useState('')
  let display = localStorage.getItem('display')
  let cartRespaldo = JSON.parse(localStorage.getItem('cartRespaldo'))
  let vuelos = undefined || null ? '' : JSON.parse(localStorage.getItem('detail'))
  let vuelo = vuelos ? vuelos.filter((e) => e.asistant === undefined) : null
  const busqueda = JSON.parse(localStorage.getItem('busqueda'))
  
  console.log(`vuelo --> ${vuelo}`)
  // useEffect(e => {
  //   dispatch(listUsers())
  // }, [dispatch])

  // let usersList = useSelector(state => state.listUsers)
  let user = useSelector((state) => state.user);
  const user2 = JSON.parse(window.localStorage.getItem("user"));

  if (!user && user2) user = user2;

  // let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
  // if (userRole) {
  //   dispatch(addUserRole(userRole))
  // }
  // console.log(userRole)

  const handleClickCompra = (e) => {
    e.preventDefault();
    display = false
    localStorage.setItem('display', display)
    return history.push('/flights/roundtrip/cart')
  }

  const handleClickCancelar = async (e) => {
    e.preventDefault();
    display = false;
    localStorage.setItem('display', display)
    localStorage.removeItem('detail')
    localStorage.removeItem('cartRespaldo')
    await swal('Compra cancelada!', '', 'success')
    history.push('/')
  }


  localStorage.setItem('onCart', false)

  return (
    <div>
        <FlightsSearch cancel={setCancel} />
      <div className="cart-home">
        {vuelos === null || vuelos === undefined ? <div><span className="text-center FlightSearch-errorsText font-weight-bold mt-2">{cancel}</span> </div> : user !== null && display !== false && (
          <div className={display === false || display === null ? "display-none-btn" : 'mt-4'}>
            <div className="d-flex justify-content-center">
              <button onClick={handleClickCompra} className='btn btn-success font-weight-bold m-1'>CONTINUA CON LA COMPRA  </button>
              <button onClick={handleClickCancelar} className='btn btn-danger font-weight-bold m-1' >CANCELAR COMPRA</button>
            </div>
            {cartRespaldo.length === 0 ? <div className="d-flex justify-content-center">
              <span className="home-cart-vacio">CARRITO VACÍO!</span>
            </div> : display === true || display !== null ? vuelo.length && vuelo.map(e => {
              return (
                <div className="d-flex justify-content-center">
      <div className="container Card-ContainerPrincipal">
      <div className="row">
        <div className="col-10">
          <div className="Card-Cabezara pt-1 mb-1">
            <h4 className="Card-IdaVuelta m-0">{(e.going === undefined || e.going === true) ? "➯IDA" : "➯VUELTA"}</h4>
            <div className="d-flex justify-content-center ms-1 Card-Cabezara">
              <h6 className="Card-NameAirport mb-0 me-2 ms-2">{busqueda.departureDate} ➯</h6>
              <h6 className="Card-NameAirport mb-0">{e.departureAirportName} -</h6>
              <h6 className="Card-NameAirport mb-0 ms-1">{e.arrivalAirportName}</h6>
            </div>
          </div>
          <hr className="m-0" />
          <div className="row Card-Row">
            <div className="Card-ContainerAerolinea col-3">
              <div className="Card-ContainerAerolinea2">
                <img src={Logo} />
                {
                  e.airlinesNames.length > 1
                  
                    ? <h3 className="Card-MoreAirlines">{e.airlinesNames[0]}...<div className="Card-MoreDesplegable">{e.airlinesNames.map(e => { return (<h3>{e}</h3>) })}</div></h3>
                    : <h3>{e.airlinesNames.map(e => e).join('')}</h3>
                }
              </div>
              <p className="Card-Cabin">Clase: <b>{e.cabin}</b></p>
            </div>
            <div className="col-6 Card-info">
              <div className="Card-Info1">
                <h4>{e.departureTime}</h4>
                <h4><label>{e.departureCode}</label></h4>
              </div>
              <div className="Card-Info2">
                <div className="d-flex justify-content-center">
                  <p>Escalas: {e.stopoversCount}</p>
                </div>
                <hr className="m-0" />
                <p>Duracion: {e.duration}</p>
              </div>
              <div className="Card-Info1">
                <h4>{e.arrivalTime}</h4>
                <h4><label>{e.arrivalCode}</label></h4>
              </div>
            </div>
            {/* <div className="col-3 Card-Detalles" >
              <Link to={`/flights/flightDetail/${id}`} style={{ textDecoration: 'none' }} className='card-link'>
                <button onClick={handleClickDetail} >Detalles</button>
              </Link>
            </div> */}
          </div>
        </div>

        <div className="col-2 p-1 Card-Border">
          <div className="Card-Precio">
            <p>Precio total</p>
            <p>$<label>{e.price}</label></p>
          </div>
          <hr className="mb-1 mt-0"/>
          {/* {cart === true ? <button className="Card-Borrar" onClick={handleDelete} >X</button> : ''}
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
          } */}
        </div>
      </div>
    </div>
    </div>
                // <div className="d-flex justify-content-center">
                //   <div className="card-div row ">
                //     {
                //       e.going === true
                //         ? <div className="card-airline-box col-1">Ida</div>
                //         : <div className="card-airline-box col-1">Vuelta</div>
                //     }
                //     <div className="card-border-right col text-center">
                //       {
                //         e.airlinesNames.length > 1
                //           ? <div className="card-airline-box" >
                //             <h3 >{e.airlinesNames.map(e => e).join('')}</h3>
                //           </div>
                //           : <div className="card-airline-box-one">
                //             <h3>{e.airlinesNames.map(e => e).join('')}</h3>
                //           </div>
                //       }
                //     </div>
                //     <div className="col-2 text-center mt-2">
                //       <span className="font-weight-bold" >Salida</span>
                //       <br />
                //       <span>{e.departureTime}</span>
                //     </div>
                //     <div className="col-2 text-center mt-2">
                //       <span className="font-weight-bold"> Llegada</span>
                //       <br />
                //       <span className="mb-2">{e.arrivalTime}</span>

                //     </div>
                //     <div className="col-2 text-center mt-2">
                //       <span className="font-weight-bold"> Duración</span>
                //       <br />
                //       <span>{e.duration}</span>
                //       <br />
                //       <span className="font-weight-bold">Escalas: {e.stopoversCount}</span>
                //     </div>
                //     <div className="col-2 container card-border-left card-price-box">
                //       <div className="div-price-btn mt-1">
                //         <span className="font-weight-bold text-success" >${e.price}</span>
                //       </div>
                //       <div className="card-div-price-btn">
                //       </div>
                //     </div>
                //   </div>
                // </div>
              )
            }) : ''}
          </div>)}


        {/* Promociones */}
      </div>
        <div className="Promociones-ContainerPrincipal">
          <div className="container-xl">
            <div className="row">
              <div className="col-3 p-2">
                <h2>TOP DESTINOS</h2>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active ">
                      <img src={Mexico} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={Brasil} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={Italia} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                      <img src={Colombia} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={Chile} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-9 p-2">
                <h2>Aprovechá nuestras promociones para planificar tu viaje.</h2>

                <div className="Promociones-containerPortada shadow">
                  <img src={Portada} />
                  <div className="p-2 Promociones-a">
                    <h4>Descubrí nuestras ofertas en los mejores destinos pagando en cuotas.</h4>
                    <Link to={'/ofertas'} className="Promociones-Link">Ofertas</Link>
                  </div>
                </div>
                <div className="Promociones-containerPago">
                  <img src={Pago} alt="pago" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
