import React from 'react'
import CommunityBoardMessage from "./CommunityBoardMessage";


function CommunityBoardMessages(props) {
  const { boardMessages } = props;

  const boardMessageList = boardMessages.map(message => {
      return (
        <CommunityBoardMessage
            key={message.id}
            message={message}
        />
      )
    });

// debugger
  return (
    <div style={{ border:`solid` }}>
      <ul>
        {boardMessageList}
      </ul>

    </div>
  )

}

export default CommunityBoardMessages
