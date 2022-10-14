import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import "../styles/Paginado.css";

function Paginado({ data }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className=" ">
        {currentItems.map((e, i) => {
          return (
            <div className="p" key={e.id}>
              <Card
                
                airlinesName={e.airlinesNames}
                departureTime={e.departureTime}
                arrivalTime={e.arrivalTime}
                duration={e.duration}
                stopoversCount={e.stopoversCount}
                price={e.price}
              />
            </div>
          );
        })}
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
}

export default Paginado;

