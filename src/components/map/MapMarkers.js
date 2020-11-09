import React from 'react'
import MapMarker from './MapMarker'
// import { Card } from 'semantic-ui-react'
// import ProfileCard from './ProfileCard'
//import ProfileForm from './ProfileForm'
import { connect } from "react-redux";
// import { storeUsers } from "../actions/UserActions";
// import { Marker } from 'google-maps-react';

function MapMarkers(props) {

const {users} = props

const userList = users.map(user => {
  return (
    <MapMarker
        key={user.id}
        user={user}
    />
  )
});

return (
  {userList}
)

  }



const mapStateToProps = (state) => ({
  users: state.usersStore.users

});

export default connect(mapStateToProps, null)(MapMarkers)
