import React from "react";
import "./Main.css";
import Image from "next/image";
import arrow from "../../../public/assets/dark-arrow.png";

const Main = () => {
  return (
    <div className="main container">
      <div className="main-text">
        <h1>
          Apex Lawn has been rated one of the best lawn care services in our
          area by Expertise. ​​​​​​​​​​​​
        </h1>
        <p>
          {" "}
          When we mulch, We purchase, deliver, spread, depth check, around
          delicate plants and bushes edges into beds cleanup with yard vacuum
          and pressure wash your drive way.
        </p>
        <button className="btn">
          Explore more
          {/* <Image src={arrow} alt='arrow' /> */}
        </button>
      </div>
    </div>
  );
};

export default Main;
