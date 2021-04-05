import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { storeBulletins, updateBulletin, createBulletin, createComment, deleteBulletin } from "../actions/BulletinActions";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Bulletin from '../components/bulletin/Bulletin'
import BulletinForm from '../components/bulletin/BulletinForm'
// import UserDrawerList from '../components/profile/UserDrawerList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function BulletinsContainer(props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const classes = useStyles();

  useEffect(() => {
    props
    .storeBulletins()
    .then(() => {
      setLoading(true);

    })
    .catch((error) => {

      setError(error);
    });

  }, []);

  let bulletinsList;

  if (loading === false){
        return(
          <div className={classes.root}><CircularProgress /></div>
        )
      } else if (error){
        return(
          <div>Unable to Load Bulletins.</div>
        )
       } else {
         // debugger
         let bulletins
          if (props.bulletins.length > 0){

            if(props.selectedUser){
              // debugger
              bulletins = props.bulletins.filter(bulletin=> bulletin.user.id === props.selectedUser.id)
              // bulletins = props.selectedUser.bulletins
            } else{
              bulletins = props.bulletins
            }

            // if (bulletins.length > 0){
              bulletinsList = bulletins.map(bulletin =>{
               return(
                <Bulletin deleteBulletin={props.deleteBulletin} currentUser={props.user} createComment={props.createComment} updateBulletin={props.updateBulletin} bulletin={bulletin}/>
               )
             })
           // } else{
           //   return <h5>No Bulletins for {props.selectedUser.first_name}... Yet!</h5>
           // }


       } else {
         return <h3>No Bulletins</h3>
       }
       }



  return (
    <div >
    <BulletinForm currentUser={props.user} createBulletin={props.createBulletin} />
    {bulletinsList}
    </div>
  );
}

const mapStateToProps = (state) => ({
  bulletins: state.bulletinsStore.bulletins,
  user: state.usersStore.user
});

export default connect(mapStateToProps, {storeBulletins, createBulletin, createComment, updateBulletin, deleteBulletin})(BulletinsContainer);
