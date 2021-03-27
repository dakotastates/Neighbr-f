import React, { useState, useEffect } from 'react';

function CommentForm(props) {



  return (
    <div class="bg-light p-2">
        <div class="d-flex flex-row align-items-start">
          {props.comment.featured_image ? <img src={props.comment.featured_image.url} alt={props.comment.user.first_name} width="40" class="rounded-circle"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.comment.user.first_name} width="40" class="rounded-circle"/>}
          <textarea class="form-control ml-1 shadow-none textarea"></textarea>
        </div>
        <div class="mt-2 text-right">
          <button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
          <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
        </div>
    </div>

  )

}

export default CommentForm
