import React, { useState } from 'react';
// import Profile from '../components/profile/Profile'
import ProfileCard from '../components/profile/ProfileCard'
import Chat from '../components/message/Chat'

function ChatProfileContainer(props) {
  const [toggle, setToggle] = useState(false);

  return(
      <div >


      {toggle ? (
        <Chat {...props} toggle={setToggle} />
      ) : (
        <ProfileCard {...props} toggle={setToggle} />
      )}


      </div>
  )


}

export default ChatProfileContainer;
