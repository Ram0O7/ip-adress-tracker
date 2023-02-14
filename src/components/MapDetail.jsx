import React from 'react';

const MapDetail = ({ userDetails, ip }) => {
  const { address, time, zipcode } = userDetails;

  return (
    <div className='detail-container'>
      <div>
        <p>ip adress</p>
        <h2>{ip.slice(0,12)}</h2>
      </div>
      <div>
        <p>address</p>
        <h2>{address}</h2>
      </div>
      <div>
        <p>current time</p>
        <h2>{time.trim().slice(10,19)}</h2>
      </div>
      <div>
        <p>postal code</p>
        <h2>{zipcode}</h2>
      </div>
    </div>
  )
}

export default MapDetail;
