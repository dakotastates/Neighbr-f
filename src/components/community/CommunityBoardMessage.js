import React from 'react'

function CommunityBoardMessage(props) {
  const { message } = props;
// debugger
  return (
    <div>
    {message.message} - {message.user.username} - {message.created_at}
    <br />
    </div>
  )

}

export default CommunityBoardMessage
