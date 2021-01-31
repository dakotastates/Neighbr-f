import React, { useState } from 'react';




function ProfileCard(props) {

  const handleToggle = () =>{
    props.toggle(true)
  }



  const { id, first_name, profile } = props.user.user;

  return(
    <div>
    {profile ? <h2>Bio: {profile.bio}</h2>:<h1>Profile Not Set</h1>}
    <button onClick={handleToggle}>Chat</button>
    </div>
  )
}

export default ProfileCard;

// <button onClick={()=>props.toggle(true)}>Chat</button>
