import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import {updateBulletin } from "../actions/BulletinActions";



function LikesContainer(props) {

  const [state, setState] = useState({
    bulletin_id: props.bulletin.id,
    user_id: props.currentUser.id
  });

  const handleLike = (e) =>{
    e.preventDefault()
    props
      .updateBulletin(state)
      .then(()=>{

      })
      .catch(()=>{

      })
  }

  return (
    <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span onClick={handleLike} class="ml-1">Like</span></div>
  )

}

export default connect(null, {updateBulletin})(LikesContainer)
