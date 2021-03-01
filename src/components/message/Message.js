import React from 'react'
import Avatar from '@material-ui/core/Avatar';


function Message(props) {


const { message, currentUser, selectedUser } = props;
        // debugger

        const userMessageDelegation = () => {
          if (currentUser.id === message.user_id){
            return(
              <div class="d-flex justify-content-end mb-4">
                <div class="msg_container_send">
                  {message.body}
                  <span class="msg_time_send">{message.created_at}</span>
                </div>
                <div class="img_cont_msg">
                <Avatar alt={currentUser.first_name} src={currentUser.profile.featured_image.url}/> : <Avatar>{currentUser.first_name.charAt(0)}</Avatar>
                </div>
              </div>
            )
          } else {
            return (
              <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <Avatar alt={selectedUser.first_name} src={selectedUser.profile.featured_image.url}/> : <Avatar>{selectedUser.first_name.charAt(0)}</Avatar>
                </div>
                <div class="msg_container">
                  {message.body}
                  <span class="msg_time">{message.created_at}</span>
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
