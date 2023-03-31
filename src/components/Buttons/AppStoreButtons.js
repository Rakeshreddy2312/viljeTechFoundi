import React from "react";
import "./AppStoreButtons.css";

const AppStoreButtons = (props) => {
  return (
    <div className="app-store-button">
      <div
        className="button-conent"
        style={
          props.theme && props.theme === "dark" && { backgroundColor: "#000" }
        }
      >
        <div className="store-logo">
          <img src={props.icon} alt="store logo" />
        </div>
        <div className="store-details">
          <p className="store-para">Download on the</p>
          <h4 className="store-name">{props.storeType}</h4>
        </div>
      </div>
    </div>
  );
};

export default AppStoreButtons;
