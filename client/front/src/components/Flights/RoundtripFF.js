// config
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// components & functions
import Filter from "../Filter/Filter.js";
import Paginado from "../Paginado/Paginado";
import Card from '../Card/Card'
import Loader from "../Loader/Loader.js";
import { getRoundTripFF, getRoundTripSF, onFirstFlightRoute } from "../../Redux/Actions.js";
// styles
import "../styles/Flights.css";
import InfiniteScroll from 'react-infinite-scroll-component'
import scrollgif from '../../Images/scroll-down.gif'


// let number = 1

function RoundtripFF() {

  // global states
  let apiResponse = useSelector((state) => state.allFlights);
  let flights = useSelector((state) => state.firstFlights);
  let allFlights = useSelector((state) => state.allFlights);


  // functions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoundTripFF())
    dispatch(getRoundTripSF())
    dispatch(onFirstFlightRoute());
  }, [dispatch, apiResponse])

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };


// --------------
let arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos
    const LONGITUD_PEDAZOS = 10; // Partir en arreglo de 3
    for (let i = 0; i <= flights.length; i += LONGITUD_PEDAZOS) {
	    let pedazo = flights.slice(i, i + LONGITUD_PEDAZOS);
	    arregloDeArreglos.push(pedazo);
}

const [length, setLength] = useState(0)
const [dataSource, setDataSource] = useState([])
const [hasMore, setHasMore] = useState(true)

const fetchMoreData = () => {
  // console.log('hola')
  if(flights.length === 0){
    return;
  }
  setTimeout(() => {
      // console.log('hola')
      console.log('entre fetchmoredata')

      if(length > arregloDeArreglos.length -1){
      console.log('entre fetchmoredata false')

          return setHasMore(false)
      }else{
        setHasMore(true)
      }

     setDataSource(() => dataSource.concat(arregloDeArreglos[length]))
     setLength(length + 1)
  }, 400)
}

console.log('ds',dataSource)
console.log('aa', arregloDeArreglos)


  return (
    <div>
      {
        allFlights.length !== 0 ? 
        <div className="d-flex">
        <Filter dataSource={setDataSource} arregloDeArreglos={arregloDeArreglos} setLength={setLength} length={length} fetchMoreData={fetchMoreData} ds={dataSource}  setHasMore={setHasMore}/>
        <div className="w-100">
          {
            flights.length !== 0 ? 
            <InfiniteScroll
            dataLength={dataSource === undefined ? arregloDeArreglos.length : dataSource.length}
            hasMore={ hasMore }
            next={ flights.length === 0 ? console.log('no flights') : fetchMoreData}
            loader={<div className="d-flex justify-content-center loader-scroll"><img  className="scroll" onClick={fetchMoreData}  src={scrollgif} /></div>}
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
            flights.length !==  0 ?
            dataSource === undefined ? '' :  dataSource.map((e,i) => {
              
                return(
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
                    onFirstFlight={true}
                    cart={false}
                  />
                  </div>
                )

              })
             :
          <h2 className="text-center mt-5">There are no flights with these characteristics</h2>
             
            }
          </div>
        </InfiniteScroll> :<h2 className="text-center mt-5">There are no flights with these characteristics</h2>

          }

          </div>
          </div>
          : <div className="flights-cont">
          <Loader />
         </div>
      }
        {/* {  
          allFlights.length !== 0  
          ?  <div className="flights-cont">
                <div className="d-flex justify-content-center">
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
                <div className="Card-ContainerCard-Flights">
                  {
                    flights.length !==  0 
                    ? currentFlights.map((e,i) => {
                      console.log(e)
                        return(
                            <div key={i} className='d-flex justify-content-center'>
                              <Card 
                                cabin={e.cabinClass}
                                departureName={e.departureAirportName}
                                arrivalName={e.arrivalAirportName}
                                departureCode={e.departureAirportCode}
                                arrivalCode={e.arrivalAirportCode}
                                id={e.id}
                                segments={e.segments}
                                airlinesName={e.airlinesNames}
                                departureTime={e.departureTime}
                                arrivalTime={e.arrivalTime}
                                duration={e.duration}
                                stopoversCount={e.stopoversCount}
                                price={e.price}
                                going={e.going}
                                onFirstFlight={true}
                                cart={false}
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
          } */}
    </div>
  );
}

export default RoundtripFF;
