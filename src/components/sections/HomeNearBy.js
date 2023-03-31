import React from "react";
import "./HomeNearBy.css";
import shopIcon from "../../assets/image/shopIcon.svg";
import callIcon from "../../assets/image/callicon.svg";
import directionIcon from "../../assets/image/directionicon.svg";
import line from "../../assets/image/HomeFAQLine.svg";
import nearByImg from "../../assets/image/nearbyMap.svg";
import nearByImgMobile from "../../assets/image/nearbyMapmobile.svg";
import { FiSearch } from "react-icons/fi";

const HomeNearBy = () => {
  return (
    <div className="nearby-main">
      <div className="nearByInsideContainerStyle">
        <div className="nearby-top">
          <h4>Foundi nearby you!</h4>
          <p>
            Volunteers are key part of our service, so we made it easy for them
            by allowing them to search, filter and contact nearest foundi
            recognized lost & found stalls.
          </p>
        </div>
        <div className="nearby-middle">
          <div className="nearby-map">
            <img src={nearByImg} alt="nearby map" className="nearby-lg-map" />
            <img
              src={nearByImgMobile}
              alt="nearby map"
              className="nearby-mobile-map"
            />
            <div className="nearby-serach">
              <div className="serach-icon">
                <FiSearch />
              </div>
              <input
                type="serach "
                placeholder="Enter Your Location Here"
                className="nearby-search-input"
              />
            </div>
            <div className="nearby-map-btns">
              <button className="stall-btn">All stalls</button>
              <button className="nearby-btn">Nearby</button>
            </div>
          </div>
          <div className="nearby-bottom">
            <div className="nearby-bottom-blck">
              <div className="nearby-logo-blck">
                <img src={shopIcon} alt="shop logo" />
              </div>
              <div className="nearby-content">
                <h4>Foundi - Eddy St (200m)</h4>
                <p>
                  Address line here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
              <div className="nearby-details">
                <div className="nearby-call">
                  <div className="nearby-call-icon">
                    <img src={callIcon} alt="phone icon" />
                  </div>
                  <p>call</p>
                </div>
                <div className="nearby-direction">
                  <div className="nearby-direction-icon">
                    <img src={directionIcon} alt="direction icon" />
                  </div>
                  <p>direct</p>
                </div>
              </div>
            </div>
            <div className="nearByLine">
              <img src={line} alt="line" />
            </div>
            <div className="nearby-bottom-blck">
              <div className="nearby-logo-blck">
                <img src={shopIcon} alt="shop logo" />
              </div>
              <div className="nearby-content">
                <h4>Foundi - Cole valley (700m)</h4>
                <p>
                  Address line here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
              <div className="nearby-details">
                <div className="nearby-call">
                  <div className="nearby-call-icon">
                    <img src={callIcon} alt="phone icon" />
                  </div>
                  <p>call</p>
                </div>
                <div className="nearby-direction">
                  <div className="nearby-direction-icon">
                    <img src={directionIcon} alt="direction icon" />
                  </div>
                  <p>direct</p>
                </div>
              </div>
            </div>
            <div className="nearByLine">
              <img src={line} alt="line" />
            </div>
            <div className="nearby-bottom-blck">
              <div className="nearby-logo-blck">
                <img src={shopIcon} alt="shop logo" />
              </div>
              <div className="nearby-content">
                <h4>Foundi - Castro (750m)</h4>
                <p>
                  Address line here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
              <div className="nearby-details">
                <div className="nearby-call">
                  <div className="nearby-call-icon">
                    <img src={callIcon} alt="phone icon" />
                  </div>
                  <p>call</p>
                </div>
                <div className="nearby-direction">
                  <div className="nearby-direction-icon">
                    <img src={directionIcon} alt="direction icon" />
                  </div>
                  <p>direct</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNearBy;
