import React from 'react'
import Message from "./Message";


function Messages(props) {

const { messages, user } = props;

const messageList = messages.map(message => {
  return (
    <Message
        key={message.id}
        message={message}
        user={user}
    />
  )
});

        return(
          <ul>
            {messageList}
          </ul>
              )

}


export default Messages;
