import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm'
import Avatar from '@material-ui/core/Avatar';

function Comment(props) {

  const [toggleComments, setToggleComments] = useState(false);

  //
  // const handleComment = (e) => {
  //   e.preventDefault();
  //   // debugger
  //   props
  //     .createComment(state)
  //     .then(() => {
  //
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  //
  // };

  const handleToggleComments = () =>{
    console.log("toggle Comments")
    setToggleComments(true)
  }

  let commentForm;

  if (toggleComments) {
    commentForm = <CommentForm currentUser={props.currentUser}/>
  }

  let deletebtn;
  if(props.currentUser.id === props.comment.user.id){
    deletebtn= <span class="btn btn-trans btn-icon fa fa-trash add-tooltip" href="#"></span>
  }

  // <Avatar alt="Profile Image" src={props.comment.featured_image.url}/>
  // <Avatar>{props.commnet.user.first_name.charAt(0)}</Avatar>

  return (
    <div>
      <div class="media-block">
        <a class="media-left" href="#">{props.comment.featured_image ? <Avatar alt="Profile Image" src={props.comment.featured_image.url}/> : <Avatar>{props.commnet.user.first_name.charAt(0)}</Avatar>}</a>
        <div class="media-body">
          <div class="mar-btm">
            <a href="#" class="btn-link text-semibold media-heading box-inline">{props.comment.user.first_name} {props.comment.user.last_name}</a>
            <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> {props.comment.created_at}</p>
            <div class="d-flex flex-row-reverse">
              {deletebtn}
            </div>

          </div>

          <p>{props.comment.comment}</p>
          <div class="pad-ver">
            <div class="bg-white">
              {commentForm}
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  )

}

export default Comment



// <div class="comment">
//      <div class="media">
//        <div class="media-left">
//          <a href="#">
//            <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..."/>
//          </a>
//        </div>
//        <div class="media-body">
//          <a href="#" class="anchor-username"><h4 class="media-heading">Media heading</h4></a>
//          <section class="post-body">
//              <p>Comment Testing</p>
//          </section>
//          <a href="#" class="anchor-time">51 mins</a>
//        </div>
//      </div>
// </div>

// <div class="d-flex flex-row fs-12">
//   <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
//   <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span onClick={handleToggleComments} class="ml-1">Comment</span></div>
//   <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
// </div>
