import React from 'react';

const Foundation = ({ headerText }) => {
  return (
    <div>
      <div className='headerText'>
        <h2>{headerText}</h2>
      </div>

      <div className='informationText'>
        <p> Eco-Utility​​​​​​​​​​​​​​ Based in Apex, NC </p> <br />
        <p>We kicked off Apex Lawn Company March of 2019.</p>
        <br />
        <p>
          Ethics count; our company cares about delivering an outstanding
          product to our clients and providing good careers for our team. <br />
          Every opportunity is a step forward in building the American Dream.
        </p>
      </div>
    </div>
  );
};

export default Foundation;
