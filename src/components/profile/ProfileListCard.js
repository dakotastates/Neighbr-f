import React, { useState } from 'react';
import { useHistory } from "react-router-dom";





function ProfileListCard(props) {

  const { id, first_name, profile } = props.user
  const history = useHistory();

  function handleClick() {
    history.push("/profile/" + `${id}`);
  }



  // debugger
  return(
    <div >
            {profile.featured_image ? <img src={profile.featured_image.url} alt={first_name} className="rounded-circle user_img" onClick={handleClick}/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={first_name} className="rounded-circle user_img" onClick={handleClick}/>} - {first_name}
    </div>
  )
}

export default ProfileListCard;
