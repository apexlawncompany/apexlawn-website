import React from 'react';
import '../../Information/Information.css';

const ApexLawn = ({ headerText }) => {
  return (
    <>
      <div className='headerText'>
        <h2>{headerText}</h2>
      </div>

      <div className='informationText'>
        <p> Average Price Per Cut: $ 60​​​​​​​​ </p> <br />
        <p>"Big Box" Packages​.</p> <br />
        <p>Customer Service: Mon-Fri 8 am-5 pm.</p>
        <div className='schedule-btn'>
          <button>Schedule and Appointment</button>
          <button>Schedule and Drone Fly By</button>
        </div>
      </div>
    </>
  );
};

export default ApexLawn;
