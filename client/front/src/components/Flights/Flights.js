import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import Card from '../Card/Card'
import Loader from "../Loader/Loader.js";
import InfiniteScroll from 'react-infinite-scroll-component'
import "../styles/Flights.css";
import scrollgif from '../../Images/scroll-down.gif'

// se usa info de momento

function Flights() {
  let flights = useSelector((state) => state.flights);

  let allFlights = useSelector((state) => state.allFlights);

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  // console.log(flights,'--', allFlights)
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [flightsPerPage, setFlightsPerPage] = useState(5)
  const indexLastFlight = currentPage * flightsPerPage;
  const indexFirstFlight = indexLastFlight - flightsPerPage
  const currentFlights = flights.slice(indexFirstFlight, indexLastFlight)

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
    }, 800)
  }


  console.log(dataSource)

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
                      <span className="text-center font-weight-bold">No hay más.</span>
                      <a href="#top" className="back-top" >
                        <span>Volver</span>
                      </a>
                    </div>
                  }
                >
                  <div>
                    {
                      flights.length !== 0 ?
                        dataSource === undefined ? '' : dataSource.map((e, i) => {

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
