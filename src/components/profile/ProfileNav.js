import React from 'react'



function ProfileNav(props) {



    // const { handleLogout } = props;

  return(
    <div>
    <nav class="navbar navbar-light bg-white">
            <a href="#" class="navbar-brand">Users Name</a>
            <form class="form-inline">
                <div class="input-group">
                    <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button" id="button-addon2" >
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </nav>


    </div>

  )
}

export default ProfileNav;
