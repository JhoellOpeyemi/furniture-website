import { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // all products state
  const [products, setProducts] = useState([]);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  // get current products
  const lastProductOnAPage = currentPage * productsPerPage;
  const firstProductOnAPage = lastProductOnAPage - productsPerPage;
  const currentProducts = products.slice(
    firstProductOnAPage,
    lastProductOnAPage
  );

  // change currentPage onClick
  const paginate = (number) => setCurrentPage(number);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        currentPage,
        setCurrentPage,
        productsPerPage,
        currentProducts,
        paginate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
