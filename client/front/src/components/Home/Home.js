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
