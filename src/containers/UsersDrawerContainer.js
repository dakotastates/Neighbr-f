import React, { useState, useEffect } from 'react';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux'
import { storeUsers } from "../actions/UserActions";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserDrawerList from '../components/profile/UserDrawerList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function UsersDrawerContainer(props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const classes = useStyles();

  useEffect(() => {
    props
    .storeUsers()
    .then(() => {
      setLoading(true);

    })
    .catch((error) => {
      setError(error);
    });

  }, []);

  let usersList;

  if (loading === false){
        return(
          <div className={classes.root}><CircularProgress /></div>
        )
      } else if (error){
        return(
          <div>Unable to Load Users.</div>
        )
       } else {
          usersList = props.users.map(user =>{
           return(
             <UserDrawerList key={user.id} currentUser={props.user} selectedUser={user}/>
         )
         })
       }



  return (
    <div >
    {usersList}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.usersStore.users,
  user: state.usersStore.user
});

export default connect(mapStateToProps, {storeUsers})(UsersDrawerContainer);

// <ListItem button key={user.id}>
//   <ListItemIcon>{user.profile.featured_image ? <Avatar alt={user.first_name} src={user.profile.featured_image.url}/> : <Avatar>{user.first_name.charAt(0)}</Avatar> }</ListItemIcon>
//   <ListItemText primary={user.first_name} />
// </ListItem>
