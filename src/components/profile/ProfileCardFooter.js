import React, { useState } from 'react';




function ProfileCardFooter(props) {
  const handleToggle = () =>{
    props.toggle(true)
  }



    if (props.currentUser.id === props.selectedUser.user.id){
      return(
        <div class="card-footer">
          <button>Edit</button>
        </div>
      )
      } else{
        return(
          <div class="card-footer">
            <button onClick={handleToggle}>Chat</button>
          </div>
        )
      }

// debugger
  // return(
  //   <div class="card-footer">
  //     <button onClick={handleToggle}>Chat</button>
  //   </div>
  // )
}

export default ProfileCardFooter;
