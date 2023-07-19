import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu ">
          <a href="/">Residencies</a>
          <a href="/">Our values</a>
          <a href="/">About us</a>
          <a href="/">Get started</a>
          <button className="button">
            <a href="/">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
