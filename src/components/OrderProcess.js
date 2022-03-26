import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../css/orderProcess.css";

import process1 from "../assets/process-1.jpg";
import process2 from "../assets/process-2.jpg";
import process3 from "../assets/process-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const OrderProcess = () => {
  let firstImage = useRef(null);
  let secondImage = useRef(null);
  let thirdImage = useRef(null);

  useEffect(() => {
    gsap.to(firstImage, {
      width: "0%",
      scrollTrigger: {
        trigger: firstImage,
      },
    });

    gsap.to(secondImage, {
      width: "0%",
      scrollTrigger: {
        trigger: secondImage,
      },
    });

    gsap.to(thirdImage, {
      width: "0%",
      scrollTrigger: {
        trigger: thirdImage,
      },
    });
  });

  return (
    <section className="order-process-section">
      <h2 className="section-title">Ordering Process</h2>

      <div className="order-process-grid">
        <div className="grid-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            eligendi quo sed, dolorum itaque exercitationem est earum
            accusantium veritatis
          </p>
        </div>
        <div className="grid-image">
          <img src={process1} alt="" />
          <div className="overlay" ref={(el) => (firstImage = el)}></div>
        </div>
      </div>

      <div className="order-process-grid">
        <div className="grid-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            eligendi quo sed, dolorum obcaecati consequatur iusto modi? Quam
            veritatis ullam architecto
          </p>
        </div>
        <div className="grid-image">
          <img src={process2} alt="" />
          <div className="overlay" ref={(el) => (secondImage = el)}></div>
        </div>
      </div>

      <div className="order-process-grid">
        <div className="grid-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            eligendi quo sed, dolorum itaque exercitationem est earum
            accusantium veritatis quis magni mollitia eveniet nulla libero
          </p>
        </div>
        <div className="grid-image">
          <img src={process3} alt="" />
          <div className="overlay" ref={(el) => (thirdImage = el)}></div>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
