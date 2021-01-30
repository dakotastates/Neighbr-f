import React, { useState } from 'react';



function Profile(props) {
  // const [toggleChat, setToggleChat] = useState(false);
  // const { first_name } = props.user;
  // debugger

  return(
    <div>
    <h1>Profile for </h1>
    <button onClick={()=>props.toggle(true)}>Chat</button>
    </div>

  )
}

export default Profile;
