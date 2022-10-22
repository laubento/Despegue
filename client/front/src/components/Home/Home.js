import React, { useEffect } from "react";
import { addUserRole, listUsers, sendMailCompra } from "../../Redux/Actions";
import { useHistory } from "react-router-dom"; 
import swal from 'sweetalert'
import FlightsSearch from "../FlightsSearch/FlightsSearch";
import { useDispatch, useSelector } from "react-redux";
// se usa info de momento

function Home(props) {
  const history = useHistory()
  let display = localStorage.getItem('display')
  let vuelo = JSON.parse(localStorage.getItem('detail'))
  console.log(vuelo)
  // useEffect(e => {
  //   dispatch(listUsers())
  // }, [dispatch])

  // let usersList = useSelector(state => state.listUsers)
  let user = useSelector(state => state.user)

  // let userRole = usersList.length !== 0 && user ? usersList.find(e => e.email === user.email) : null
  // if (userRole) {
  //   dispatch(addUserRole(userRole))
  // }
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
        {display === true || display !== null ? vuelo.length && vuelo.map(e => {
          return (
            <div className="d-flex justify-content-center">
            <div className="card-div row ">
            {
              e.going === false
              ? <div className="card-airline-box col-1">Ida</div>
              : <div className="card-airline-box col-1">Vuelta</div>
            }
            {/* <div>{e.going}</div> */}
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
              {/* <div className="mt-1">
                <Link to={`/flights/flightDetail/${id}`} style={{textDecoration:'none'}}>
                  <button className="btn btn-md card-more-details" onClick={handleClick}>Más detalles</button>
                </Link>
              </div> */}
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
