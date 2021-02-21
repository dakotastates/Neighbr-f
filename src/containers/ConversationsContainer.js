import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { storeConversations } from "../actions/MessageActions";
import ConversationsList from "../components/message/ConversationsList";


function ConversationsContainer(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    props
    .storeConversations()
    .then(() => {
      setLoading(true);

    })
    .catch((error) => {
      setError(error);
    });

  }, []);

let conversationsList;
if (loading === false){
      return(
        <div>Loading Conversations</div>
      )
    } else if (error){
      return(
        <div>Unable to Load Conversations.</div>
      )
     } else {

       conversationsList = props.conversations.map(conversation =>{
         if (conversation){
           if (conversation.messages.length > 0){
              return(
                <ConversationsList key={conversation.id} conversation={conversation}/>
              )
            }
        } else {
          return ("You do not have any messages yet")
        }
      })

         return (
          <div >
              {conversationsList}
          </div>
         )
       };

}

const mapStateToProps = (state) => ({
  conversations: state.messagesStore.conversations,


});

export default connect(mapStateToProps, {storeConversations})(ConversationsContainer)
