import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
import Pagination from "./Pagination";

const ProductCategory = () => {
  const { currentProducts } = useContext(ProductContext);

  console.log(currentProducts);

  return (
    <section className="products-category-section">
      <ul className="products-wrapper">
        {currentProducts.map((product, index) => {
          return (
            <li key={index} className="product">
              <img src={product.image} alt="" className="product-image" />
              <div className="product-details">
                <p className="name">{product.name}</p>
                <span className="price">{product.price}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <Pagination />
    </section>
  );
};

export default ProductCategory;
