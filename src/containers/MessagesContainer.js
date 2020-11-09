import React from 'react'
import { connect } from 'react-redux'
// import { showUser } from "../actions/UserActions";

function MessagesContainer(props) {

  return (
    <h1>Messages Container</h1>
  )

}

const mapStateToProps = (state) => ({

  messages: state.messagesStore.messages,

});

export default connect(mapStateToProps, null)(MessagesContainer)
