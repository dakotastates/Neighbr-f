import React, { useState } from 'react';
import CurrentUserProfile from './CurrentUserProfile';
import ProfileCard from './ProfileCard';



function Profile(props) {
  const { id, first_name, profile } = props.user.user;


    if (props.currentUser.id === id){
        return(<CurrentUserProfile {...props} />)
      } else{
        return(<ProfileCard {...props} toogle={props.toggle}/>)
      }
}

export default Profile;
