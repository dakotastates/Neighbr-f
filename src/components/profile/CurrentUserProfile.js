import React, { useState } from 'react';



function CurrentUserProfile(props) {
  // const [toggleChat, setToggleChat] = useState(false);
  const { id, first_name, profile } = props.user.user;
  // const { bio } = profile;
  // debugger



  return(
    <div>
    <h2>{profile.bio}</h2>
    <button>Edit Profile</button>
    </div>
  )
}

export default CurrentUserProfile;
