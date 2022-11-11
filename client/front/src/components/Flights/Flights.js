import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import Card from '../Card/Card'
import Loader from "../Loader/Loader.js";
import InfiniteScroll from 'react-infinite-scroll-component'
import "../styles/Flights.css";
import scrollgif from '../../Images/scroll-down.gif'
import { useHistory } from "react-router-dom";
import { getFlights } from "../../Redux/Actions.js";

// se usa info de momento

function Flights() {
  let flights = useSelector((state) => state.flights);
  const filteredFlights = useSelector((state) => state.filteredFlights)
  const history = useHistory()
  let allFlights = useSelector((state) => state.allFlights);
  let busqueda = JSON.parse(localStorage.getItem('busqueda'))
  const dispatch = useDispatch()
  if(allFlights.length > 0) {
    localStorage.setItem('on', true)
  }
  if(allFlights.length === 0){
    localStorage.setItem('on', false)
  }
  let on = localStorage.getItem('on')
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  // console.log(flights,'--', allFlights)
  const areThereFlights = useSelector((state) => state.areThereFlights)

  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [flightsPerPage, setFlightsPerPage] = useState(5)
  const indexLastFlight = currentPage * flightsPerPage;
  const indexFirstFlight = indexLastFlight - flightsPerPage
  const currentFlights = flights.slice(indexFirstFlight, indexLastFlight)

  if(filteredFlights.length && areThereFlights) flights = filteredFlights
  let arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos
  const LONGITUD_PEDAZOS = 10; // Partir en arreglo de 3
  for (let i = 0; i <= flights.length; i += LONGITUD_PEDAZOS) {
    let pedazo = flights.slice(i, i + LONGITUD_PEDAZOS);
    arregloDeArreglos.push(pedazo);
  }

  // const [firstPage, setFirstPage] = useState(arregloDeArreglos)
  const [length, setLength] = useState(0)
  const [dataSource, setDataSource] = useState([])
  const [hasMore, setHasMore] = useState(true)
  // console.log('dS',dataSource)
  // setDataSource(arregloDeArreglos[length])

  const fetchMoreData = () => {
    // console.log('hola')
    if (flights.length === 0) {
      return;
    }
    setTimeout(() => {
      // console.log('hola')
      console.log('entre fetchmoredata')

      if (length > arregloDeArreglos.length - 1) {
        console.log('entre fetchmoredata false')

        return setHasMore(false)
      } else {
        setHasMore(true)
      }

      setDataSource(() => dataSource.concat(arregloDeArreglos[length]))
      setLength(length + 1)
    }, 400)
  }

  useEffect(() => {
    
    if(on === 'false'){
      window.onbeforeunload = function() {
        console.log('hola')
    };
    return () => {
      localStorage.setItem('on', true)
      dispatch(getFlights(busqueda)) 
    };
    }

}, [history, busqueda, dispatch]);


//   window.onbeforeunload = function() {
//     return '¿Desea recargar la página web?';
// };
//   if(filteredFlights.length) allFlights = filteredFlights

  return (
    <div>

      {
        allFlights.length !== 0 ?
        <div className="d-flex" id="top">
        <Filter arregloDeArreglos={arregloDeArreglos} onFlights={true} onFirstFlight={false} onSecondFlight={false}
                ds={dataSource} dataSource={setDataSource} length={length} setLength={setLength} fetchMoreData={fetchMoreData} setHasMore={setHasMore}/>
          <div className="w-100">
            {
              flights.length !== 0 ?
                <InfiniteScroll
                  dataLength={dataSource === undefined ? arregloDeArreglos.length : dataSource.length}
                  hasMore={hasMore}
                  next={flights.length === 0 ? console.log('no flights') : fetchMoreData}
                  loader={<div className="d-flex justify-content-center loader-scroll"><img className="scroll" onClick={fetchMoreData} src={scrollgif} /></div>}
                  endMessage={
                    <div className="back-top-div d-flex justify-content-center mt-4">
                      <div className="d-flex flex-column">
                      <span className="text-center font-weight-bold fli-msg">No hay más vuelos con lo solicitado</span>
                      <div className="d-flex justify-content-center">
                      <a href="#top" className="back-top" >
                        <span className="fli-volver">👆↑ Volver 👆↑</span>
                      </a>
                      </div>

                      </div>
                    </div>
                  }
                >
                  <div>
                    {
                      flights.length !== 0 && areThereFlights &&
                        dataSource !== undefined ? dataSource.map((e, i) => {
                          return (
                            <div key={i} className='d-flex justify-content-center'>
                              <Card
                                id={e.id}
                                cabin={e.cabinClass}
                                departureName={e.departureAirportName}
                                arrivalName={e.arrivalAirportName}
                                departureCode={e.departureAirportCode}
                                arrivalCode={e.arrivalAirportCode}
                                segments={e.segments}
                                airlinesName={e.airlinesNames}
                                departureTime={e.departureTime}
                                arrivalTime={e.arrivalTime}
                                duration={e.duration}
                                stopoversCount={e.stopoversCount}
                                price={e.price}
                                going={e.going}
                                onFlights={true}
                                cart={false}
                              />
                            </div>
                          )

                        })
                        :
                        <h2 className="text-center mt-5">There are no flights with these characteristics</h2>

                    }
                  </div>
                </InfiniteScroll> : <h2 className="text-center mt-5">There are no flights with these characteristics</h2>

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

export default Flights;
