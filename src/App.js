import { Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductsCategory from "./components/pagesComponents/ProductsCategory";
import ProductDetails from "./components/pagesComponents/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";

import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";

import "./css/styles.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <ScrollToTop>
            <Header />

            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />}>
                  <Route path=":category/*" element={<ProductsCategory />} />
                </Route>
                <Route
                  path="/product-details/:product"
                  element={<ProductDetails />}
                />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </ScrollToTop>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
