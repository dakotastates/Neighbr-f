import React, { useState } from 'react';



function CurrentUserProfile(props) {
  // const [toggleChat, setToggleChat] = useState(false);
  const { id, first_name, profile } = props.user.user;
  // const { bio } = profile;
  // debugger



  return(
    <div class="card-body msg_card_body">
      <div class="card">
        <h2>{profile.bio}</h2>
        <button>Edit Profile</button>
      </div>
    </div>
  )
}

export default CurrentUserProfile;
