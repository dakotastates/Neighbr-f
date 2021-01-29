import React from 'react'
// import Message from "./Message";


function Conversations(props) {

const { messages, user } = props;
debugger
const conversations = messages.map(message => {
  // debugger
});

        return(
          <ul>
          {conversations}
          </ul>
              )

}


export default Conversations;
