import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        {/*left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a varierty of properties that suit you very easily</span>
            <span className="secondaryText">
              Forget all the difficulties i finding a residence for you
            </span>
          </div>

          {/*search-bar */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>

                {/*the stats couting */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat" >
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>                
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat" >
              <span>
                <CountUp start={15} end={128} duration={4} />
                <span>+</span>                
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat" >
              <span>
                <CountUp  end={28}  />
                <span>+</span>                
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>

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
