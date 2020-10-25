import React from 'react'
import { connect } from "react-redux";
import { logout } from "../../actions/AuthActions";
import { Switch} from "react-router-dom";
import PrivateRoute from "../../helpers/PrivateRoute";
// import Navbar from "./Navbar";
import Home from "../../pages/Home";
// import Problems from "../pages/Problems";
// import About from "../pages/About";
// import ReportProblem from "../components/problems/ReportProblem";
// import ProblemShow from "../pages/ProblemShow";
// import SubmitProposal from "../components/proposals/SubmitProposal";
// import Profile from "../pages/Profile";
// import Messages from "../pages/Messages";
// import Projects from "../pages/Projects";
// import Project from "../components/projects/Project";
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
          <h1>NeighbR</h1>
          <div className="header">

            <div className="logout">
            <br/>
              <button onClick={handleLogout}>Logout</button>
            </div>
          <br/>



          </div>

          <Switch>

            <PrivateRoute path="/" component={Home} />

          </Switch>

        </div>
    )

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps, { logout })(Dashboard);
