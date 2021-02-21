import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { storeConversations } from "../actions/MessageActions";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
// import ConversationsList from "../components/message/ConversationsList";

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
        return(
          <StyledMenuItem>
            <ListItemIcon>
              <Avatar>{conversation.receiver.first_name.charAt(0)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={conversation.messages.slice(-1)[0].body} />
          </StyledMenuItem>
      )
      })

         return (
          <div >
              {conversationsList}
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
// <ConversationsList conversations={props.conversations}/>
