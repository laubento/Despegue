import React from "react";
import { Link } from 'react-router-dom'
import "../styles/Paginado.css";

function Paginado({currentPage, paginado, allFlights, flightsPerPage, prevHandler, nextHandler }) {
  let pageNumbers = [];
  for(let i = 1; i <= Math.ceil(allFlights/flightsPerPage); i++){
      pageNumbers.push(i)
  }


  return (
    <div>

    {
      pageNumbers.length === 0 ? '' :
      <nav className="w-100 p-4 pag-cont"> 
      <ul className="pag-nav">
        {allFlights !== 0 && <li className={currentPage === 1 ? "display-none" : "flights-li"} onClick={(e) => prevHandler(e) }>{'<'}</li> }
        <div className="d-flex justify-content-around pag-pages">
        <li className={ currentPage === 1 ? "display-none" :"page-num first-page"} onClick={() => paginado(1)}>{pageNumbers[0]}</li>
        <li className={pageNumbers.length === 1 ? "page-only-one" :"page-num current-page"} >
          {currentPage}
        </li>
        <li className={ currentPage === pageNumbers[pageNumbers.length - 1] ? "display-none" : "page-num last-page"} onClick={() => paginado(pageNumbers[pageNumbers.length - 1])} >{pageNumbers[pageNumbers.length - 1]}</li>
        </div>
        {allFlights !== 0 && <li className={currentPage === pageNumbers[pageNumbers.length - 1] ? "display-none" : "flights-li"} onClick={(e) => nextHandler(e) } >{'>'}</li> }
        </ul>
    </nav>
    }
    </div>
  
)
}

export default Paginado;














// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import Card from "../Card/Card";
// import Loader from "../Loader/Loader";
// import "../styles/Paginado.css";

// function Paginado({ data }) {
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(data.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(data.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, data]);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % data.length;
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <div className=" ">
//         {currentItems.length !== 0 ? currentItems.map((e, i) => {
//           return (
//             <div key={i} className="p">
//               <Card
//                 key={e.id}
//                 id={e.id}
//                 airlinesName={e.airlinesNames}
//                 departureTime={e.departureTime}
//                 arrivalTime={e.arrivalTime}
//                 duration={e.duration}
//                 stopoversCount={e.stopoversCount}
//                 price={e.price}
//               />
//             </div>
//           );
//         }): <Loader/>}
//       </div>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel=" >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< "
//         renderOnZeroPageCount={null}
//         containerClassName="pagination position-absolute fs-4 top-40 start-50 translate-middle"
//         pageLinkClassName="page-num"
//         previousLinkClassName="page-num"
//         nextLinkClassName="page-num"
//         activeLinkClassName="active fs-3 p-2"
//       />
//     </>
//   );
// }

// export default Paginado;

