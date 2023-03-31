import React from "react";
import "./HomeSectionOne.css";
import regImg from "../../assets/image/register-img.svg";
import connectImg from "../../assets/image/connect-img.svg";
import returnImg from "../../assets/image/return-img.svg";
import num01 from "../../assets/image/number01.svg";
import num02 from "../../assets/image/number02.svg";
import num03 from "../../assets/image/number03.svg";
import line from "../../assets/image/Line.svg";
const HomeSectionOne = () => {
  return (
    <div className="work-section">
      <div className="work-sec-top">
        <h2>How it works?</h2>
        <p>Get a glimpse of how Foundi app works in simple 3 steps</p>
      </div>
      <div className="work-section-content">
        <div className="content-left">
          <div className="register-img work-subblck">
            <div className="">
              <img src={regImg} alt="" height="360px" />
            </div>
          </div>
          <div className="desc-blck work-subblck">
            <h4>02 - Connect</h4>
            <p>
              In case an owner lost their Foundi registered item, finders can
              either scan QR code or enter SNO number present on the tag to
              contact the item owner via in-built messenger.
            </p>
          </div>
          <div className="return-img work-subblck">
            <div>
              <img src={returnImg} alt="" />
            </div>
          </div>
        </div>
        <div className="content-middle">
          <div className="line">
            <img src={line} alt="" />
          </div>
          <div className="num01">
            <img src={num01} alt="" />
          </div>
          <div className="num02">
            <img src={num02} alt="" />
          </div>
          <div className="num03">
            <img src={num03} alt="" />
          </div>
        </div>
        <div className="content-right">
          <div className="desc-blck work-subblck">
            <h4>01 - Register</h4>
            <p>
              To register your belongings within our digital database, purchase
              tags from Foundi app and scan or enter SNO number manually.
            </p>
          </div>
          <div className="connect-img work-subblck">
            <div>
              <img src={connectImg} alt="" />
            </div>
          </div>
          <div className="desc-blck work-subblck">
            <h4>03 - Return</h4>
            <p>
              Connecting with item owners, finders could workout a way to return
              lost items to their rightful owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
