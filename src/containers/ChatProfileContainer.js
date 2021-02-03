import React, { useState, useEffect } from 'react';
// import Profile from '../components/profile/Profile'
import ProfileCard from '../components/profile/ProfileCard'
import Chat from '../components/message/Chat'
import { connect } from 'react-redux'
import { getProfile, updateProfile, updateProfileImage } from "../actions/ProfileActions";
import { updateUser } from "../actions/UserActions";

function ChatProfileContainer(props) {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    props
    .getProfile(props.user.user.id)
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
        <div>Loading Profile</div>
      )
    } else if (error){
      return(
        <div>Unable to Load Profile.</div>
      )
     } else {
  return(
      <div >


      {toggle ? (
        <Chat {...props} toggle={setToggle} />
      ) : (
        <ProfileCard {...props} profile={props.profile} toggle={setToggle} />
      )}


      </div>
  )
}

}

const mapStateToProps = (state) => ({

  profile: state.profileStore.profile,

});

export default connect(mapStateToProps, {getProfile, updateProfile, updateUser, updateProfileImage})(ChatProfileContainer);
