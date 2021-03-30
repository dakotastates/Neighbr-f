import React, { useState, useEffect } from 'react';
import EditProfile from '../components/profile/EditProfile'
import EditUser from '../components/profile/EditUser'
import RecentPhotos from '../components/profile/RecentPhotos'
import BulletinExample from '../components/bulletin/BulletinExample'
import BulletinForm from '../components/bulletin/BulletinForm'
import BulletinsContainer from './BulletinsContainer'
import EditProfileImage from '../components/profile/EditProfileImage'
// import NeighborshipsContainer from './NeighborshipsContainer'
import NeighborshipPopover from '../components/profile/NeighborshipPopover'



function ProfileModalContainer(props) {
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggle = () =>{
    props.toggle(true)
  }

  const handleEditBtn = () =>{
    setToggleEdit(true)
    // debugger
  }

  const handleShowBtn = () =>{
    setToggleEdit(false)

    // debugger
  }

  const [toggleForm, setToggleForm] = useState({
    bio: false,
    email: false,
    hometown: false,
    occupations: false,
    status: false,
    birthday: false,
    gender: false,
    phone: false,
    name: false,
    city: false,
    image: false
  })

  const handleEdit = (e) =>{
    // debugger
    const { name } = e.target;
    setToggleForm(toggleForm => ({ ...toggleForm, [name]: true }));
  }

  let btnChatEdit;
  if (props.currentUser.id === props.selectedUser.id){
    if (toggleEdit){
      btnChatEdit = <span onClick={handleShowBtn} class="btn btn-outline-dark btn-sm btn-block">Show Profile</span>
    }else {
      btnChatEdit = <span onClick={handleEditBtn} class="btn btn-outline-dark btn-sm btn-block">Edit Profile</span>
    }
  } else {
      btnChatEdit = <span onClick={handleToggle} class="btn btn-outline-dark btn-sm btn-block">Chat</span>
  }

  // const handleFollowPopover = () =>{
  //
  // }

  let followBtn;
  if (props.currentUser.id != props.selectedUser.id){
    followBtn = <span  class="btn btn-trans aria-hidden='true' btn-icon fa fa-star-o " ></span>
  }


// debugger
  return(
    <div class="card">
      <div class="card-body msg_card_body">

          <div class="bg-white shadow rounded overflow-hidden">
              <div class="px-4 pt-0 pb-4 cover">
                  <div class="media align-items-end profile-head">
                      <div class="profile mr-3">
                        {toggleForm.image ?
                          <div> <EditProfileImage updateProfile={props.updateProfile} selectedUser={props.selectedUser} profile={props.profile} toggle={setToggleForm}/> </div>
                          :
                          <div> {props.selectedUser.featured_image ? <img src={props.selectedUser.featured_image.url} alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/>}  <br/>{toggleEdit ? <button name="image" onClick={handleEdit}>Edit Image</button> : null}<br/> </div>}

                        {btnChatEdit}
                      </div>
                      <div class="media-body mb-5 text-white">
                          <h4 class="mt-0 mb-0">{toggleForm.name ? <div> <EditUser data={"name"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> {props.selectedUser.first_name} {props.selectedUser.middle_name} {props.selectedUser.last_name}  {toggleEdit ? <button name="name" onClick={handleEdit}>Edit Name</button> : null}<br/> </div>}</h4>
                          <div class="d-flex flex-row-reverse">
                            {followBtn}
                          </div>

                          <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>{toggleForm.city ? <div> <EditProfile data={"city"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> {props.selectedUser.profile.city.city}  {toggleEdit ? <button name="city" onClick={handleEdit}>Edit Current Location</button> : null}<br/> </div>}</p>
                      </div>
                  </div>
              </div>
              <div class="bg-light p-4 d-flex justify-content-end text-center">
                  <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">{props.selectedUser.bulletins.length}</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Bulletins</small>
                      </li>
                      <li class="list-inline-item"  >
                        <NeighborshipPopover selectedUser={props.selectedUser} />
                      </li>
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">0</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Following</small>
                      </li>
                  </ul>
              </div>
              <div class="px-4 py-3">
                  <h5 class="mb-0">About</h5>
                  <div class="p-4 rounded shadow-sm bg-light">


                      <p class="font-italic mb-0">{toggleForm.bio ? <div> <EditProfile data={"bio"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Bio: {props.selectedUser.profile.bio}  {toggleEdit ? <button name="bio" onClick={handleEdit}>Edit Bio</button> : null}<br/> </div>}</p>
                      <p class='font-italic mb-0'>{toggleForm.email ? <div> <EditUser data={"email"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/></div> : <div> Email: {props.selectedUser.email} {toggleEdit ? <button name="email" onClick={handleEdit}>Edit Email</button> : null}<br/></div>}</p>
                  </div>
              </div>

              <div class="container bootdey">
              <div class="col-md-12 bootstrap snippets">
                <BulletinsContainer selectedUser={props.selectedUser}/>
                </div>
              </div>
          </div>
        </div>
      </div>

  )


}



export default ProfileModalContainer;


// <li class="list-inline-item"  >
//     <h5 class="font-weight-bold mb-0 d-block " >{props.selectedUser.neighborships.length}</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Neighborships</small>
// </li>


// <p class="font-italic mb-0">{toggleForm.occupations ? <div> <EditProfile data={"occupations"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/></div> :  <div> Occupation: {props.selectedUser.profile.occupations.last}  {toggleEdit ? <button name="occupations" onClick={handleEdit}>Edit Occupation</button> : null}<br/> </div>}</p>
