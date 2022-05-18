import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, productDetails, setProductDetails }}
    >
      {children}
    </CartContext.Provider>
  );
};
