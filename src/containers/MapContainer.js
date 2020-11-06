import React from 'react'
import GoogleMap from "../components/map/GoogleMap";
import { GoogleApiWrapper} from 'google-maps-react';

function MapContainer(props) {

  return (
    <div>
      <GoogleMap google={props.google}/>
    </div>
  )

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA7PogTaDvIRVW8jHj-st3fefaZdB72iiE'
})(MapContainer)
