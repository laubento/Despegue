import React from "react";
import { useHistory } from "react-router-dom";
import FlightsSearch from "../FlightsSearch/FlightsSearch";
import swal from 'sweetalert'
import { useSelector } from "react-redux";
// se usa info de momento

function Home(props) {
  // searchParams.get("__firebase_request_key")
  const history = useHistory()
  const query = new URLSearchParams(props.location.search);
  const user = useSelector(state => state.user)
  let display = localStorage.getItem('display')
  const status = query.get('status')
  //binarymode
  let vuelo = JSON.parse(localStorage.getItem('detail'))
  if(status === 'approved' ) {
  swal('Felicidades!', 'Has realizado una compra.', 'success')
    history.push('/')
    //info del vuelo
    let vuelo = JSON.parse(localStorage.getItem('detail'))
    // en items esta la info de los vuelos!
    //guardar base de datos
    console.log(vuelo)
   localStorage.clear('sinLog')

  }

  if(status === 'null') {
  swal('Algo ha salido mal!', 'Presiona el botón para volver a la página.', 'error')
    history.push('/')
    // si el pago sale mal no guardo nada y borro lo que se guardo en local storage!
    localStorage.clear('payment')
  }
  const handleClick = (e) => {
    e.preventDefault();
    display = false
    localStorage.setItem('display', display)
    return history.push('/purchase')
  }
  console.log(display)
  // localStorage.clear('sinLog')
  return (
    <div className="p-4">
      <FlightsSearch />
      { user !== null && (
      <div className={display === false || display === null ? "display-none" : 'mt-4'}>
        <div className="d-flex justify-content-center">
        <button onClick ={ handleClick } className='btn btn-success font-weight-bold'>CONTINUA CON LA COMPRA  </button>
        </div>
        {display === true || display !== null ? vuelo.length && vuelo.map(e => {
          return (
            <div className="d-flex justify-content-center ">
              <div className="flex-column bg-success mt-3 p-4 rounded"> 
              <h1>{e.airlinesNames.map(e => e + ' ').join('')}</h1>
              <h2>Origen: {e.departureAirportCode}</h2>
              <h2>Destino: {e.arrivalAirportCode}</h2>
              <h2>Precio: {e.price}</h2>
              <h4>{e.cabinClass}</h4>
              <h5>Horario de salida: {e.departureTime}</h5>
              <h5>Horario de llegada: {e.arrivalTime}</h5>
              </div>
            </div>
          )
        }): ''}
        </div>)}
    </div>
  );
}

export default Home;
