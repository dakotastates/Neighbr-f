import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { updateUser } from "../actions/UserActions";
// import { connect } from "react-redux";
// import CommunityBoardContainer from "../containers/CommunityBoardContainer";
// import ClosestNeighborsContainer from "../containers/ClosestNeighborsContainer";
// import SortBoardContainer from "../containers/SortBoardContainer";
import MapContainer from "../containers/MapContainer";
// import ProfilesDrawer from '../components/dashboard/Profiles'
// import Grid from "@material-ui/core/Grid";



function Home(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
// debugger
useEffect(() => {
  // debugger
  props
  .updateUser(props.location, props.user.id)
  // debugger
  .then(() => {
    setLoading(true);

  })
  .catch((error) => {
    setError(error);
  });
}, []);
// debugger
        return(
            <div>
            <MapContainer currentUser={props.user} location={props.location} />
            </div>
        )

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
  location: state.usersStore.location,
});

export default connect(mapStateToProps, {updateUser})(Home);


// <Grid container justify="space-between" spacing={0}>
//   <Grid container item xs={2} justify="space-between" direction="row" alignItems="center" spacing={0} style={{ border:`solid` }}>
//     <SortBoardContainer />
//   </Grid>
//   <Grid container item xs={6} justify="space-between" direction="row" alignItems="center" spacing={0} style={{ border:`solid` }}>
//     <CommunityBoardContainer />
//   </Grid>
//   <Grid container item xs={2} justify="space-between" direction="row" alignItems="center" spacing={0} style={{ border:`solid` }}>
//     <ClosestNeighborsContainer />
//   </Grid>
//
// </Grid>
