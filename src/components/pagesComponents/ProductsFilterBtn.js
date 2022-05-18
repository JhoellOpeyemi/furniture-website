import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ProductContext } from "../../contexts/ProductContext";

const ProductsFilterBtn = ({ name, urlQuery }) => {
  const { setCurrentPage } = useContext(ProductContext);

  const setToFirstPage = () => {
    setCurrentPage(1);
  };

  return (
    <NavLink
      to={urlQuery}
      className={({ isActive }) =>
        isActive ? "filter-btn selected" : "filter-btn"
      }
      onClick={setToFirstPage}
    >
      {name}
    </NavLink>
  );
};

export default ProductsFilterBtn;
