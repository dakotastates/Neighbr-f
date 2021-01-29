import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { storeMessages } from "../actions/MessageActions";
import Conversations from "../components/message/Conversations";


function MessagesContainer(props) {

  useEffect(() => {
    // debugger
    props
    .storeMessages(props.user.id);
    // .catch((error) => {
    //   alert(error);
    // });
  }, []);

const { messages, user } = props;
// debugger
  return (
    <div>
      <Conversations messages={messages} user={user}/>
    </div>
  )

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
  messages: state.messagesStore.messages,


});

export default connect(mapStateToProps, { storeMessages })(MessagesContainer)
