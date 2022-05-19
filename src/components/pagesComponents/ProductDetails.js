import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

const ProductDetails = () => {
  const { productDetails, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const selectedProduct = Object.keys(productDetails).length > 0;

  return (
    <div className="products-nav-container">
      {selectedProduct && (
        <>
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

              <Link
                to="/cart"
                className="cta-btn"
                onClick={() => addToCart(productDetails)}
              >
                Add to cart
              </Link>
            </div>
          </div>
        </>
      )}

      {!selectedProduct && (
        <>
          <div className="product-prompt-container">
            <p className="prompt">
              No product selected, please go back and select a product to add to
              cart
            </p>

            <button className="cta-btn" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
