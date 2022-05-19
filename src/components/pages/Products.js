import { Outlet } from "react-router-dom";
import ProductsNav from "../pagesComponents/ProductsNav";

const Products = () => {
  return (
    <>
      <ProductsNav />
      <section className="products-category-section">
        <Outlet />
      </section>
    </>
  );
};

export default Products;
