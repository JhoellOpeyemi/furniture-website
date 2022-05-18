import { Outlet } from "react-router-dom";
import Header from "../Header";
import ProductsNav from "../pagesComponents/ProductsNav";

const Products = () => {
  return (
    <div className="container">
      <Header />
      <ProductsNav />
      <section className="products-category-section">
        <Outlet />
      </section>
    </div>
  );
};

export default Products;
