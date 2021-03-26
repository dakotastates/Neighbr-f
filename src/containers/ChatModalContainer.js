import React, { useState, useEffect } from 'react';
import Conversation from '../components/message/Conversation'
import { connect } from 'react-redux'
import { createConversation } from "../actions/MessageActions";

function ChatModalContainer(props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [state, setState] = useState({
    sender_id: props.currentUser.id,
    receiver_id: props.selectedUser.id
  });

  useEffect(() => {
    props
    .createConversation(state)
    .then(() => {
      setLoading(true);

    })
    .catch((error) => {
      setError(error);
    });

  }, []);

  if (loading === false){
        return(
          <div>Creating Conversation</div>
        )
      } else if (error){
        return(
          <div>Unable to create Conversation</div>
        )
       } else {
        return(
            <div>
                <Conversation toggle={props.toggle} selectedUser={props.selectedUser} currentUser={props.currentUser} conversation={props.conversation}/>
            </div>
        )
      }
  }

const mapStateToProps = (state) => ({
  conversation: state.messagesStore.conversation,
});



export default connect(mapStateToProps, {createConversation})(ChatModalContainer);
