import React, { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

import "../css/about.css";

import image1 from "../assets/slider-1.jpg";
import image2 from "../assets/slider-2.jpg";
import image3 from "../assets/slider-3.jpg";
import image4 from "../assets/slider-4.jpg";
import image5 from "../assets/slider-5.jpg";
import image6 from "../assets/slider-6.jpg";

const About = () => {
  let scrollRef = useRef(null);
  let firstImage = useRef(null);
  let secondImage = useRef(null);
  let thirdImage = useRef(null);
  let fourthImage = useRef(null);
  let fifthImage = useRef(null);
  let sixthImage = useRef(null);

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.2,
  });

  useEffect(() => {
    tl.to(scrollRef, { opacity: 1 })
      .to(firstImage, { x: "0%", duration: 0.5 })
      .to(secondImage, {
        x: "0%",
        duration: 0.5,
        delay: 0.3,
      })
      .to(thirdImage, { x: "0%", duration: 0.5, delay: 0.3 })
      .to(fourthImage, { x: "0%", duration: 0.5, delay: 0.3 })
      .to(fifthImage, { x: "0%", duration: 0.5, delay: 0.3 })
      .to(sixthImage, { x: "0%", duration: 0.5, delay: 0.3 })
      .to(scrollRef, { y: "-60%", duration: 3 })
      .to(scrollRef, { opacity: 0, delay: 1 });
  });

  return (
    <section className="about-section">
      <div className="image-slider">
        <div className="image-scroll" ref={(el) => (scrollRef = el)}>
          <div className="image-wrapper" ref={(el) => (firstImage = el)}>
            <img src={image1} alt="" />
          </div>
          <div className="image-wrapper" ref={(el) => (secondImage = el)}>
            <img src={image2} alt="" />
          </div>{" "}
          <div className="image-wrapper" ref={(el) => (thirdImage = el)}>
            <img src={image3} alt="" />
          </div>{" "}
          <div className="image-wrapper" ref={(el) => (fourthImage = el)}>
            <img src={image4} alt="" />
          </div>{" "}
          <div className="image-wrapper" ref={(el) => (fifthImage = el)}>
            <img src={image5} alt="" />
          </div>{" "}
          <div className="image-wrapper" ref={(el) => (sixthImage = el)}>
            <img src={image6} alt="" />
          </div>{" "}
        </div>
      </div>

      <div className="about-content">
        <h2 className="section-title">About Stix</h2>
        <p className="about-content-details">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          eligendi quo sed, dolorum itaque exercitationem est earum accusantium
          veritatis quis magni mollitia eveniet nulla libero obcaecati
          consequatur iusto modi? Quam veritatis ullam architecto maiores quasi
          esse voluptatibus eveniet! Suscipit accusantium aliquam nesciunt
          voluptatem corporis dolorem. Voluptas nostrum nemo sint, rem sit
          explicabo
        </p>
        <button className="about-read-more-btn">Read More</button>
      </div>
    </section>
  );
};

export default About;
