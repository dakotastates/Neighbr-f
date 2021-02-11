import React from 'react'
// import SearchContainer from "../../containers/SearchContainer";
// import Account from "./Account";
import Navbar from "./Navbar";
import ProfilesDrawer from './ProfilesDrawer';
// import Grid from "@material-ui/core/Grid";

function Header(props) {
  const { handleLogout, user } = props;

  return (
    <div>

    <Navbar handleLogout={handleLogout} user={props.user}/>
    </div>
  )

}

export default Header

// <Grid container justify="space-between" spacing={0}>
//   <Grid container item xs={2} justify="space-between" direction="row" alignItems="center" spacing={0}>
//     <SearchContainer />
//   </Grid>
//   <Grid container item xs={2} justify="space-between" direction="row" alignItems="center" spacing={0}>
//     <h2>Welcome {user.firstName}</h2>
//   </Grid>
//   <Grid container item xs={2} justify="space-between" direction="row" alignItems="center" spacing={0}>
//     <Account />
//   </Grid>
// </Grid>
