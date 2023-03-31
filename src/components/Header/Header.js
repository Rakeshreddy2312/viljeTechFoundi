import React from "react";
import "./Header.css";
import logo from "../../assets/image/logo.svg";
import { FiArrowUpRight } from "react-icons/fi";
import headerBtmLogo from "../../assets/image/Headerbtmlogo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="head-left-blck">
        <div className="header-top">
          <div className="logo">
            <img src={logo} alt="Foundi logo " />
            <p className="logoname">Foundi</p>
          </div>
          <div className="mainsite-link">
            <span>Jump to main site</span>
            <FiArrowUpRight />
          </div>
        </div>
        <div className="head-content">
          <p>
            Hello, we’re a QR based <span>digital</span> lost & found solution!
          </p>
        </div>
        {/* <div className="know-more">
          <p>Scroll down to know more</p>
        </div> */}
        <div className="header-bottom">
          <span>Event page for -</span>
          <div className="header-bottom-logo">
            <img src={headerBtmLogo} alt="logo" />
          </div>
        </div>
      </div>
      {/* <div className="head-right-blck"></div> */}
    </div>
  );
};

export default Header;
