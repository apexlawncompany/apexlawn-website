import React from 'react';
import './information.css';

const Information = ({ headerText }) => {
  return (
    <div className='programContainer'>
      <div className='headerText'>{headerText}</div>

      <div className='informationText'>
        <p> Eco-Utility​​​​​​​​​​​​​​ Based in Apex, NC </p> <br />
        <p>We kicked off Apex Lawn Company March of 2019.</p>
        <br />
        <p>
          Ethics count; our company cares about delivering an outstanding
          product to our clients and providing good careers for our team. Every
          opportunity is a step forward in building the American Dream.
        </p>
      </div>
    </div>
  );
};

export default Information;
