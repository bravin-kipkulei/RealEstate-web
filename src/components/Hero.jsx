import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        {/*left side */}
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>

          <div className="hero-des">
            <span>Find a varierty of properties that suit you very easily</span>
            <span>Forget all the difficulties i finding a residence for you</span>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right image-wrapper">
          <div className="image-container">
            <img src="src/Assets/hero-image.png" alt="hero's image " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
