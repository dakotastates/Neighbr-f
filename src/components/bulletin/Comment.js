import React, { useState, useEffect } from 'react';

function Comment(props) {

  const [state, setState] = useState({
    user_id: props.currentUser,
    bulletin_id: props.bulletin.id,
    comment: ""
  });


  const handleComment = (e) => {
    e.preventDefault();
    // debugger
    props
      .createComment(state)
      .then(() => {

      })
      .catch((error) => {
        alert(error);
      });

  };


  return (
    <div class="comment">
         <div class="media">
           <div class="media-left">
             <a href="#">
               <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..."/>
             </a>
           </div>
           <div class="media-body">
             <a href="#" class="anchor-username"><h4 class="media-heading">Media heading</h4></a>
             <section class="post-body">
                 <p>Comment Testing</p>
             </section>
             <a href="#" class="anchor-time">51 mins</a>
           </div>
         </div>
    </div>

  )

}

export default Comment
