import React, { useState } from 'react';
import { createBulletin } from "../../actions/BulletinActions";
import { connect } from 'react-redux'




function ProfilePostForm(props) {
  const [state, setState] = useState({
    bulletin: "",
    user_id: props.currentUser.id,
    profile_id: null
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props
      .createBulletin(state)
      .then(() => {

      })
      .catch((error) => {
        alert(error);
      });
    setState({
      bulletin: ""
    })
  };

    // const { handleLogout } = props;

  return(
    <div class="profile-card gedf-card">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                        a publication</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                    <div class="form-group">
                        <label class="sr-only" for="message">post</label>
                        <textarea class="form-control" name="bulletin" id="message" rows="3" onChange={handleOnChange} placeholder="What are you thinking?"></textarea>
                    </div>

                </div>
                <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                    <div class="form-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" />
                            <label class="custom-file-label" for="customFile">Upload image</label>
                        </div>
                    </div>
                    <div class="py-4"></div>
                </div>
            </div>
            <div class="btn-toolbar justify-content-between">
                <div class="btn-group">
                    <button type="submit" onClick={onSubmit} class="btn btn-primary">share</button>
                </div>
                <div class="btn-group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-globe"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="#"><i class="fa fa-globe"></i> Public</a>
                        <a class="dropdown-item" href="#"><i class="fa fa-users"></i> Friends</a>
                        <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Just me</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default connect(null, {createBulletin})(ProfilePostForm);
