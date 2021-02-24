import React, { useState } from 'react';
import {Map, Marker, InfoWindow} from 'google-maps-react';
// import Profile from '../profile/Profile'
// import MarkerModal from '../../helpers/Modal'
import ChatProfileContainer from '../../containers/ChatProfileContainer'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import ProfileChatModal from '../../helpers/ProfileChatModal'
// import Avatar from '@material-ui/core/Avatar';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }
//
// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
//
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }
//
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

function GoogleMap(props) {

  // const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  // const [activeMarker, setActiveMarker] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = useState(false);
  // const [modalStyle] = useState(getModalStyle);
  // const classes = useStyles();

  const handleOpen = (props) => {
    setSelectedUser(props)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const [selectedUser, setSelectedUser] = useState({});

  // const body = (
  //   <div class="col-md-8 col-xl-6 chat">
  //
  //   <ChatProfileContainer currentUser={props.currentUser} user={selectedUser}/>
  //
  //   </div>
  // );

  // const onMarkerClick = (props, marker, e) => {
  //   // debugger
  //   setSelectedUser(props)
  //   setActiveMarker(marker)
  //   setShowingInfoWindow(true)
  //
  // };


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

    // const style = {
    //   width: '100vh',
    //   height: '100vh'
    // }


  // }

  const containerStyle = {
    position: 'absolute',
    // height: '90vh',
    // display: "flex",
    margin: " auto",
    width: "100%",

    height:"90vh",


     // "min-height": "100%",
     // "flex-direction": "column"
    // width: '50vw',
    // height: '50vh'
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

// <ProfileChatModal open={open} onClose={handleClose} currentUser={props.currentUser} selectedUser={selectedUser.user}/>

// <InfoWindow
//   marker = { activeMarker }
//   visible = { showingInfoWindow }>
//   <ChatProfileContainer {...selectedUser}/>
// </InfoWindow>
// <div class="col-md-8 col-xl-6 chat">
// <div style={modalStyle} className={classes.paper}>
  // <Marker position={{ lat: props.location.latitude, lng: props.location.longitude }} />


  //
  // const userMarkers = props.users.map((user, index) => {
  //   let image_url;
  //   if (user.profile.featured_image) {
  //     image_url = user.profile.featured_image.url
  //   } else{
  //     image_url = "https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png"
  //   }

  //
  // <Modal
  //   open={open}
  //   onClose={handleClose}
  //   aria-labelledby="simple-modal-title"
  //   aria-describedby="simple-modal-description"
  // >
  //   {body}
  // </Modal>
