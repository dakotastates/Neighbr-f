import React, { useState, useEffect } from 'react';

function CommentForm(props) {

  const [state, setState] = useState({


  });


  const handleComment = (e) => {
    e.preventDefault();
    // debugger
    // props
    //   .createComment(state)
    //   .then(() => {
    //
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });

  };


  return (
    <div>
    <form>
      <textarea />
    </form>
    </div>

  )

}

export default CommentForm
