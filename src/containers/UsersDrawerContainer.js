import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux'
import { storeUsers } from "../actions/UserActions";

// Fake Data Temp
// const users=[
//   {
//     id: 1,
//     name: "User 1",
//     avatar: "avatar",
//     distance: "3 ft"
//   },
//   {
//     id: 2,
//     name: "User 2",
//     avatar: "avatar",
//     distance: "10 miles"
//   },
//   {
//     id: 3,
//     name: "User 3",
//     avatar: "avatar",
//     distance: "455 ft"
//   }
// ]



function UsersDrawerContainer(props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

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
          <div>Loading Users</div>
        )
      } else if (error){
        return(
          <div>Unable to Load Users.</div>
        )
       } else {
          usersList = props.users.map(user =>{
           return(
            <ListItem button key={user.id}>
              <ListItemIcon><Avatar>{user.first_name.charAt(0)}</Avatar></ListItemIcon>
              <ListItemText primary={user.first_name} />
           </ListItem>
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
});

export default connect(mapStateToProps, {storeUsers})(UsersDrawerContainer);
