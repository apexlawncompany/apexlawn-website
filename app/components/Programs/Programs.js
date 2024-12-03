import React from "react";
import Information from "./Information/information";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs">
      <div className="single-program">
        <Information
          headerText={"About Our Foundation"}
          informationText={
            "Eco-Utility​​​​​​​​​​​​​​ Based in Apex, NC We kicked off Apex Lawn Company March of 2019.Ethics count; our company cares about delivering an outstanding product to our clients and providing good careers for our team. Every opportunity is a step forward in building the American Dream."
          }
        />
      </div>
    </div>
  );
};

export default Programs;
