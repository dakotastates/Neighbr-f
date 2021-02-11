import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authenticate from "./components/auth/Authenticate";
import Dashboard from "./components/dashboard/Dashboard";
import { connect } from "react-redux";


function App(props) {
  // debugger
  return (
    <div >
    <Router>

        {props.auth ? (
          <Route
            render={(routeProps) => <Dashboard {...props} {...routeProps} />}
          />
        ) : (
          <Authenticate {...props} />
        )}

    </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
