import React, { useEffect, useRef } from 'react';
import Message from "./Message";


function Messages(props) {
  const bottomRef = useRef();
  const scrollToBottom = () => {
       bottomRef.current.scrollIntoView({
       behavior: "smooth",
       block: "start",
       });
   };

  const { messages, currentUser, selectedUser } = props;

  useEffect(() => {
       scrollToBottom()
   }, [messages])

   useEffect(() => {
       scrollToBottom()
   }, [])

  const messageList = messages.map(message => {
    return (
      <div>
        <ul>
          <Message key={message.id} bottomRef={props.bottomRef} message={message} currentUser={currentUser} selectedUser={selectedUser}/>
        </ul>
        <div ref={bottomRef} className="list-bottom"></div>
      </div>
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
