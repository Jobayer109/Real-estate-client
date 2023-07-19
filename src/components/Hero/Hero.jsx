import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings flexCenter innerWidth hero-container">
        <div className="hero-left">
          <p>Hero left</p>
        </div>
        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
