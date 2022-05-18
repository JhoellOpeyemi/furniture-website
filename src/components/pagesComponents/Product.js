import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

const Product = ({ product }) => {
  const { productDetails, setProductDetails } = useContext(CartContext);
  const { image, name, price } = product;

  let formattedName = name.split(" ").join("-");

  const selectedProduct = () => {
    setProductDetails(product);
  };

  return (
    <Link
      to={`/product-details/${formattedName}`}
      className="product"
      onClick={selectedProduct}
    >
      <img src={image} alt="" className="product-image" />
      <div className="product-details">
        <p className="name">{name}</p>
        <span className="price">{price}</span>
      </div>
    </Link>
  );
};

export default Product;
