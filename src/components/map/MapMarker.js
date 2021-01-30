import React from 'react';
import { Marker } from 'google-maps-react';
// import React, { useState} from 'react'


function MapMarker(props) {


    const {user, key} = props
    
    return (<Marker position={{ lat: user.location.latitude, lng: user.location.longitude }} />)
  }


export default MapMarker
