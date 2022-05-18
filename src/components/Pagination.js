import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ProductContext } from "../contexts/ProductContext";

const Pagination = () => {
  const { products, productsPerPage, paginate } = useContext(ProductContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination-number-wrapper">
        {pageNumbers.map((number) => (
          <NavLink
            to={`${number}`}
            key={number}
            onClick={() => paginate(number)}
            className={({ isActive }) =>
              isActive ? "pagination-btn selected" : "pagination-btn"
            }
          >
            {number}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
