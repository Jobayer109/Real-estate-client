import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left footer */}
        <div className="flexColStart f-left">
          <span>
            <img src="./logo2.png" alt="logo" />
          </span>
          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for them.
          </span>
        </div>

        {/* Right footer */}
        <div className="flexColStart f-left">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Rangpur, Dhaka, Bangladesh</span>
          <span>
            <div className="flexCenter f-detail">
              <span>Property</span>
              <span>Services</span>
              <span>Products</span>
              <span>About Us</span>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
