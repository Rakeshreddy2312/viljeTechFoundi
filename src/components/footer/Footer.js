import React from "react";
import "./Footer.css";
// import AppStoreButtons from "../Buttons/AppStoreButtons";
// import appStoreLogo from "../../assets/image/applestorelogo.svg";
// import playstoreLogo from "../../assets/image/playstorelogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-bg"></div> */}
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-left">
            <h4>Never miss updates from us!</h4>
            <p>
              Sign up to our newsletter to remain up to date with Foundi
              updates.
            </p>
          </div>
          <div className="footer-right">
            <form className="footer-form">
              <div className="serach-blck">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="search-input"
                />
                <input type="submit" value="submit" className="submit-btn" />
              </div>
            </form>
          </div>
        </div>
        {/* <div className="store-icons">
          <AppStoreButtons icon={appStoreLogo} storeType="App Store" />
          <AppStoreButtons icon={playstoreLogo} storeType="Play Store" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
