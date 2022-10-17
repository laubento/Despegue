import React, {useState} from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import Card from '../Card/Card'
import Loader from "../Loader/Loader.js";
import "../styles/Flights.css";

// se usa info de momento
let number = 1

function Flights() {
  let flights = useSelector((state) => state.flights);
  let allFlights = useSelector((state) => state.allFlights);
  let infofiltrada = useSelector((state) => state.filteredFlights);
  // console.log(infofiltrada)
  if (infofiltrada.length > 0) {
    flights = infofiltrada;
  }
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  console.log(flights,'--', allFlights)
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [flightsPerPage, setFlightsPerPage] = useState(5)
  const indexLastFlight= currentPage * flightsPerPage;
  const indexFirstFlight = indexLastFlight - flightsPerPage
  const currentFlights = flights.slice(indexFirstFlight, indexLastFlight)

  const paginado = (pageNumber) => {
      number = pageNumber
      setCurrentPage(pageNumber)
  }
  // console.log(currentPage)
      //seteo el prev and next acá, en el componente Paginado tuve problemas.
  // console.log('number', number)

  let pageNumbers = [];
  for(let i = 1; i <= Math.ceil(flights.length/flightsPerPage); i++){
      pageNumbers.push(i)
  }

  const prevHandler = (e) => {
    e.preventDefault()
    if(number === pageNumbers[0]) return;
    number--
    let prevPage = number
    return paginado(prevPage)
}
const nextHandler = (e) => {
    e.preventDefault()
    if(number === pageNumbers.length) return;
    number++
    let nextPage = number
  return paginado(nextPage)
}
  return (
    <div className="d-flex">
      <Filter paginado={paginado} number={number} />
  {  allFlights.length !== 0  ?  <div className="flights-cont">
        <div className="d-flex justify-content-center">
          {/* {flights.length === 0 && allFlights.length !== 0? <h2>No hay vuelos para esta búsqueda</h2> :  <Paginado paginado = {paginado} allFlights = { flights.length } flightsPerPage={flightsPerPage} prevHandler={prevHandler} nextHandler={nextHandler} /> } */}
          {flights !== 0 ?
          <Paginado paginado = {paginado} allFlights = { flights.length } flightsPerPage={flightsPerPage} prevHandler={prevHandler} nextHandler={nextHandler} />: <h2>There are no flights with these characteristics</h2>}
        </div>
        <div>
          {flights.length !== 0 ? <h4 className="text-center Flights-cp">{currentPage}</h4>  : ''}
        {
          flights.length !==  0 ? 
          currentFlights.map((e,i) => {
            return(
              <div key={i} className='d-flex justify-content-center'>
              <Card 
              airlinesName={e.airlinesNames}
              departureTime={e.departureTime}
              arrivalTime={e.arrivalTime}
              duration={e.duration}
              stopoversCount={e.stopoversCount}
              price={e.price}
              />
              </div>
            )})
        : 
        <h2>There are no flights with these characteristics</h2>
        }
        </div>
      </div> : <div className="flights-cont">
        <Loader />
       </div>  }

        
        
        
    </div>
  );
}

export default Flights;
