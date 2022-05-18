import ProductsFilterBtn from "./ProductsFilterBtn";

const ProductsNav = () => {
  const buttons = [
    {
      name: "Living rooms",
      urlQuery: "living-rooms",
    },
    {
      name: "Dining rooms",
      urlQuery: "dining-rooms",
    },
    {
      name: "Bedrooms",
      urlQuery: "bedrooms",
    },
    {
      name: "Decorations",
      urlQuery: "decorations",
    },
    {
      name: "Offices",
      urlQuery: "offices",
    },
  ];

  return (
    <div className="products-nav-container">
      <h1 className="page-title">Products</h1>
      <p className="subtitle">Choose a category below:</p>
      <div className="nav-btn-wrapper">
        {buttons.map((button) => {
          return (
            <ProductsFilterBtn
              key={button.name}
              name={button.name}
              urlQuery={button.urlQuery}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsNav;
