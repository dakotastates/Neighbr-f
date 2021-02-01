import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { logout } from "../../actions/AuthActions";
import { setUserLocation } from "../../actions/UserActions";
import { Switch} from "react-router-dom";
import PrivateRoute from "../../helpers/PrivateRoute";
// import Navbar from "./Navbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Profile from "../../pages/Profile";
import AboutUser from "../../pages/AboutUser";
import Map from "../../pages/Map";
import Messages from "../../pages/Messages";
import Header from "../../components/dashboard/Header";
import Footer from "../../components/dashboard/Footer";


function Dashboard(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

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
      // debugger
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
            <div>Fetching Location</div>
          )
        } else if (error){
          return(
            <div>Unable to Load Location</div>
          )
         } else {
          return (
            <div class="row justify-content-center h-100">
              <Switch>


                <PrivateRoute path="/" component={Home} />
              </Switch>
              <Footer />
              </div>
        );
      }

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
  // location: state.usersStore.location
});

export default connect(mapStateToProps, { logout, setUserLocation })(Dashboard);

// <div className="header">
//
// <Header handleLogout={handleLogout} user={props.user}/>
//
// </div>

// <PrivateRoute path="/profile/:id/about" component={AboutUser}/>
// <PrivateRoute path="/profile/:id" component={Profile}/>
// <PrivateRoute path="/about" component={About} />
// <PrivateRoute path="/map" component={Map} />
// <PrivateRoute path="/messages" component={Messages} />
