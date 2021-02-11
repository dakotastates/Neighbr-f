import React, { useEffect } from 'react'
import FullProfile from "../components/profile/FullProfile";
import { connect } from 'react-redux'
import { showUser } from "../actions/UserActions";



function ProfileContainer(props) {

  useEffect(() => {
    props
    .showUser(props.match.params.id)
    .catch((error) => {
      alert(error);
    });
  }, []);

const { profile } = props
  // debugger
  return (
    <div>

    {props.profile ? <FullProfile />:<h1>Profile not Found</h1>}


    </div>
  )

}

const mapStateToProps = (state) => ({

  profile: state.usersStore.profile,

});

export default connect(mapStateToProps, {showUser})(ProfileContainer)
