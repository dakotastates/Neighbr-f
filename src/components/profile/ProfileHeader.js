import React, { useState } from 'react';




function ProfileHeader(props) {

const currentUserHeader = () => {
  if (props.currentUser.id === props.selectedUser.user.id){
    return(
      <div class="video_cam">
        <span>Your profile</span>

      </div>
    )
    } else{
      return(
        <div class="video_cam">
          <span><i class="fas fa-video"></i></span>
          <span><i class="fas fa-phone"></i></span>
        </div>
      )
    }
  }
// debugger
  return(
    <div class="card-header msg_head">
      <div class="d-flex bd-highlight">
        <div class="img_cont">
          <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
          <span class="online_icon"></span>
        </div>
        <div class="user_info">
          <span>{props.selectedUser.user.first_name}</span>
        </div>
          {currentUserHeader()}
      </div>
      <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
      <div className="action_menu">
          <ul>
            <li><i class="fas fa-user-circle"></i> View profile</li>
            <li><i class="fas fa-users"></i> Add to close friends</li>
            <li><i class="fas fa-plus"></i> Add to group</li>
            <li><i class="fas fa-ban"></i> Block</li>
          </ul>
      </div>
    </div>
  )
}

export default ProfileHeader;
