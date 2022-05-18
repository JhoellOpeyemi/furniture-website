import React, { useContext } from "react";
import Header from "../Header";

import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container">
      <Header />

      <div className="cart-container">
        <h1 className="page-title">Cart</h1>
        {!cartItems.length && (
          <>
            <p>No items added to cart yet!</p>

            <button className="cta-btn">Add Items</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
