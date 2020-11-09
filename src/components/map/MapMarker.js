import React from 'react';
import { Marker } from 'google-maps-react';
// import React, { useState} from 'react'


function MapMarker(props) {

// const [longitude, setLongitude] = useState();
// const [latitude, setLatitude] = useState();



    const {longitude, latitude} = props
    return (

      <Marker position={{ lat: {latitude}, lng: {longitude}}} />

    )
  }


export default MapMarker
