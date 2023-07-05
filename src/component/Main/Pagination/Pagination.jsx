import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({handleclick}) => {

  return (
    <>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={16}
        onPageChange={handleclick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
      />
    </>
  );
};

export default Pagination;
