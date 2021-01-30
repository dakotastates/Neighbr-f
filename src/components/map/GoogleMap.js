import React from 'react'
import {Map, Marker, InfoWindow} from 'google-maps-react';
// import UsersContainer from '../../containers/UsersContainer'



function GoogleMap(props) {

    const userMarkers = props.users.map((user, index) => {

      return(<Marker
        key={index}
        name={user.first_name}
        position={{
          lat: user.location.latitude,
          lng: user.location.longitude
        }}
        icon={{
          url: "https://png.pngtree.com/element_our/png/20181227/marker-glyph-black-icon-png_293085.jpg",
          anchor: new props.google.maps.Point(32,32),
          scaledSize: new props.google.maps.Size(64,64)
        }}
        
        />)
    });

  // }


    return (

      <Map
        google={props.google}
        zoom={14}
        initialCenter={
          {
            lat: props.location.latitude,
            lng: props.location.longitude
          }
        }
        >
      {userMarkers}
        </Map>



    );

}

export default GoogleMap


  // <Marker position={{ lat: props.location.latitude, lng: props.location.longitude }} />
