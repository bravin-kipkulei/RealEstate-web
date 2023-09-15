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
                <div className="r-card">
                  <img src={card.image} alt="subs" />

                  <span className="secondaryText r-price">
                    <span>$</span>
                    
                    <span>{card.price}</span>
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
