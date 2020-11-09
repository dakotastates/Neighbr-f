import React from 'react'
import {Map} from 'google-maps-react';

// import CurrentLocation from "../../helpers/CurrentLocation";


function GoogleMap(props) {

    return (

      <Map google={props.google} zoom={14}>

      </Map>


    );

}

export default GoogleMap
