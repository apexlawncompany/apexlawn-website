import React from "react";
import ApexLawn from "./Information/ApexLawn/ApexLawn";
import Competitors from "./Information/Competitors/Competitors";
import Foundation from "./Information/Foundation/Foundation";
import Information from "./Information/Information";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs">
      <div className="single-program">
        <Foundation headerText={"About Our Foundation"} />
      </div>
      <div className="single-program">
        <Competitors headerText={"Apex Lawn Company"} />
      </div>
      <div className="single-program">
        <ApexLawn headerText={"Average Competitors"} />
      </div>
    </div>
  );
};

export default Programs;
