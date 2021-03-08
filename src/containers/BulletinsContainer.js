import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { storeBulletins } from "../actions/BulletinActions";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
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
             <div class="profile-card gedf-card">
              <div class="card-header">
                     <div class="d-flex justify-content-between align-items-center">
                         <div class="d-flex justify-content-between align-items-center">
                             <div class="mr-2">
                                 <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                             </div>
                             <div class="ml-2">
                                 <div class="h5 m-0"></div>
                                 <div class="h7 text-muted">{bulletin.user.first_name} {bulletin.user.last_name}</div>
                             </div>
                         </div>
                         <div>
                             <div class="dropdown">
                                 <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     <i class="fa fa-ellipsis-h"></i>
                                 </button>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                     <div class="h6 dropdown-header">Configuration</div>
                                     <a class="dropdown-item" href="#">Save</a>
                                     <a class="dropdown-item" href="#">Hide</a>
                                     <a class="dropdown-item" href="#">Report</a>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>
               <div class="profile-card-body">
               <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{bulletin.created_at}</div>

               <p class="card-text">
               {bulletin.bulletin}
               </p>
               </div>
               <div class="profile-card-footer">
                  <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                  <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
               </div>
            </div>
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
  // user: state.usersStore.user
});

export default connect(mapStateToProps, {storeBulletins})(BulletinsContainer);
