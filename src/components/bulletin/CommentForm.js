import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';

function CommentForm(props) {

  const [state, setState] = useState({
    id: null,
    bulletin_id: props.bulletin.id,
    user_id: props.currentUser.id,
    comment: "",
    _destroy: false
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // debugger
    setState(state => ( {...state, [name]: value }));
    // debugger
    // setState(prevState => ({
    //   bulletin_id: prevState.bulletin_id,
    //   comment: {
    //     ...prevState.comment,
    //     [name]: value
    //   }
    // }))
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(state)
    // debugger
    props
      .createComment(state)
      .then(() => {
        // setLoading(true);
      })
      .catch((error) => {
        alert(error);
      });
      setState({
        comment: ""
      })
  };

  // <Avatar alt="Profile Image" src={props.currentUser.featured_image.url}/>
  // <Avatar>{props.currentUser.first_name.charAt(0)}</Avatar>
  return (
    <div class="bg-light p-2">
        <div class="d-flex flex-row align-items-start">
          {props.currentUser.featured_image ? <Avatar alt="Profile Image" src={props.currentUser.featured_image.url}/> : <Avatar>{props.currentUser.first_name.charAt(0)}</Avatar>}
          <textarea onChange={handleOnChange} name="comment" class="form-control ml-1 shadow-none textarea"></textarea>
        </div>
        <div class="mt-2 text-right">
          <button class="btn btn-primary btn-sm shadow-none" onClick={onSubmit} type="button">Post comment</button>
          <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" onClick={()=>props.setToggleComments(false)} type="button">Cancel</button>
        </div>
    </div>

  )

}

export default CommentForm
