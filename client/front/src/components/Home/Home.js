import React, { useEffect, useState } from "react";
import { addUserRole, listUsers, sendMailCompra } from "../../Redux/Actions";
import { useHistory } from "react-router-dom"; 
import swal from 'sweetalert'
import FlightsSearch from "../FlightsSearch/FlightsSearch";
import { useDispatch, useSelector } from "react-redux";
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
    localStorage.removeItem('cartRespaldo')
    localStorage.removeItem('detail')
    localStorage.removeItem('init_point')
   await swal('Compra cancelada!', '', 'success')
    window.location.reload(true)
  }


  
  return (
    <div className="p-4">
      <FlightsSearch cancel={setCancel} />

      {vuelo === null || vuelo === undefined ? <div className="d-flex justify-content-center"><span className="text-center FlightSearch-errorsText font-weight-bold mt-2">{cancel}</span> </div> : user !== null && display !== false && (
      <div className={display === false || display === null ? "display-none-btn" : 'mt-4'}>
        <div className="d-flex justify-content-center">
        <button onClick ={ handleClickCompra } className='btn btn-success font-weight-bold'>CONTINUA CON LA COMPRA  </button>
        <button onClick={ handleClickCancelar } className='btn btn-danger font-weight-bold' >CANCELAR COMPRA</button>
        </div>
        {display === true || display !== null ?   vuelo.length && vuelo.map(e => {
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
              <br/>
              <span>{e.departureTime}</span>
            </div>
            <div className="col-2 text-center mt-2">
              <span className="font-weight-bold"> Llegada</span>
              <br/>
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
        }): ''}
        </div>)}
       
    </div>
  );
}

export default Home;
