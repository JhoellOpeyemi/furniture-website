import { NavLink } from "react-router-dom";

const ProductsFilterBtn = ({ name, urlText }) => {
  return (
    <NavLink to={urlText} className="filter-btn">
      {name}
    </NavLink>
  );
};

export default ProductsFilterBtn;
