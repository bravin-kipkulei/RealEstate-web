import React from "react";
import "./Footer.css";

    //images
import logo2 from "../../Assets/logo2.png"

const Footer = () => {
  return (
    <div>
      <section f-wrapper>
        <div className="paddings innerWidth flexCenter f-container">
          {/* left side */}
          <div className="flexColStart f-left">
            <img src={logo2} alt="" width={120} />
            <span className="secondaryText">
              Our vision is to make all people
              <br />
              the best place to live for them.
            </span>
          </div>

          {/* RIght side*/}

          <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">123 Nakuru, Kabarak 34,Kenya</span>

            <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Services</span>
              <span>Products</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
