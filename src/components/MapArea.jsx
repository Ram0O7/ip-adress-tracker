import React, {useEffect, useState} from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

const MapArea = ({latlng}) => {
  const [position, setPosition] = useState(latlng);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(`User's latitude is: ${position.coords.latitude}`);
        console.log(`User's longitude is: ${position.coords.longitude}`);
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log('Geolocation is not available in this browser.');
    }
  }, [latlng]);

  return (
    <MapContainer
      className="map-area"
      center={position}
      zoom={5}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
          <Marker position={position} >
              <Popup>
                  <p>this location is not accurate!</p>
              </Popup>
          </Marker>
    </MapContainer>
  );
};

export default MapArea;