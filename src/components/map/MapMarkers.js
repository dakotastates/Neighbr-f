import React from 'react'
// import MapMarker from './MapMarker'
import { Marker} from 'google-maps-react';




function MapMarkers(props) {



  return (
  <Marker position={{ lat: props.location.latitude, lng: props.location.longitude }} />

  );



  }


export default MapMarkers
