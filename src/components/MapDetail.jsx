import React from 'react';

const MapDetail = ({ userDetails, position, region }) => {
  const { address, zipcode } = userDetails;

  return (
    <div className='detail-container'>
      <div>
        <p>position (lat,lng)</p>
        <h2>{`${position.lat}, ${position.lng}`}</h2>
      </div>
      <div>
        <p>address</p>
        <h2>{address === '' ? 'no result' : address}</h2>
      </div>
      <div>
        <p>current region</p>
        <h2>{region === '' ? 'no result' : region}</h2>
      </div>
      <div>
        <p>postal code</p>
        <h2>{zipcode === '' ? 'no result' : zipcode}</h2>
      </div>
    </div>
  )
}

export default MapDetail;
