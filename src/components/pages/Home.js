import React from "react";

import AboutSection from "../pagesComponents/HomeAboutSection";
import ProductsSection from "../pagesComponents/HomeProductsSection";
import HeroSection from "../pagesComponents/HomeHeroSection";
import OrderProcessSection from "../pagesComponents/HomeOrderProcess";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <AboutSection />
        <ProductsSection />
        <OrderProcessSection />
      </div>
    </>
  );
};

export default Home;
