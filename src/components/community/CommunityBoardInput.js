import React from 'react'

function CommunityBoardInput(props) {

  return (
    <div>
    <h4>Community Board Input</h4>
    <form >
      <textarea
          name="cbInput"
          placeholder="Post Message on Community Board"
      />
      <input
          type="submit"
          value="Post"
      />
    </form>
    </div>
  )

}

export default CommunityBoardInput
