import React from 'react'
import { connect } from "react-redux";
import { logout } from "../../actions/AuthActions";
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

// import AdminDashboard from "../components/admin/AdminDashboard";
// import AdvisorDashboard from "../pages/Advisors";


function Dashboard(props) {

  const handleLogout = () => {
      props.logout();
      localStorage.removeItem("state");
      localStorage.removeItem("token");
      props.history.push("/");
    };
// debugger

// let advisorDashboardRoute;
// let adminDashboardRoute;
// if (props.user.admin_level === 1){
//   advisorDashboardRoute = <PrivateRoute path="/advisor/dashboard" component={AdvisorDashboard} />
// } else if (props.user.admin_level === 2){
//   adminDashboardRoute = <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
// }
    return(
        <div>

          <div className="header">

          <Header handleLogout={handleLogout} user={props.user}/>

          </div>

          <Switch>
            <PrivateRoute path="/profile/:id/about" component={AboutUser}/>
            <PrivateRoute path="/profile/:id" component={Profile}/>
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/messages" component={Messages} />
            <PrivateRoute path="/logout" component={Home} />
            <PrivateRoute path="/" component={Home} />

          </Switch>
          <Footer />
        </div>
    )

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps, { logout })(Dashboard);
