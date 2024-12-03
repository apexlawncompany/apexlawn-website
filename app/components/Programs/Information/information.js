import React from "react";
import Foundation from "./Foundation/Foundation";
import "./Information.css";

const Information = ({ headerText }) => {
  return (
    <div>
      <div className="headerText">
        <h2>{headerText}</h2>
      </div>

      <div className="informationText">
        <Foundation />
      </div>
    </div>
  );
};

export default Information;
