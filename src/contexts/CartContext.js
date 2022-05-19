import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [loader, setLoader] = useState(false);

  const addToCart = (cartItem) => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 2000);

    setCartItems([...cartItems, cartItem]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        productDetails,
        setProductDetails,
        loader,
        setLoader,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
