// config
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// components & functions
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import Card from '../Card/Card'
import Loader from "../Loader/Loader.js";
import { addFlightToCart, onSecondFlightRoute } from "../../Redux/Actions.js";
// styles
import "../styles/Flights.css";


let number = 1

function RoundtripSF() {

  // global states
  let flights = useSelector((state) => state.secondFlighs);
  let allFlights = useSelector((state) => state.allFlights);
  let selectedFlight = useSelector((state) => state.flightDetail);

  // local states
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [flightsPerPage, setFlightsPerPage] = useState(5)
  // vars
  const indexLastFlight= currentPage * flightsPerPage;
  const indexFirstFlight = indexLastFlight - flightsPerPage
  const currentFlights = flights.slice(indexFirstFlight, indexLastFlight)

  const paginado = (pageNumber) => {
      number = pageNumber
      setCurrentPage(pageNumber)
  }

  let pageNumbers = [];
  for(let i = 1; i <= Math.ceil(flights.length/flightsPerPage); i++){
      pageNumbers.push(i)
  }

  // functions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onSecondFlightRoute());
    dispatch(addFlightToCart(selectedFlight))
  }, [dispatch, selectedFlight])

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  const prevHandler = (e) => {
    e.preventDefault();
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
      <Filter paginado={paginado} number={number}/>
        {  
          allFlights.length !== 0  
          ?  <div className="flights-cont">
                <div className="d-flex justify-content-center">
                  {/* {flights.length === 0 && allFlights.length !== 0? <h2>No hay vuelos para esta búsqueda</h2> :  <Paginado paginado = {paginado} allFlights = { flights.length } flightsPerPage={flightsPerPage} prevHandler={prevHandler} nextHandler={nextHandler} /> } */}
                  {
                    flights !== 0 
                    ? <Paginado 
                        currentPage={currentPage} 
                        paginado = {paginado} 
                        allFlights = { flights.length } 
                        flightsPerPage={flightsPerPage} 
                        prevHandler={prevHandler} 
                        nextHandler={nextHandler}
                      />
                    : <h2>No hay vuelos con estas características</h2>
                  }
                </div>
                <div>
                  {
                    flights.length !==  0 
                    ? currentFlights.map((e,i) => {
                        return(
                            <div key={i} className='d-flex justify-content-center'>
                              <Card 
                                id={e.id}
                                segments={e.segments}
                                airlinesName={e.airlinesNames}
                                departureTime={e.departureTime}
                                arrivalTime={e.arrivalTime}
                                duration={e.duration}
                                stopoversCount={e.stopoversCount}
                                price={e.price}
                                going={e.going}
                              />
                            </div>
                          )})
                    : <h2>No hay vuelos con estas características</h2>
                  }     
                </div>
              </div>
            : <div className="flights-cont">
                <Loader />
              </div>  
          }
    </div>
  );
}

export default RoundtripSF;
