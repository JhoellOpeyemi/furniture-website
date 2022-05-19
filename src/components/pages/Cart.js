import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import CartLoader from "../pagesComponents/CartLoader";

const Cart = () => {
  const { cartItems, loader } = useContext(CartContext);

  return (
    <>
      {loader && <CartLoader />}

      <div className="cart-container">
        <h1 className="page-title">Cart</h1>

        {cartItems.length ? (
          <div className="cart-items-wrapper">
            {cartItems.map((item, index) => {
              return (
                <div key={index} className="cart-items">
                  <div className="image-container">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="cart-item-details">
                    <h3 className="name">{item.name}</h3>
                    <div className="quantity">
                      <button className="quantity-btn decrease">-</button>
                      <p className="number">1</p>
                      <button className="quantity-btn increase">+</button>
                    </div>
                    <p className="price">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <p className="prompt">No items added to cart yet!</p>

            <Link to="/products" className="cta-btn">
              Add Items
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
