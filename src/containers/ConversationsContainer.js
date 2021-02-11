import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { storeConversations } from "../actions/MessageActions";
import ConversationsList from "../components/message/ConversationsList";


function ConversationsContainer(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    // debugger
    props
    .storeConversations()
    .then(() => {
      setLoading(true);

    })
    .catch((error) => {
      setError(error);
    });

  }, []);

// const { messages, user } = props;
// // debugger
if (loading === false){
      return(
        <div>Loading Conversations</div>
      )
    } else if (error){
      return(
        <div>Unable to Load Conversations.</div>
      )
     } else {

         return (
              <div >
             <ConversationsList conversations={props.conversations}/>
             </div>
         )
       };

}

const mapStateToProps = (state) => ({
  // user: state.usersStore.user,
  conversations: state.messagesStore.conversations,


});

export default connect(mapStateToProps, {storeConversations})(ConversationsContainer)
// export default connect(mapStateToProps, { storeMessages })(MessagesContainer)
