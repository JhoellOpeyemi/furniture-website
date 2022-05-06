import { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productCategory, setProductCategory] = useState([]);

  return (
    <ProductContext.Provider value={{ productCategory, setProductCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
