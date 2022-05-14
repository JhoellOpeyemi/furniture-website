import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { allProducts } from "../../productsObject/AllProducts";
import { ProductContext } from "../../contexts/ProductContext";

const ProductsFilterBtn = ({ id, name, urlQuery, categoryText }) => {
  const { setProducts } = useContext(ProductContext);

  const updateProducts = () => {
    const categories = Object.entries(allProducts);
    categories.forEach((category) => {
      const categoryName = category[0];
      const categoryProducts = category[1];

      if (categoryName === categoryText) {
        setProducts(categoryProducts);
      }
    });
  };

  return (
    <NavLink to={urlQuery} className="filter-btn" onClick={updateProducts}>
      {name}
    </NavLink>
  );
};

export default ProductsFilterBtn;
