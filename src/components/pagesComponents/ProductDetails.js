import React, { useContext } from "react";
import Header from "../Header";

import { CartContext } from "../../contexts/CartContext";

const ProductDetails = () => {
  const { productDetails, setProductDetails } = useContext(CartContext);

  return (
    <div className="container">
      <Header />
      <div className="products-nav-container">
        <h1 className="page-title">Product Overview</h1>

        <div className="product-details-wrapper">
          <div className="image-container">
            <img src={productDetails.image} alt="" />
          </div>

          <div className="product-details">
            <h3 className="name">{productDetails.name}</h3>
            <div className="quantity">
              <button className="quantity-btn decrease">-</button>
              <p className="number">1</p>
              <button className="quantity-btn increase">+</button>
            </div>
            <p className="price">{productDetails.price}</p>

            <button className="cta-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
