import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { render } from 'react-dom';
import MapGL, { GeolocateControl } from 'react-map-gl'
import * as getGyms from './gyms.json'


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_KEY

export default function Map(props) {


  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 40.71828,
    longitude: -74.28544,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  const [selectedGym, setSelectedGym] = useState(null)



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
          {/* <div>GYM</div> */}
          <button className='marker-btn' onClick={(e) => {
            e.preventDefault();
            setSelectedGym(gym)
          }}>
            <img src="/barbel.svg" alt='barbell-icon'/>
          </button>
        </Marker>
      ))}

      {selectedGym ? (
        <Popup
          latitude={selectedGym.coordinates.latitude}
          longitude={selectedGym.coordinates.longitude}
          onClose={() => {
            setSelectedGym(null)
          }}
        >
          <div>
            <h5>{selectedGym.name}</h5>
            <h5>{selectedGym.location.address1}</h5>
            <h5>{selectedGym.location.city},{selectedGym.location.state}</h5>
          </div>
        </Popup>
      ) : null}
      

      
    </MapGL>
  );

}