import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

import { ProductContext } from "../../contexts/ProductContext";
import {
  livingRooms,
  diningRooms,
  bedrooms,
  decorations,
  offices,
} from "../../productsObject/AllProducts";
import Pagination from "../Pagination";
import Product from "./Product";

const ProductsCategory = () => {
  const { setProducts, currentProducts } = useContext(ProductContext);
  const params = useParams();

  useEffect(() => {
    if (params.category === "living-rooms") {
      setProducts(livingRooms);
    } else if (params.category === "dining-rooms") {
      setProducts(diningRooms);
    } else if (params.category === "bedrooms") {
      setProducts(bedrooms);
    } else if (params.category === "decorations") {
      setProducts(decorations);
    } else if (params.category === "offices") {
      setProducts(offices);
    }
  });

  return (
    <>
      <ul className="products-wrapper">
        {currentProducts.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </ul>

      <Pagination />
    </>
  );
};

export default ProductsCategory;
