import React from 'react'


function Message(props) {


const { message, currentUser } = props;
        // debugger

        const userMessageDelegation = () => {
          if (currentUser.id === message.user_id){
            return(
              <div class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                  {message.body}
                  <span class="msg_time_send">8:55 AM, Today</span>
                </div>
                <div class="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
                </div>
              </div>
            )
          } else {
            return (
              <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
                </div>
                <div class="msg_cotainer">
                  {message.body}
                  <span class="msg_time">8:40 AM, Today</span>
                </div>
              </div>
            )
          }
        }


        return(
          <div>
            {userMessageDelegation()}
          </div>
        )

}


export default Message;
