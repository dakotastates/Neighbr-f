import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { createComment } from "../actions/BulletinActions";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Comment from '../components/bulletin/Comment'
// import UserDrawerList from '../components/profile/UserDrawerList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function CommentsContainer(props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const classes = useStyles();

  // useEffect(() => {
  //   props
  //   .storeComments()
  //   .then(() => {
  //     setLoading(true);
  //
  //   })
  //   .catch((error) => {
  //     setError(error);
  //   });
  //
  // }, []);



  let commentsList;

  // if (loading === false){
  //       return(
  //         <div className={classes.root}><CircularProgress /></div>
  //       )
  //     } else if (error){
  //       return(
  //         <div>Unable to Load Bulletins.</div>
  //       )
  //      } else {
         // debugger
          if (props.bulletin.comments.length > 0){
          commentsList = [...props.bulletin.comments].reverse().map(comment =>{

           return(
             <Comment key={comment.id} currentUser={props.user} comment={comment}/>
           )
         })
       }else {
         return <h3>No Comments... Yet</h3>
       }
       // }



  return (
    <div >
    {commentsList}
    </div>
  );
}

const mapStateToProps = (state) => ({
  // comments: state.bulletinsStore.comments,
  user: state.usersStore.user
});

export default connect(mapStateToProps, {createComment})(CommentsContainer);

// <Comment currentUser={props.user} createComment={props.createComment} comment={comment}/>
