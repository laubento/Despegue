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
import CardPreguntas from "./CardPreguntas";
import { clearFlights } from "../../Redux/Actions";
import { clearCart } from "../../Redux/Actions";
import { clearAirportsName } from "../../Redux/Actions";
import { getFlights } from "../../Redux/Actions";
import { succesAlert } from "../../utils/alerts";
// se usa info de momento

function Home(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [cancel, setCancel] = useState('')
  const [seteo, setSeteo] = useState(false)
  let display = localStorage.getItem('display')
  let cartRespaldo = JSON.parse(localStorage.getItem('cartRespaldo'))
  let vuelos = undefined || null ? '' : JSON.parse(localStorage.getItem('detail'))
  let vuelo = vuelos ? vuelos.filter((e) => e.asistant === undefined) : null
  const busqueda = JSON.parse(localStorage.getItem('busqueda'))

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

  function reclamo(){
    setSeteo(false)
    succesAlert("En las proximas 72hs se contactaran con usted");
  }

  localStorage.setItem('onCart', false)


  const handlePromo = async (e, infoDep, infoArr) => {
    let flights = {
      adults: 1,
      arrivalPlace: infoArr,
      cabinClass: "Economy",
      children: 0,
      currency: "USD",
      departureDate: "2023-01-11",
      departurePlace: infoDep,
      infants: 0,
      returningDate: "2023-01-18",
      tripType: "roundtrip"
    }



    e.preventDefault();
    localStorage.setItem('busqueda', JSON.stringify(flights))
    dispatch(clearFlights())
    dispatch(getFlights(flights));
    if (flights.tripType === 'onewaytrip') {
        history.push('/flights');
    } else {
        history.push('/flights/roundtrip/firstFlight');
    }

    localStorage.setItem('tripType', flights.tripType)
    dispatch(clearCart())
    dispatch(clearAirportsName())
}

  useEffect(() => {
    localStorage.removeItem('flightsRespaldo')
  },[])

  return (
    <div>
      <FlightsSearch cancel={setCancel} />

      {/* Promociones */}
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
                    <button className="Promociones-PaisesBoton" onClick={(e) => {handlePromo(e, 'EZE', 'MEX')}}>
                      <img src={Mexico} className="d-block w-100 " alt="..." />
                    </button>
                  </div>
                  <div className="carousel-item">
                    <button className="Promociones-PaisesBoton" onClick={(e) => {handlePromo(e, 'EZE', 'BSB')}}>
                      <img src={Brasil} className="d-block w-100" alt="..." />
                    </button>
                  </div>
                  <div className="carousel-item">
                    <button className="Promociones-PaisesBoton" onClick={(e) => {handlePromo(e, 'EZE', 'ORY')}}>
                      <img src={Italia} className="d-block w-100 " alt="..." />
                    </button>
                  </div>
                  <div className="carousel-item ">
                    <button className="Promociones-PaisesBoton" onClick={(e) => {handlePromo(e, 'EZE', 'BOG')}}>
                      <img src={Colombia} className="d-block w-100 " alt="..." />
                    </button>
                  </div>
                  <div className="carousel-item">
                    <button className="Promociones-PaisesBoton" onClick={(e) => {handlePromo(e, 'EZE', 'SCL')}}>
                      <img src={Chile} className="d-block w-100 " alt="..." />
                    </button>
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

      {/* Preguntas */}
      <div className="mt-3">
        <div className="container" id="Preguntas">
          <h3>Preguntas frecuentes</h3>
          <CardPreguntas />
        </div>
      </div>

      {/* Notas */}
      <div className="container">
        <hr></hr>
        <div className="PromocionesArrepentimiento">
          <h6>Podés cancelar tus compras* realizadas de forma online o telefonica dentro de un plazo máximo de 10 días desde la fecha que realizaste la compra.</h6>
          <p>*Según Resolución 329/2020 ANAC no aplica para vuelos, se rigen por política de devolución informada en tu voucher</p>
          <button className="Promociones-Boton" onClick={(e) => {setSeteo(!seteo)}}>Boton de arrepentimiento</button>
          <div className="Promociones-ContainerInput">
            <div className="d-flex mt-3">
              {seteo ? <input placeholder="Numero de Telefono o EMAIL" className="form-control " type={"text"}/> : null} 
              {seteo ? <button onClick={reclamo} className="PromocionesBotonReclamo">Enviar</button> : null}
            </div>
            {seteo ? <p className="m-0">*Nuestros operadores se contactaran a la brevedad con usted, preocurar enviar solo una vez*</p>: null}
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="Promociones-Notas">
          <h4>Vuelos baratos, hoteles y alojamientos en oferta, paquetes turísticos y más</h4>
          <p>Despegue te propone las mejores ofertas y oportunidades para que viajes en serio sin gastar de más. Buscamos brindarte la mejor y más personalizada atención para que hagas de tus vacaciones lo único que deben ser: espectaculares Aprovechá nuestras oportunidades en vuelos baratos, promociones aéreas, hoteles, paquetes turísticos, alquiler de autos, actividades, cruceros y seguros de viaje. Llegamos a todo el planeta: Argentina, Brasil, Caribe, Estados Unidos, Europa y miles de destinos más. Empezá a disfrutar ahora de tu viaje comprando con el mejor precio y la mejor financiación en Despegue.</p>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Home;
