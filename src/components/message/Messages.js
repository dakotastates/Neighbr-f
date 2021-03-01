import React from 'react'
import Message from "./Message";


function Messages(props) {

  const { messages, currentUser, selectedUser } = props;

  const messageList = messages.map(message => {
    return (
      <ul>
        <Message key={message.id} message={message} currentUser={currentUser} selectedUser={selectedUser}/>
      </ul>
    )
  });

  if(messages != ""){

    return (
      <div class="card-body msg_card_body">

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
