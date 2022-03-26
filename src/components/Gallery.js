import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";

import "../css/gallery.css";

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
    <section className="gallery-section">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-container" ref={(el) => (imageContainer = el)}>
        <img
          src={gallery1}
          alt=""
          className="gallery-image"
          ref={(el) => (firstImage = el)}
        />

        <img
          src={gallery2}
          alt=""
          className="gallery-image"
          ref={(el) => (secondImage = el)}
        />

        <img
          src={gallery3}
          alt=""
          className="gallery-image"
          ref={(el) => (thirdImage = el)}
        />
      </div>
    </section>
  );
};

export default Gallery;
