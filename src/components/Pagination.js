import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";

const Pagination = ({}) => {
  const { products, productsPerPage, paginate } = useContext(ProductContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    console.log(i);
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination-number-wrapper">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className="pagination-btn"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
