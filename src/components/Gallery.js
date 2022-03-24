import React from "react";

import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";

import "../css/gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-container">
        <img src={gallery1} alt="" className="gallery-image" />
        <img src={gallery2} alt="" className="gallery-image" />
        <img src={gallery3} alt="" className="gallery-image" />
      </div>
    </section>
  );
};

export default Gallery;
