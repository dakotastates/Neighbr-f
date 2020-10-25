import React from 'react'
import { connect } from "react-redux";
// import ProfilesContainer from "../containers/ProfilesContainer";


class Home extends React.Component {

    render(){
      const { user } = this.props;
      // debugger
        return(
            <div>
              <h1>Welcome {user.username}</h1>


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps)(Home);
