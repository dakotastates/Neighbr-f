import React, { useState } from 'react';
import {Map, Marker, InfoWindow} from 'google-maps-react';
import ChatProfileContainer from '../../containers/ChatProfileContainer'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import ProfileChatModal from '../../helpers/ProfileChatModal'




function GoogleMap(props) {


  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = useState(false);


  const handleOpen = (props) => {
    setSelectedUser(props)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const userMarkers = props.users.map((user, index) => {
      let image_url;
      if (user.profile.featured_image) {
        image_url = user.profile.featured_image.url
      } else{
        image_url = "https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png"
      }

      return(<Marker
        key={index}
        name={user.first_name}
        // animation={props.google.maps.Animation.DROP}
        position={{
          lat: user.location.latitude,
          lng: user.location.longitude
        }}
        icon={{
          url: image_url,
          anchor: new props.google.maps.Point(32,32),
          scaledSize: new props.google.maps.Size(64,64),

        }}

        user={user}
        onClick={handleOpen}
        />)
    });



  const containerStyle = {
    position: 'absolute',
    // height: '90vh',
    // display: "flex",
    margin: " auto",
    width: "100%",

    height:"90vh",

  }


    return (
      <div >
      <Map
        google={props.google}
        containerStyle={containerStyle}
        zoom={14}
        initialCenter={
          {
            lat: props.location.latitude,
            lng: props.location.longitude
          }
        }
        >
      {userMarkers}
      <ProfileChatModal open={open} onClose={handleClose} currentUser={props.currentUser} selectedUser={selectedUser.user}/>

        </Map>

        </div>

    );

}

export default GoogleMap
