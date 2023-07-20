import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import sliderSettings from "../../utils/common";
import data from "../../utils/slider.json";
import "./Residencies.css";

const Residencies = () => {
  return (
    <section className="res-wrapper">
      <div className="innerWidth paddings res-container">
        <div className="flexColStart res-title">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart res-card">
                <img src={card.image} alt="Home" />
                <span>
                  <span style={{ color: "orange" }}>$</span>
                  <span className="secondaryText">{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="res-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
