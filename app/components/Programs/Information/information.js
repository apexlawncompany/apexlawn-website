import React from "react";
import "./information.css";

const Information = ({ headerText, informationText }) => {
  return (
    <div className="programContainer">
      <div className="headerText">{headerText}</div>

      <div className="informationText">{informationText}</div>
    </div>
  );
};

export default Information;
