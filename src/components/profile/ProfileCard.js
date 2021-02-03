import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileCardFooter from './ProfileCardFooter'
import ProfileCardBody from './ProfileCardBody'





function ProfileCard(props) {

  // const handleToggle = () =>{
  //   props.toggle(true)
  // }



  // const { id, first_name, profile } = props.user.user;

  return(
    <div class="card">
      <ProfileHeader currentUser={props.currentUser} selectedUser={props.user} />
      <ProfileCardBody updateProfileImage={props.updateProfileImage} updateUser={props.updateUser} updateProfile={props.updateProfile} profile={props.profile} currentUser={props.currentUser}  selectedUser={props.user} />
      <ProfileCardFooter selectedUser={props.user} currentUser={props.currentUser} toggle={props.toggle}/>
    </div>
  )
}

export default ProfileCard;

// <button onClick={handleToggle}>Chat</button>

// <button onClick={()=>props.toggle(true)}>Chat</button>
