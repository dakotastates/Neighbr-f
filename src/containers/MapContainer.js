import React, { useState, useEffect } from 'react';
import GoogleMap from "../components/map/GoogleMap";
import { GoogleApiWrapper} from 'google-maps-react';
import { connect } from "react-redux";
import { storeUsers } from "../actions/UserActions";

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

               <GoogleMap google={props.google} location={props.location} users={props.users}/>

           )
         };



}

const mapStateToProps = (state) => ({
  users: state.usersStore.users
});

export default connect(mapStateToProps, { storeUsers})(GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(MapContainer))
