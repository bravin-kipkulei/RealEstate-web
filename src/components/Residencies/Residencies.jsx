import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider";

const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="div paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Chocies</span>
            <span className="primaryText">Popular Residencies</span>
          </div>

          {/*the courosolls making */}
          <Swiper>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />

                  <span className="secondaryText r-price">
                    <span style={{color:"orange"}}>$</span>
                    <span>{card.price}</span>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residencies;
