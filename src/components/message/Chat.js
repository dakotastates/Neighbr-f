import React from 'react'


function Chat(props) {




        return(
            <div>
              <h1>Chat</h1>
              <button onClick={()=>props.toggle(false)}>Profile</button>
            </div>
        )

}


export default Chat;
