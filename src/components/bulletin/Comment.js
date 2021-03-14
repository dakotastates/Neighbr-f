import React, { useState, useEffect } from 'react';

function Comment(props) {

  const [state, setState] = useState({
    user_id: props.currentUser,
    bulletin_id: props.bulletin.id,
    comment: ""
  });


  const handleComment = (e) => {
    e.preventDefault();
    // debugger
    props
      .createComment(state)
      .then(() => {

      })
      .catch((error) => {
        alert(error);
      });

  };


  return (


  )

}

export default Comment
