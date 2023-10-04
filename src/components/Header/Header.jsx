import React from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

    //images
import logo from "../../Assets/logo.png"

const Header = () => {
  const [menuOPened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOPened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOPened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={()=>{
            setMenuOpened(false)
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOPened)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        {/*menu icon responsive */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
