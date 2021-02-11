import React from 'react'



function ProfilePostCard(props) {



    // const { handleLogout } = props;

  return(
    <div class="profile-card gedf-card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="mr-2">
                        <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                    </div>
                    <div class="ml-2">
                        <div class="h5 m-0">@LeeCross</div>
                        <div class="h7 text-muted">Miracles Lee Cross</div>
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
            <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> Hace 40 min</div>
            <a class="card-link" href="#">
                <h5 class="card-title">Totam non adipisci hic! Possimus ducimus amet, dolores illo ipsum quos
                    cum.</h5>
            </a>

            <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt fugit reprehenderit consectetur exercitationem odio,
                quam nobis? Officiis, similique, harum voluptate, facilis voluptas pariatur dolorum tempora sapiente
                eius maxime quaerat.
                <a href="https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU" target="_blank">https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU</a>
            </p>
        </div>
        <div class="profile-card-footer">
            <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
            <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
            <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
        </div>
    </div>


  )
}

export default ProfilePostCard;
