import React, { useState } from 'react';
import {Map, Marker, InfoWindow} from 'google-maps-react';
// import Profile from '../profile/Profile'
// import MarkerModal from '../../helpers/Modal'
import ChatProfileContainer from '../../containers/ChatProfileContainer'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function GoogleMap(props) {
  // const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  // const [activeMarker, setActiveMarker] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleOpen = (props) => {
    setSelectedUser(props)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const [selectedUser, setSelectedUser] = useState({});

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <ChatProfileContainer currentUser={props.currentUser} user={selectedUser}/>

    </div>
  );

  // const onMarkerClick = (props, marker, e) => {
  //   // debugger
  //   setSelectedUser(props)
  //   setActiveMarker(marker)
  //   setShowingInfoWindow(true)
  //
  // };
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
        user={user}
        onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

        </Map>



    );

}

export default GoogleMap

// <InfoWindow
//   marker = { activeMarker }
//   visible = { showingInfoWindow }>
//   <ChatProfileContainer {...selectedUser}/>
// </InfoWindow>


  // <Marker position={{ lat: props.location.latitude, lng: props.location.longitude }} />
