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
              <textarea name="body" value={state.body} onChange={handleOnChange} class="form-control type_msg" placeholder="Type your message..."></textarea>
              <div class="input-group-append">
                <span onClick={onSubmit} class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
              </div>
            </div>



      </div>
      </form>
    )

}


export default MessageInput;


// <div class="input-group">
//
//     <div class="input-group-append">
//       <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
//     </div>
//
//     <textarea
//       class="form-control type_msg"
//       onChange={handleOnChange}
//       name="body"
//       placeholder="send a message"
//       value={state.body}
//       />
//       <div class="input-group-append">
//         <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
//
//       </div>
//
// </div>

// <input type="submit" value="send"/>

// <button type="submit"><i class="fas fa-location-arrow"></i></button>
