import React, { useState } from 'react';
import EditProfile from './EditProfile'
import EditUser from './EditUser'
import EditProfileImage from './EditProfileImage'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ProfilePostCard from './ProfilePostCard'
import ProfilePostForm from './ProfilePostForm'
import NeighborshipsContainer from '../../containers/NeighborshipsContainer'


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});


function ProfileCardBody(props) {
  // const { id, first_name, profile } = props.selectedUser.user
  const { bio, cover_image, headline, occupations, hometown, status } = props.profile

  const { classes } = props;
  const { id, first_name, middle_name, last_name, birthday, gender, phone, email, neighborships } = props.profile.user
  const [toggleEdit, setToggleEdit] = useState((props.currentUser.id === id) ? true : false);
  // const [toggleForm, setToggleForm] = useState(false)
  const [toggleForm, setToggleForm] = useState({
    bio: false,
    email: false,
    hometown: false,
    occupations: false,
    status: false,
    birthday: false,
    gender: false,
    phone: false,
    name: false
  })

  const handleEdit = (e) =>{
    // debugger
    const { name } = e.target;
    setToggleForm(toggleForm => ({ ...toggleForm, [name]: true }));
  }

  // debugger

  return(
    <div class="card-body msg_card_body">

            <div class="bg-white shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-4 cover">
                    <div class="media align-items-end profile-head">
                        <div class="profile mr-3"> {props.profile.featured_image ? <img src={props.profile.featured_image.url} alt={props.profile.first_name} className="rounded-circle medium_user_img"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.profile.first_name} className="rounded-circle medium_user_img"/>}<a href="#" class="btn btn-outline-dark btn-sm btn-block" >Follow</a></div>
                        <div class="media-body mb-5 text-white">
                            <h4 class="mt-0 mb-0">{toggleForm.name ? <div> <EditUser data={"name"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> {first_name} {middle_name} {last_name}  {toggleEdit ? <button name="name" onClick={handleEdit}>Edit Name</button> : null}<br/> </div>}</h4>
                            <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>{toggleForm.hometown ? <div> <EditProfile data={"hometown"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/></div> :  <div> hometown: {hometown.hometown}  {toggleEdit ? <button name="hometown" onClick={handleEdit}>Edit hometown</button> : null}<br/> </div>}</p>
                        </div>
                    </div>
                </div>
                <div class="bg-light p-4 d-flex justify-content-end text-center">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block">0</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Bulletins</small>
                        </li>
                        <li class="list-inline-item">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-mdb-container="body"
                            data-mdb-toggle="popover"
                            data-mdb-placement="bottom"
                            data-mdb-content="Testing Popover"
                            >
                            Popover
                          </button>

                        </li>

                    </ul>
                </div>
                <div class="px-4 py-3">
                    <h5 class="mb-0">About</h5>
                    <div class="p-4 rounded shadow-sm bg-light">
                        <p class="font-italic mb-0">{toggleForm.bio ? <div> <EditProfile data={"bio"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Bio: {bio}  {toggleEdit ? <button name="bio" onClick={handleEdit}>Edit Bio</button> : null}<br/> </div>}</p>
                        <p class="font-italic mb-0">{toggleForm.occupations ? <div> <EditProfile data={"occupations"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/></div> :  <div> Occupation: {occupations.last}  {toggleEdit ? <button name="occupations" onClick={handleEdit}>Edit Occupation</button> : null}<br/> </div>}</p>
                        <p class='font-italic mb-0'>{toggleForm.email ? <div> <EditUser data={"email"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/></div> : <div> Email: {email} {toggleEdit ? <button name="email" onClick={handleEdit}>Edit Email</button> : null}<br/></div>}</p>
                    </div>
                </div>
                <div class="py-4 px-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm" /></div>
                        <div class="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm" /></div>
                        <div class="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="img-fluid rounded shadow-sm" /></div>
                        <div class="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm" /></div>
                    </div>

                </div>
                <div class="px-4 py-3">
                    <ProfilePostForm currentUser={props.currentUser}/>
                    <ProfilePostCard />
                </div>
            </div>

    </div>

  )
}

export default withStyles(styles)(ProfileCardBody);


  // <h5 class="font-weight-bold mb-0 d-block">{neighborships.length}</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Neighborships</small>


// {toggleForm.name ? <div> <EditUser data={"name"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> {first_name} {middle_name} {last_name}  {toggleEdit ? <button name="name" onClick={handleEdit}>Edit Name</button> : null}<br/> </div>}
//
// {toggleForm.headline ? <div> <EditProfile data={"headline"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Headline: {headline.headline}  {toggleEdit ? <button name="headline" onClick={handleEdit}>Edit Headline</button> : null}<br/> </div>}
// Neighborships: {neighborships.length}
// <hr/>
// {props.profile.featured_image ? <img src={props.profile.featured_image.url} alt={props.profile.first_name} className="rounded-circle medium_user_img"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.profile.first_name} className="rounded-circle medium_user_img"/>}{toggleEdit ?  <EditProfileImage updateProfileImage={props.updateProfileImage} profile={props.profile} toggle={setToggleForm}/>: <div>Profile Image</div>}
// <hr/>
// {toggleForm.bio ? <div> <EditProfile data={"bio"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Bio: {bio}  {toggleEdit ? <button name="bio" onClick={handleEdit}>Edit Bio</button> : null}<br/> </div>}
// {toggleForm.email ? <div> <EditUser data={"email"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/></div> : <div> Email: {email} {toggleEdit ? <button name="email" onClick={handleEdit}>Edit Email</button> : null}<br/></div>}
// {toggleForm.occupations ? <div> <EditProfile data={"occupations"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/></div> :  <div> Occupation: {occupations.last}  {toggleEdit ? <button name="occupations" onClick={handleEdit}>Edit Occupation</button> : null}<br/> </div>}
// {toggleForm.hometown ? <div> <EditProfile data={"hometown"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/></div> :  <div> hometown: {hometown.hometown}  {toggleEdit ? <button name="hometown" onClick={handleEdit}>Edit hometown</button> : null}<br/> </div>}
// {toggleForm.status ? <div> <EditProfile data={"status"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Relationship Status: {status.status}  {toggleEdit ? <button name="status" onClick={handleEdit}>Edit Status</button> : null}<br/> </div>}
// {toggleForm.birthday ? <div> <EditUser data={"birthday"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Bithday: {birthday}  {toggleEdit ? <button name="birthday" onClick={handleEdit}>Edit Birthday</button> : null}<br/> </div>}
// {toggleForm.gender ? <div> <EditUser data={"gender"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Gender: {gender}  {toggleEdit ? <button name="gender" onClick={handleEdit}>Edit Gender</button> : null}<br/> </div>}
// {toggleForm.phone ? <div> <EditUser data={"phone"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Phone: {phone}  {toggleEdit ? <button name="phone" onClick={handleEdit}>Edit Phone</button> : null}<br/> </div>}
