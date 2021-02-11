import React, { useState, useEffect } from 'react';
// import { connect } from "react-redux";
// import { logout } from "../../actions/AuthActions";
// import { setUserLocation } from "../../actions/UserActions";
import { Switch} from "react-router-dom";
import PrivateRoute from "../../helpers/PrivateRoute";
// import Navbar from "./Navbar";
import Home from "../../pages/Home";
// import About from "../../pages/About";
import Profile from "../../pages/Profile";
// import AboutUser from "../../pages/AboutUser";
// import Map from "../../pages/Map";
// import Messages from "../../pages/Messages";




function Route(props) {


          return (
            <div >
              <Switch>
                <PrivateRoute path="/profile/:id" component={Profile}/>
                <PrivateRoute path="/" component={Home} />
              </Switch>
            </div>
        );

}



export default(Route);


// class="row justify-content-center h-100"
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
