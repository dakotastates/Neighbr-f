import React, { useState, useEffect } from 'react';
import Conversation from './Conversation'
import { connect } from 'react-redux'
import { createConversation } from "../../actions/MessageActions";


function Chat(props) {
  // debugger
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
  // debugger
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


export default connect(mapStateToProps, {createConversation})(Chat);

// <button onClick={()=>props.toggle(false)}>Back to Profile</button>
// <div class="card">
