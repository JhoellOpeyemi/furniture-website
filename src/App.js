import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductCategory from "./components/pagesComponents/ProductCategory";

import { ProductProvider } from "./contexts/ProductContext";

import "./css/styles.css";

function App() {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path=":category" element={<ProductCategory />} />
          </Route>
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
