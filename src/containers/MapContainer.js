import React, { useState, useEffect } from 'react';
import GoogleMap from "../components/map/GoogleMap";
import { GoogleApiWrapper} from 'google-maps-react';
import { connect } from "react-redux";
import { storeUsers } from "../actions/UserActions";
import { openProfileModal } from "../actions/ModalActions";

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

function MapContainer(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    props
    .storeUsers()
    .then(() => {
      setLoading(true);

    })
    .catch((error) => {
      setError(error);
    });

  }, []);
  if (loading === false){
        return(
          <div>Loading Users</div>
        )
      } else if (error){
        return(
          <div>Unable to Load Users.</div>
        )
       } else {

           return (
                <div >
               <GoogleMap currentUser={props.currentUser} google={props.google} location={props.location} users={props.users} openModal={openProfileModal}/>
               </div>
           )
         };



}

const mapStateToProps = (state) => ({
  users: state.usersStore.users
});

export default connect(mapStateToProps, { storeUsers, openProfileModal})(GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(MapContainer))
