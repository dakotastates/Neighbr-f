import React, { useState } from 'react';


function MessageInput(props) {

  const [state, setState] = useState({
    body: "",
    user_id: props.currentUser.id
  });


  const handleOnChange = (e) => {

// debugger
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // debugger
    props
      .createMessage(props.conversation.id, state)
      .then(() => {

      })
      .catch((error) => {
        alert(error);
      });
    setState({
      body: ""
    })
  };


    return(
      <form onSubmit={onSubmit}>
      <div class="card-footer">
        <div class="input-group">

            <div class="input-group-append">
              <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
            </div>

            <textarea
              class="form-control type_msg"
              onChange={handleOnChange}
              name="body"
              placeholder="send a message"
              value={state.body}
              />
              <div class="input-group-append">
                <button type="submit"><i class="fas fa-location-arrow"></i></button>
              </div>

        </div>
      </div>
      </form>
    )

}


export default MessageInput;

// <input type="submit" value="send"/>
