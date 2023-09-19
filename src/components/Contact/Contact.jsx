import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-letf">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Eazy to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best service and we
            beleive a good place to live can make yourlife better
          </span>

          <div className="flexColStart contactMode"></div>
          {/*first row */}
          <div className="flexColStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="pimaryText">Call</span>
                  <span className="secondaryText">+254 7123 345 87</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>
          </div>

          {/*Second mode*/}
          <div className="flexColCenter mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <BsFillChatDotsFill size={25} />
              </div>
              <div className="flexColStart detail">
                <span className="pimaryText">Chat</span>
                <span className="secondaryText">+254 7123 345 87</span>
              </div>
            </div>
            <div className="flexCenter button">Chat Now</div>

                    {/*second row*/}
                  
          </div>
        </div>

        {/* Right side */}
        <div className="v-left">
          <div className="image-container">
            <img src="src/Assets/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
