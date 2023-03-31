import React from "react";
import "./HomeSectionThree.css";
import registerlogo from "../../assets/image/register-logo.svg";
import connectlogo from "../../assets/image/connect-logo.svg";
import recoverlogo from "../../assets/image/recover-logo.svg";
import AppStoreButtons from "../Buttons/AppStoreButtons";
import appStoreLogo from "../../assets/image/applestorelogo.svg";
import playstoreLogo from "../../assets/image/playstorelogo.svg";

const HomeSectionThree = () => {
  return (
    <div className="section-three-parent">
      <div className="section-three-child">
        <div className="section-three-bg"></div>
        <div className="main-sec">
          <div className="sec-three-top">
            <h4>How it works?</h4>
            <p>Get a glimpse of how Foundi app works in 3 simple steps.</p>
          </div>
          <div className="sec-three-middle">
            <div className="sec-three-blck">
              <div>
                <img src={registerlogo} alt="register logo" />
              </div>
              <div>
                <h3>Register</h3>
                <p>
                  To register your belongings within our digital database,
                  purchase tags from Foundi app and scan or enter SNO number
                  manually.
                </p>
              </div>
            </div>
            <div className="sec-three-blck">
              <div>
                <img src={connectlogo} alt="connect logo" />
              </div>
              <div>
                <h3>Connect</h3>
                <p>
                  In case you lost your registered item, finders can either scan
                  QR code or enter SNO no. to contact you via in-built
                  messenger.
                </p>
              </div>
            </div>
            <div className="sec-three-blck">
              <div>
                <img src={recoverlogo} alt="recover logo" />
              </div>
              <div>
                <h3>Recover</h3>
                <p>
                  Responding to the messages from finder, you can get in touch
                  with them and figure a way out to recover your lost item.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-three-bottom">
          <div className="section-three-bottom-inner">
            <div className="sec-three-content">
              <h4>Have you got our app yet?</h4>
              <p>
                Download our app now to enjoy Foundi services free for 1 year as
                a part of promotional gift.
              </p>
            </div>
            <div className="sec-thre-btns">
              <div className="">
                <AppStoreButtons
                  icon={appStoreLogo}
                  storeType="App Store"
                  theme="dark"
                />
              </div>
              <div>
                {" "}
                <AppStoreButtons
                  icon={playstoreLogo}
                  storeType="Play Store"
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
