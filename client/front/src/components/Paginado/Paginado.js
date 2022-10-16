<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
=======
import React from "react";
import { Link } from 'react-router-dom'
>>>>>>> feat/input-de-busqueda-aiport
import "../styles/Paginado.css";

function Paginado({ paginado, allFlights, flightsPerPage, prevHandler, nextHandler }) {
  let pageNumbers = [];
  for(let i = 1; i <= Math.ceil(allFlights/flightsPerPage); i++){
      pageNumbers.push(i)
  }

//   const prevHandler = (e) => {
//     e.preventDefault()
//     if(number === pageNumbers[0]) return;
//     number--
//     let prevPage = number
//     return paginado(prevPage)
// }

// const nextHandler = (e) => {
//     e.preventDefault()
//     if(number === pageNumbers.length) return;
//     number++
//     let nextPage = number
//   return paginado(nextPage)
// }

  return (
<<<<<<< HEAD
    <>
      <div className=" ">
        {currentItems.length !== 0 ? currentItems.map((e, i) => {
          return (
            <div key={i} className="p">
              <Card
                key={e.id}
                id={e.id}
                airlinesName={e.airlinesNames}
                departureTime={e.departureTime}
                arrivalTime={e.arrivalTime}
                duration={e.duration}
                stopoversCount={e.stopoversCount}
                price={e.price}
              />
            </div>
          );
        }): <Loader/>}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination position-absolute fs-4 top-40 start-50 translate-middle"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active fs-3 p-2"
      />
    </>
  );
=======
  <nav className="w-100 p-4 pag-cont"> 
    <ul className="pag-nav">
    <li className="flights-li" onClick={(e) => prevHandler(e) }>{'<'}</li>
      {pageNumbers && 
      pageNumbers.map((n,i) => {
         return (
          <li className="page-num " key = {i}>
              <Link className="pag-link" to={`/flights/${n}`} onClick={() => paginado(n)}>{n}</Link>
          </li>
          )
      })}
      <li className="flights-li" onClick={(e) => nextHandler(e) } >{'>'}</li>
      </ul>
  </nav>
)
>>>>>>> feat/input-de-busqueda-aiport
}

export default Paginado;

