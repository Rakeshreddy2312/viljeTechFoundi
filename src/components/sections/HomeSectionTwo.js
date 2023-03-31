import React from "react";
import "./HomeSectionTwo.css";
import bordrline from "../../assets/image/borderline.svg";
import secTwoLogo from "../../assets/image/sectiontwologo.svg";
import secTwotag from "../../assets/image/secTwotag.svg";
import secTwoPackage from "../../assets/image/secTwoPackage.svg";
import secTwoShop from "../../assets/image/secTwoShop.svg";

const HomeSectionTwo = () => {
  return (
    <div className="section-two">
      <div className="sec-two-top">
        <h4>What a volunteer should do?</h4>
        <p>
          Here are the steps that a volunteer should follow when they found a
          lost item.
        </p>
      </div>
      <div className="border-blck">
        <img src={bordrline} alt="border line" />
      </div>
      <div className="sec-two-block">
        <h4>
          <img src={secTwotag} alt="tag logo" />
        </h4>
        <p>
          If an outdoor volunteer (people who aren’t associated with Foundi or
          lost & found department) finds an item or a product, they have to
          first check whether it belongs to anyone surrounding them. They should
          also inspect the found-item for any tags/QR stickers with Foundi
          branding on them.
        </p>
      </div>
      <div className="border-blck">
        <img src={bordrline} alt="border line" />
      </div>
      <div className="sec-two-block">
        <h4>
          <img src={secTwoPackage} alt="package logo" />
        </h4>
        <p>
          In a case where the found-item isn’t claimed by anyone in the
          surrounding group of people, the outdoor volunteer should submit the
          found-item at the nearby lost & found department and also should
          mention them that the found-item has Foundi tag/QR sticker on it so
          that the department personel can store it separatelyfrom rest of
          unregistered items.
        </p>
      </div>
      <div className="border-blck">
        <img src={bordrline} alt="border line" />
      </div>
      <div className="sec-two-block">
        <h4>
          <img src={secTwoShop} alt="shop logo" />
        </h4>
        <p>
          The indoor volunteers (people associated with Foundi & lost & found
          department) will then scan the QR or enter SNO number present on the
          found-item to connect with the owners of the product via Foundi’s
          in-build messenger and will work out a way to return the item to whom
          it belongs.
        </p>
      </div>
      <div className="border-blck">
        <img src={bordrline} alt="border line" />
      </div>
      <div
        className="sec-two-block"
        style={{ display: "block", textAlign: "center" }}
      >
        <p
          style={{
            fontFamily: "Euclid-Light",
            paddingBottom: "42px",
            textAlign: "center",
          }}
        >
          Thanks for your volunteer SUPPORT
        </p>
        <img src={secTwoLogo} alt="section logo" />
      </div>
    </div>
  );
};

export default HomeSectionTwo;
