import React from 'react'
import Message from "./Message";


function Messages(props) {

  const { messages } = props;

  const messageList = messages.map(message => {
    return (
      <ul>
        <Message key={message.id} message={message}/>
      </ul>
    )
  });

  if(messages != ""){

    return (
      <div>
        message list
        {messageList}
      </div>
    );
  } else {
    return (<h2>Start of Conversation!</h2>)
  }


  // if (messages) {
  //     messages.map(message => {
  //
  //      return (
  //        <ul>
  //        <Message
  //            key={message.id}
  //            message={message}
  //        />
  //        </ul>
  //      )
  //    });
  //
  //   } else {
  //     return(<h2>Start a conversation</h2>)
  // }

}


export default Messages;
