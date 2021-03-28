import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import {createLike } from "../actions/BulletinActions";



function LikesContainer(props) {

  // let likeId
  // if (props.bulletin.likes){
  // likeId=  props.bulletin.likes.reduce()
  // }

//   let likeId = props.bulletin.likes.reduce(function (likes, like) {
//   if (like.user_id === props.currentUser.id) {
//     return likes
//   }
//
// }, [])
  // console.log(likeId)


// let likeId = props.bulletin.likes.reduce((acc, like) => {
//
//     if (like.bulletin_id === props.bulletin.id) {
//         acc= like.id
//     }
//
//     return acc;
// }, []);
//
// console.log(likeId);

  const [state, setState] = useState({
    id: null,
    bulletin_id: props.bulletin.id,
    user_id: props.currentUser.id,
    _destroy: false
  });



  const [like, setLike] = useState(false);

  const handleLike = (e) =>{
    e.preventDefault()
    props
      .createLike(state)
      .then(()=>{
        setLike(!like)
        // console.log(props.bulletin.likes)
      })
      .catch(()=>{

      })
  }

  const handleUnlike = (e) =>{
    e.preventDefault()
    state._destroy = true

    const likeId = props.bulletin.likes.reduce((acc, current) => {if(current.user_id === props.currentUser.id) {return current.id}}, [])
    // debugger
    // console.log(props.bulletin.id)
    // setState({
    //   _destroy: true
    // })
    // console.log(state)
    state.id = likeId

    props
      .createLike(state)
      .then(()=>{
        setLike(!like)
        state.id = null
        state._destroy = false
        // console.log(props.bulletin.likes)
        // console.log(state)
      })
      .catch(()=>{

      })
  }

  useEffect(() => {
  props.bulletin.likes.map(like =>{
    if(like.user_id === props.currentUser.id){
      setLike(true)
      // console.log(props.bulletin.likes)
    }
  })

}, [like]);


  let likeBtn;

 // props.bulletin.likes.map(like=>{
  if (like){
    likeBtn = <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span onClick={handleUnlike} class="ml-1">UnLike</span></div>
  }else{
    likeBtn = <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span onClick={handleLike} class="ml-1">Like</span></div>
  }
// })


  return (
    <div>
      {likeBtn}
    </div>
  )

}

export default connect(null, {createLike})(LikesContainer)
