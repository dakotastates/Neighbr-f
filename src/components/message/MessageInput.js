import React, { useState } from 'react';


function MessageInput(props) {

  const [state, setState] = useState({
    body: "",
    user_id: props.currentUser.id
  });


  const handleOnChange = (e) => {


    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props
      .createMessage(props.conversation.id, state)
      .then(() => {

      })
      .catch((error) => {
        alert(error);
      });
    
  };


    return(
      <form onSubmit={onSubmit}>
        <textarea
          onChange={handleOnChange}
          name="body"
          placeholder="send a message"
          value={state.body}
        />
        <input type="submit" value="send"/>
      </form>
    )

}


export default MessageInput;
