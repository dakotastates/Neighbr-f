import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authenticate from "./components/auth/Authenticate";
import Dashboard from "./components/dashboard/Dashboard";
import { connect } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import 'semantic-ui-css/semantic.min.css'

function App(props) {
  // debugger
  return (
    <Router>
      <div className="App">
        {props.auth ? (
          <Route
            render={(routeProps) => <Dashboard {...props} {...routeProps} />}
          />
        ) : (
          <Authenticate {...props} />
        )}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
