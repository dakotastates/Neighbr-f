import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { storeBulletins, updateBulletin } from "../actions/BulletinActions";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import BulletinList from '../components/bulletin/BulletinList'
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
          if (props.bulletins.length > 0){
          bulletinsList = props.bulletins.map(bulletin =>{

           return(
          <BulletinList currentUser={props.user} updateBulletin={props.updateBulletin} bulletin={bulletin}/>
         )
         })
       } else {
         return <h1>No Bulletins Yet</h1>
       }
       }



  return (
    <div >
    {bulletinsList}
    </div>
  );
}

const mapStateToProps = (state) => ({
  bulletins: state.bulletinsStore.bulletins,
  user: state.usersStore.user
});

export default connect(mapStateToProps, {storeBulletins, updateBulletin})(BulletinsContainer);
