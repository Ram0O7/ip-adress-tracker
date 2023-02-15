import React, {useEffect, useState} from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

const MapArea = ({latlng}) => {

  return (
    <MapContainer
      className="map-area"
      center={latlng}
      zoom={7}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
          <Marker position={latlng} >
              <Popup>
                  <p>this location is not accurate!</p>
              </Popup>
          </Marker>
    </MapContainer>
  );
};

export default MapArea;