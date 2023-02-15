import React, { useState, useEffect } from 'react';

import MapArea from './components/MapArea';
import MapDetail from './components/MapDetail';



function App() {
  const [userDetails, setUserDetails] = useState({
    address: 'mumbai, in',
    zipcode: '230040'
  });
  const [newPosition, setNewPosition] = useState('');
  const [region, setRegion] = useState('Navi Mumbai');
  const [position, setPosition] = useState({ lat: 22.6937, lng: 88.7548 });

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       setPosition({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       });
  //     });
  //   } else {
  //     console.log('Geolocation is not available in this browser.');
  //   }
  // }, []);

  const apiKey = process.env.REACT_APP_API;
  const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${position.lat},${position.lng}&includeRoadMetadata=true&includeNearestIntersection=true`;

  const locationData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserDetails({
          address: `${data.results[0].locations[0].street} ${data.results[0].locations[0].adminArea6} ${data.results[0].locations[0].adminArea5}, ${data.results[0].locations[0].adminArea1}`,
          zipcode: data.results[0].locations[0].postalCode,
        });
        setRegion(data.results[0].locations[0].adminArea4);
        setPosition(data.results[0].providedLocation[0].latLng);
      });
  }

  useEffect(() => {
    // fetch('https://ipapi.co/json/')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setIp(data.ip);
    //     // console.log(`User's location is: ${data.city}, ${data.region}, ${data.country_name}`);
    //   });
    locationData();
  }, [position.lat, position.lng]);

  const submitHandler = (e) => {
    e.preventDefault();
    setPosition({
      lat: newPosition.trim().slice(0, 7),
      lng: newPosition.trim().slice(9, 19)
    });
    console.log(position);
  }

  return (
    <main className='body-main'>
      <header className='header-main'>
        <h1>Location tracker</h1>
        <form action="sumbit" className='ip-form' onSubmit={submitHandler}>
          <input type="text" placeholder='22.6937, 88.7548' onChange={(e) => setNewPosition(e.target.value)} />
          <button type='submit' className='search-btn'></button>
        </form>
      </header>
      <section className='section-main'>
        <MapDetail userDetails={userDetails} region={region} position={position} />
        <MapArea latlng={position} />
      </section>
    </main>
  );
}

export default App;