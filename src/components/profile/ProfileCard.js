import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileCardFooter from './ProfileCardFooter'
import ProfileCardBody from './ProfileCardBody'





function ProfileCard(props) {

  const handleToggle = () =>{
    props.toggle(true)
  }



  const { id, first_name, profile } = props.user.user;

  return(
    <div class="card">
      <ProfileHeader selectedUser={props.user} />
      <ProfileCardBody {...props} />
      <ProfileCardFooter />
      <button onClick={handleToggle}>Chat</button>

    </div>
  )
}

export default ProfileCard;

// <button onClick={()=>props.toggle(true)}>Chat</button>
