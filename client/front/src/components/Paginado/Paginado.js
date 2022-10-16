import React from "react";
import { Link } from 'react-router-dom'
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
}

export default Paginado;

