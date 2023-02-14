import React, { useState, useEffect } from 'react';

import MapArea from './components/MapArea';
import MapDetail from './components/MapDetail';



function App() {
  const [ip, setIp] = useState('');
  const [userDetails, setUserDetails] = useState({
    address: 'mumbai, in',
    time: '05:00',
    zipcode: 'spacex starlink'
  });
  const [newIp, setNewIp] = useState('');
  const [latlng, setLatlng] = useState({ lat: 25.6937, lng: 82.7548 });
  const apiKey = process.env.REACT_APP_API;
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
        setUserDetails({
          address: `${data.city}, ${data.country_code2}`,
          time: data.time_zone.current_time,
          zipcode: data.zipcode,
        });
        setLatlng({
          lat: data.latitude,
          lng: data.longitude,
        })
      });
  }, [ip]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIp(newIp);
  }

  return (
    <main className='body-main'>
      <header className='header-main'>
        <h1>ip address tracker</h1>
        <form action="sumbit" className='ip-form' onSubmit={submitHandler}>
          <input type="text" placeholder='Search for any IP address' onChange={(e) => setNewIp(e.target.value)} />
          <button type='submit' className='search-btn'></button>
        </form>
      </header>
      <section className='section-main'>
        <MapDetail userDetails={userDetails} ip={ip} />
        <MapArea latlng={latlng} />
      </section>
    </main>
  );
}

export default App;