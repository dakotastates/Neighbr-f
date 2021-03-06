import React, { useState, useEffect } from 'react';

function BulletinList(props) {

  const [state, setState] = useState({
    user_id: props.currentUser,
    bulletin_id: props.bulletin.id
  });


  const handleLike = (e) => {
    e.preventDefault();
    // debugger
    props
      .updateBulletin(state)
      .then(() => {

      })
      .catch((error) => {
        alert(error);
      });

  };


  return (
    <div class="profile-card gedf-card">
     <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="mr-2">
                        <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                    </div>
                    <div class="ml-2">
                        <div class="h5 m-0"></div>
                        <div class="h7 text-muted">{props.bulletin.user.first_name} {props.bulletin.user.last_name}</div>
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
      <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{props.bulletin.created_at}</div>

      <p class="card-text">
      {props.bulletin.bulletin}
      </p>
      </div>
      <div class="profile-card-footer">
         <a onClick={handleLike} class="card-link"><i class="fa fa-gittip"></i> Like</a>
         <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
      </div>
   </div>
  )

}

export default BulletinList
