import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux'
// import { storeUsers } from "../actions/UserActions";
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Neighborship from '../components/profile/Neighborship'


function NeighborshipsContainer(props) {

  // const handleFollow = () =>{
  //   console.log(props)
  //   debugger
  // }

  // let followBtn;
  // if (props.currentUser.id != props.selectedUser.id){
  //   followBtn = <span  class="btn btn-trans aria-hidden='true' btn-icon fa fa-star-o " ></span>
  // }
  // debugger
  let neighborshipList;
  if(props.selectedUser.neighborships.length > 0){
    neighborshipList = props.selectedUser.neighborships.map(neighbor =>{
      return (
        <div>
            <h6>{neighbor.neighbor.first_name} {neighbor.neighbor.last_name}</h6> 
        </div>
      )


    })
  }else{
    neighborshipList = <h6>No Neighborships</h6>
  }



return(
  <div>
  {neighborshipList}

  </div>
)

}

// const mapStateToProps = (state) => ({
//   // users: state.usersStore.users,
//
// });

export default NeighborshipsContainer;



// props.currentUser.neighborships.map(neighbor => neighbor.neighbor_id)
