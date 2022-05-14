import ProductsFilterBtn from "./ProductsFilterBtn";

const ProductsNav = () => {
  const buttons = [
    {
      id: "79250107",
      name: "Living rooms",
      urlQuery: "living-rooms",
      categoryText: "livingRooms",
    },
    {
      id: "OKWQGAcz5ww",
      name: "Dining rooms",
      urlQuery: "dining-rooms",
      categoryText: "diningRooms",
    },
    {
      id: "3819529",
      name: "Bedrooms",
      urlQuery: "bedrooms",
      categoryText: "bedrooms",
    },
    {
      id: "8890044",
      name: "Decorations",
      urlQuery: "decorations",
      categoryText: "decorations",
    },
    {
      id: "23475570",
      name: "Offices",
      urlQuery: "offices",
      categoryText: "offices",
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
              categoryText={button.categoryText}
              id={button.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsNav;
