import { Outlet } from "react-router-dom";
import Header from "../Header";
import ProductsNav from "../pagesComponents/ProductsNav";

const Products = () => {
  return (
    <div className="container">
      <Header />
      <ProductsNav />
      <Outlet />
    </div>
  );
};

export default Products;
