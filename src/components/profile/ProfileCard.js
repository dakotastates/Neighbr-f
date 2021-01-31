import React, { useState } from 'react';



function ProfileCard(props) {

const { id, first_name, profile } = props.user.user;

  return(
    <div>
    {profile ? <h2>Bio: {profile.bio}</h2>:<h1>Profile Not Set</h1>}
    <button onClick={()=>props.toggle(true)}>Chat</button>
    </div>
  )
}

export default ProfileCard;
