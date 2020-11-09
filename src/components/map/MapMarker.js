import React from 'react';
import { Marker } from 'google-maps-react';
// import React, { useState} from 'react'


function MapMarker(props) {

// const [longitude, setLongitude] = useState();
// const [latitude, setLatitude] = useState();



    const {user} = props
    return (

      <Marker position={{ lat: {user.latitude}, lng: {user.longitude}}} />

    )
  }


export default MapMarker
