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

  let sortedByDist;

  if (loading === false){
        return(
          <div className={classes.root}><CircularProgress /></div>
        )
      } else if (error){
        return(
          <div>Unable to Load Users.</div>
        )
       } else {
         const userDist = []

         function getDistance(lat1, lon1, lat2, lon2) {
          var R = 6371; // km
          var dLat = toRad(lat2-lat1);
          var dLon = toRad(lon2-lon1);
          var lat1 = toRad(lat1);
          var lat2 = toRad(lat2);

          var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = R * c;
          return d;
        }

        // Converts numeric degrees to radians
        function toRad(Value)
        {
            return Value * Math.PI / 180;
        }


          const usersList = props.users.map(user =>{
             let distance = getDistance(props.user.location.latitude, props.user.location.longitude, user.location.latitude, user.location.longitude)
             // debugger
             userDist.push({
              user: user,
              distance: distance
            })

         })
        const  sortByDist = userDist.sort((a,b) => a.distance - b.distance)



          sortedByDist = sortByDist.map(user =>{
            // debugger
          return(
            <React.Fragment key={user.id}>
              <UserDrawerList  currentUser={props.user} selectedUser={user.user}/>
            </React.Fragment>
        )
        })
       }



  return (
    <div >
    {sortedByDist}
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
