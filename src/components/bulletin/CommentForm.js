import React, { useState, useEffect } from 'react';

function CommentForm(props) {

  const [state, setState] = useState({
    comment: '',
    user_id: props.currentUser.id,
    bulletin_id: props.bulletin.id,
    // _destroy: false
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    debugger
    // props
    //   .updateBulletin(state)
    //   .then(() => {
    //     // setLoading(true);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    // setState({
    //   comment: ""
    // })
  };


  return (
    <div class="bg-light p-2">
        <div class="d-flex flex-row align-items-start">
          {props.currentUser.featured_image ? <img src={props.currentUser.featured_image.url} alt={props.currentUser.first_name} width="40" class="rounded-circle"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.currentUser.first_name} width="40" class="rounded-circle"/>}
          <textarea onChange={handleOnChange} name="comment" class="form-control ml-1 shadow-none textarea"></textarea>
        </div>
        <div class="mt-2 text-right">
          <button class="btn btn-primary btn-sm shadow-none" onClick={onSubmit} type="button">Post comment</button>
          <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
        </div>
    </div>

  )

}

export default CommentForm
