import React from "react";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings flexCenter innerWidth hero-container">
        {/* Left side */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property.
            </h1>
          </div>
          <div className="hero-description flexColStart">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you.</span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={30} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="stat flexColStart">
              <span>
                <CountUp start={8800} end={9000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="stat flexColStart">
              <span>
                <CountUp start={1800} end={2000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Clients</span>
            </div>
            <div className="stat flexColStart">
              <span>
                <CountUp end={43} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right side */}
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
