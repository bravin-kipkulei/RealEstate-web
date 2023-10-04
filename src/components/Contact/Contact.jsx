import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

    //images
import contact from "../../Assets/contact.jpg"

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best service, and we
            believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactMode ">
            {/* First row */}
            <div className="flexRowStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+254 7123 345 87</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>

            {/* Second row */}
            <div className="flexRowStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+254 7123 345 87</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
          

          {/* Third row */}
          <div className="flexRowStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message Now</span>
                  <span className="secondaryText">+254 7123 345 87</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>
          </div>

          {/* Fourth row (duplicate of the "Chat" row) */}
          <div className="flexRowStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">+254 7123 345 87</span>
                </div>
              </div>
              <div className="flexCenter button">Message  Now</div>
            </div>
          </div>
        </div>
        </div>
                        {/* Right side */}
        <div className="v-left">
          <div className="image-container">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
