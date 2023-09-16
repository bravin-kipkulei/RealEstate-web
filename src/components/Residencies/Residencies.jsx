import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./Residencies.css";
import data from "../../utils/slider";
import { sliderSettings } from "../../utils/common";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="div paddings innerWidth r-container">
          <div className="flexColStart r-head">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>

          {/* the carousel */}
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />

                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
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
