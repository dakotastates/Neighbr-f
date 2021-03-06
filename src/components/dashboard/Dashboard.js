import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { logout } from "../../actions/AuthActions";
import { setUserLocation } from "../../actions/UserActions";
import { Switch} from "react-router-dom";
import PrivateRoute from "../../helpers/PrivateRoute";
// import Navbar from "./Navbar";
// import Home from "../../pages/Home";
// import About from "../../pages/About";
// import Profile from "../../pages/Profile";
// import AboutUser from "../../pages/AboutUser";
// import Map from "../../pages/Map";
// import Messages from "../../pages/Messages";
// import Header from "../../components/dashboard/Header";
// import Footer from "../../components/dashboard/Footer";
// import Content from './Content'
// import Route from './Route'
// import ProfilesDrawer from './ProfilesDrawer'
import AppBarHeader from './AppBar'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),

    },
  },
}));

function Dashboard(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const classes = useStyles();
// debugger
  const handleLogout = () => {
      props.logout();
      localStorage.removeItem("state");
      localStorage.removeItem("token");
      props.history.push("/");
    };

    useEffect(() => {
      // debugger
      props
      .setUserLocation()
      .then(() => {
        setLoading(true);

      })
      .catch((error) => {
        setError(error);
      });
    }, []);
    // debugger
    if (loading === false){
        return(
          <div className={classes.root}><CircularProgress /> <h1>Fetching User Location</h1></div>
        )
        } else if (error){
          return(
            <div>Unable to Load Location</div>
          )
         } else {
          return (
            <div >
            <AppBarHeader currentUser={props.user} handleLogout={handleLogout} />

            </div>
        );
      }

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
  // location: state.usersStore.location
});

export default connect(mapStateToProps, { logout, setUserLocation })(Dashboard);

// <Header handleLogout={handleLogout} />




// class="row justify-content-center h-100"
// <div className="header">
//
// <Header handleLogout={handleLogout} user={props.user}/>
//
// </div>
// <Header handleLogout={handleLogout} />
// <ProfilesDrawer />
// <PrivateRoute path="/profile/:id/about" component={AboutUser}/>
// <PrivateRoute path="/profile/:id" component={Profile}/>
// <PrivateRoute path="/about" component={About} />
// <PrivateRoute path="/map" component={Map} />
// <PrivateRoute path="/messages" component={Messages} />
