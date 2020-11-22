import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { render } from 'react-dom';
import MapGL from 'react-map-gl'
import * as getGyms from './gyms.json'


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_KEY

export default function Map() {


  const [viewport, setViewport] = useState({
    latitude: 40.71828,
    longitude: -74.28544,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });
  const [popUp, updatePopUp] = useState({
    gym: null,
  });
  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/kbongco/ckhqbzi1z0h0k19nwjsoi6mxk"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >

      {getGyms.businesses.map(gym => (
        <Marker
          latitude={parseFloat(gym.coordinates.latitude)}
          longitude={parseFloat(gym.coordinates.longitude)}>
          <div>GYM</div>
        </Marker>
      ))}

    </MapGL>
  );

}