import ProductsFilterBtn from "./ProductsFilterBtn";

const ProductsNav = () => {
  const buttons = [
    {
      name: "Living rooms",
      urlText: "living-rooms",
    },
    {
      name: "Dining rooms",
      urlText: "dining-rooms",
    },
    { name: "Bedrooms", urlText: "bedrooms" },
    {
      name: "Decorations",
      urlText: "decorations",
    },
    {
      name: "Offices & Workspaces",
      urlText: "offices-and-workspaces",
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
              urlText={button.urlText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsNav;
