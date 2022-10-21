import React, { useEffect } from "react";
import { addUserRole, listUsers } from "../../Redux/Actions";
import { useHistory } from "react-router-dom"; 
import swal from 'sweetalert'
import FlightsSearch from "../FlightsSearch/FlightsSearch";
import { useDispatch, useSelector } from "react-redux";
// se usa info de momento

function Home(props) {
  let dispatch = useDispatch();
  const history = useHistory()
  const query = new URLSearchParams(props.location.search);
  let display = localStorage.getItem('display')
  const status = query.get('status')

  useEffect(e => {
    dispatch(listUsers())
  }, [dispatch])

  let usersList = useSelector(state => state.listUsers)
  let user = useSelector(state => state.user)

  let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
  if (userRole) {
    dispatch(addUserRole(userRole))
  }
  // console.log(userRole)
  const handleClick = (e) => {
    e.preventDefault();
    display = false
    localStorage.setItem('display', display)
    return history.push('/purchase')
  }
  return (
    <div className="p-4">
      <FlightsSearch />
      { user !== null && (
      <div className={display === false || display === null ? "display-none" : 'mt-4'}>
        <div className="d-flex justify-content-center">
        <button onClick ={ handleClick } className='btn btn-success font-weight-bold'>CONTINUA CON LA COMPRA  </button>
        </div>
        {/* {display === true || display !== null ? vuelo.length && vuelo.map(e => {
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
        }): ''} */}
        </div>)}
    </div>
  );
}

export default Home;
