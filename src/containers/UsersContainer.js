import React, { useState, useEffect } from 'react';
import Profile from "../components/profile/Profile";
import { connect } from 'react-redux'
import { storeUsers } from "../actions/UserActions";
import ProfileListCard from '../components/profile/ProfileListCard'



function UsersContainer(props) {
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



  if (loading === false){
        return(
          <div>Loading Users</div>
        )
      } else if (error){
        return(
          <div>Unable to Load Users.</div>
        )
       } else {

         const { users } = props

         const userList = users.map(user => {
           return (
              <ProfileListCard user={user} />
           )
         });

        return (
          <div>
            {userList}
            </div>
      );
    }

}

const mapStateToProps = (state) => ({

  users: state.usersStore.users,

});

export default (UsersContainer)
