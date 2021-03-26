import React, { useState, useEffect, useRef } from 'react';
import Messages from "./Messages";
import MessageInput from "./MessageInput"
import ConversationHeader from "./ConversationHeader"
// import ConversationHeader from '../components/message/ConversationHeader'
import ConversationFooter from './ConversationFooter'
import ConversationBody from './ConversationBody'
import { connect } from 'react-redux'
import { createMessage, storeMessages } from "../../actions/MessageActions";


function Conversation(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  // const bottomRef = useRef();

  // const scrollToBottom = () => {
  //      bottomRef.current.scrollIntoView({
  //      behavior: "smooth",
  //      block: "start",
  //      });
  //  };


useEffect(() => {
  props
  .storeMessages(props.conversation.id)
  .then(() => {
    setLoading(true);

  })
  .catch((error) => {
    setError(error);
  });

}, []);
// debugger
if (loading === false){
      return(
        <div>loading messages</div>
      )
    } else if (error){
      return(
        <div>Unable to load messages</div>
      )
     } else {
        return(
          <div class="card">
            <ConversationHeader toggle={props.toggle} selectedUser={props.selectedUser}/>
            <Messages currentUser={props.currentUser} selectedUser={props.selectedUser} conversation={props.conversation} messages={props.messages}/>
            <MessageInput currentUser={props.currentUser} conversation={props.conversation} createMessage={props.createMessage}/>
          </div>
        )
      }

}
const mapStateToProps = (state) => ({

  messages: state.messagesStore.messages,

});

export default connect(mapStateToProps, {createMessage, storeMessages})(Conversation);
