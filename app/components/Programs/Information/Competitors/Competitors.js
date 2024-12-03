import React from "react";

const Competitors = ({ headerText }) => {
  return (
    <>
      <div className="headerText">
        <h2>{headerText}</h2>
      </div>

      <div className="informationText">
        <ul className="apexlawn-ul">
          <li>Average Price Per Cut: $49​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​.</li>

          <li> Customized Care & Same Team Assigned to Each Lawn </li>
          <li> Satisfaction Guarantee. </li>

          <li> Customer Support: Mon-Sat 8 am-7 pm. </li>
        </ul>
      </div>
    </>
  );
};

export default Competitors;
