import React, { useState } from 'react';




function ProfileCardBody(props) {
  const { id, first_name, profile } = props.user.user;
// debugger
  return(
    <div class="card-body msg_card_body">
      {profile ? <h2>Bio: {profile.bio}</h2>:<h1>Profile Not Set</h1>}
    </div>
  )
}

export default ProfileCardBody;
