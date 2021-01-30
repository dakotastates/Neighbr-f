import React, { useEffect } from 'react'
import Profile from "../components/profile/Profile";
import { connect } from 'react-redux'
import { showUser } from "../actions/UserActions";


function ProfileContainer(props) {

  useEffect(() => {
    props
    .showUser(props.match.params.id)
    // .catch((error) => {
    //   alert(error);
    // });
  }, []);

const { profile } = props

  return (
    <div>

    {props.profile.username ? <Profile />:<h1>Profile not Found</h1>}


    </div>
  )

}

const mapStateToProps = (state) => ({

  profile: state.usersStore.profile,

});

export default connect(mapStateToProps, {showUser})(ProfileContainer)
