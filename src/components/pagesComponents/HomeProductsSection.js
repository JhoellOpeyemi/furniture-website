import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  let imageContainer = useRef(null);
  let firstImage = useRef(null);
  let secondImage = useRef(null);
  let thirdImage = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainer,
        start: "top center",
      },
    });

    tl.to(imageContainer, { opacity: 1 })
      .to(firstImage, { y: "0%", duration: 0.7 })
      .to(secondImage, { y: "0%", duration: 0.7, delay: "-0.2" })
      .to(thirdImage, { y: "0%", duration: 0.7, delay: "-0.2" });
  });

  return (
    <section className="home-product-section">
      <h2 className="section-title">Products</h2>
      <div
        className="home-product-container"
        ref={(el) => (imageContainer = el)}
      >
        <img
          src={gallery1}
          alt=""
          className="home-product-image"
          ref={(el) => (firstImage = el)}
        />

        <img
          src={gallery2}
          alt=""
          className="home-product-image"
          ref={(el) => (secondImage = el)}
        />

        <img
          src={gallery3}
          alt=""
          className="home-product-image"
          ref={(el) => (thirdImage = el)}
        />
      </div>
      <div className="btn-wrapper">
        <button className="secondary-btn">See All</button>
      </div>
    </section>
  );
};

export default Gallery;
