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
// se usa info de momento

function Home(props) {
  const history = useHistory()
  const [cancel, setCancel] = useState('')
  let display = localStorage.getItem('display')
  let vuelo = undefined || null ? '' : JSON.parse(localStorage.getItem('detail'))
  console.log(vuelo)
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
    return history.push('/purchase')
  }

  const handleClickCancelar = async (e) => {
    e.preventDefault();
    display = false;
    localStorage.setItem('display', display)
    localStorage.removeItem('detail')
    await swal('Compra cancelada!', '', 'success')
    history.push('/')
  }


  localStorage.setItem('onCart', false)

  return (
    <div>

      <div className="p-4">
        <FlightsSearch cancel={setCancel} />

        {vuelo === null || vuelo === undefined ? <div className="d-flex justify-content-center"><span className="text-center FlightSearch-errorsText font-weight-bold mt-2">{cancel}</span> </div> : user !== null && display !== false && (
          <div className={display === false || display === null ? "display-none-btn" : 'mt-4'}>
            <div className="d-flex justify-content-center">
              <button onClick={handleClickCompra} className='btn btn-success font-weight-bold'>CONTINUA CON LA COMPRA  </button>
              <button onClick={handleClickCancelar} className='btn btn-danger font-weight-bold' >CANCELAR COMPRA</button>
            </div>
            {display === true || display !== null ? vuelo.length && vuelo.map(e => {
              return (
                <div className="d-flex justify-content-center">
                  <div className="card-div row ">
                    {
                      e.going === true
                        ? <div className="card-airline-box col-1">Ida</div>
                        : <div className="card-airline-box col-1">Vuelta</div>
                    }
                    <div className="card-border-right col text-center">
                      {
                        e.airlinesNames.length > 1
                          ? <div className="card-airline-box" >
                            <h3 >{e.airlinesNames.map(e => e).join('')}</h3>
                          </div>
                          : <div className="card-airline-box-one">
                            <h3>{e.airlinesNames.map(e => e).join('')}</h3>
                          </div>
                      }
                    </div>
                    <div className="col-2 text-center mt-2">
                      <span className="font-weight-bold" >Salida</span>
                      <br />
                      <span>{e.departureTime}</span>
                    </div>
                    <div className="col-2 text-center mt-2">
                      <span className="font-weight-bold"> Llegada</span>
                      <br />
                      <span className="mb-2">{e.arrivalTime}</span>

                    </div>
                    <div className="col-2 text-center mt-2">
                      <span className="font-weight-bold"> Duración</span>
                      <br />
                      <span>{e.duration}</span>
                      <br />
                      <span className="font-weight-bold">Escalas: {e.stopoversCount}</span>
                    </div>
                    <div className="col-2 container card-border-left card-price-box">
                      <div className="div-price-btn mt-1">
                        <span className="font-weight-bold text-success" >${e.price}</span>
                      </div>
                      <div className="card-div-price-btn">
                      </div>
                    </div>
                  </div>
                </div>
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
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active ">
                      <img src={Mexico} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={Brasil} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={Italia} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item ">
                      <img src={Colombia} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={Chile} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
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
