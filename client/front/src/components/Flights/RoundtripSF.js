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

import InfiniteScroll from 'react-infinite-scroll-component'
import scrollgif from '../../Images/scroll-down.gif'

// let number = 1

function RoundtripSF() {

  // global states
  let flights = useSelector((state) => state.secondFlighs);
  let allFlights = useSelector((state) => state.allFlights);
  let selectedFlight = useSelector((state) => state.flightDetail);

  // local states
  // const [orden, setOrden] = useState('')
  // const [currentPage, setCurrentPage] = useState(1)
  // const [flightsPerPage, setFlightsPerPage] = useState(5)
  // // vars
  // const indexLastFlight= currentPage * flightsPerPage;
  // const indexFirstFlight = indexLastFlight - flightsPerPage
  // const currentFlights = flights.slice(indexFirstFlight, indexLastFlight)

  // const paginado = (pageNumber) => {
  //     number = pageNumber
  //     setCurrentPage(pageNumber)
  // }

  // let pageNumbers = [];
  // for(let i = 1; i <= Math.ceil(flights.length/flightsPerPage); i++){
  //     pageNumbers.push(i)
  // }

  // functions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onSecondFlightRoute());
    console.log(selectedFlight)
    if (selectedFlight.length > 0) {
      dispatch(addFlightToCart(selectedFlight))
    }
  }, [dispatch, selectedFlight])

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  // const prevHandler = (e) => {
  //   e.preventDefault();
  //   if(number === pageNumbers[0]) return;
  //   number--
  //   let prevPage = number
  //   return paginado(prevPage)
  // }

  // const nextHandler = (e) => {
  //   e.preventDefault()
  //   if(number === pageNumbers.length) return;
  //   number++
  //   let nextPage = number
  //   return paginado(nextPage)
  // }

// -----------------------
let arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos
const LONGITUD_PEDAZOS = 10; // Partir en arreglo de 3
for (let i = 0; i <= flights.length; i += LONGITUD_PEDAZOS) {
  let pedazo = flights.slice(i, i + LONGITUD_PEDAZOS);
  arregloDeArreglos.push(pedazo);
}


const [length, setLength] = useState(1)
const [dataSource, setDataSource] = useState(arregloDeArreglos[0])
const [hasMore, setHasMore] = useState(true)
// console.log('dS',dataSource)
// setDataSource(arregloDeArreglos[length])

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
}, 800)
}




  return (
    <div className="d-flex">
      {/* <Filter paginado={paginado} number={number}/> */}
      <Filter dataSource={setDataSource} arregloDeArreglos={arregloDeArreglos} setLength={setLength} length={length} fetchMoreData={fetchMoreData} ds={dataSource}  setHasMore={setHasMore}/>
     
      {
        allFlights.length !== 0 ? 
        <div className="w-100">
          {
            flights.length !== 0 ? 
            <InfiniteScroll
            dataLength={dataSource === undefined ? arregloDeArreglos.length : dataSource.length}
            hasMore={ hasMore }
            next={ flights.length === 0 ? console.log('no flights') : fetchMoreData}
            loader={<div className="d-flex justify-content-center loader-scroll"><img className="scroll"  onClick={fetchMoreData}  src={scrollgif} /></div>}
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
            flights.length !==  0 ?
            dataSource === undefined ? '' :  dataSource.map((e,i) => {
              
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
                    onFlights={true}
                    onSecondFlight={true}
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
                                onSecondFlight={true}
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

export default RoundtripSF;