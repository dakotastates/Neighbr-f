import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { storeMessages } from "../actions/MessageActions";

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
debugger
  return (
    <h1>Messages Container</h1>
  )

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
  messages: state.messagesStore.messages,


});

export default connect(mapStateToProps, { storeMessages })(MessagesContainer)
