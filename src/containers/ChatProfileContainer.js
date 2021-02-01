import React, { useState } from 'react';
import Profile from '../components/profile/Profile'
import Chat from '../components/message/Chat'

function ChatProfileContainer(props) {
  const [toggle, setToggle] = useState(false);

  return(
      <div >

      <p id="simple-modal-description">
      {toggle ? (
        <Chat {...props} toggle={setToggle} />
      ) : (
        <Profile {...props} toggle={setToggle} />
      )}
      </p>

      </div>
  )


}

export default ChatProfileContainer;
