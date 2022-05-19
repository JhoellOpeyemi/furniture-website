import React from "react";

import video from "../../assets/hero-video-bg.mp4";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <video
          src={video}
          muted
          loop
          autoPlay
          className="hero-bg-video"
        ></video>
        <div className="video-overlay"></div>
        <div className="text-wrapper">
          <h1 className="hero-text">Stix Furniture</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
