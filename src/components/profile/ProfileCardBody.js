import React, { useState } from 'react';
import EditProfile from './EditProfile'
import EditUser from './EditUser'
import EditProfileImage from './EditProfileImage'


function ProfileCardBody(props) {
  // const { id, first_name, profile } = props.selectedUser.user
  const { bio, cover_image, headline, occupations, hometown, status } = props.profile


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


  return(
    <div class="card-body msg_card_body">
    {toggleForm.name ? <div> <EditUser data={"name"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> {first_name} {middle_name} {last_name}  {toggleEdit ? <button name="name" onClick={handleEdit}>Edit Name</button> : null}<br/> </div>}
    {first_name} {middle_name} {last_name}<br/>
    {toggleForm.headline ? <div> <EditProfile data={"headline"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Headline: {headline.headline}  {toggleEdit ? <button name="headline" onClick={handleEdit}>Edit Headline</button> : null}<br/> </div>}
    Neighborships: {neighborships.length}
    <hr/>
    {toggleEdit ?  <EditProfileImage updateProfileImage={props.updateProfileImage} profile={props.profile} toggle={setToggleForm}/>: <div>Profile Image</div>}
    <hr/>
    {toggleForm.bio ? <div> <EditProfile data={"bio"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Bio: {bio}  {toggleEdit ? <button name="bio" onClick={handleEdit}>Edit Bio</button> : null}<br/> </div>}
    {toggleForm.email ? <div> <EditUser data={"email"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/></div> : <div> Email: {email} {toggleEdit ? <button name="email" onClick={handleEdit}>Edit Email</button> : null}<br/></div>}
    {toggleForm.occupations ? <div> <EditProfile data={"occupations"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/></div> :  <div> Occupation: {occupations.last}  {toggleEdit ? <button name="occupations" onClick={handleEdit}>Edit Occupation</button> : null}<br/> </div>}
    {toggleForm.hometown ? <div> <EditProfile data={"hometown"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/></div> :  <div> hometown: {hometown.hometown}  {toggleEdit ? <button name="hometown" onClick={handleEdit}>Edit hometown</button> : null}<br/> </div>}
    {toggleForm.status ? <div> <EditProfile data={"status"} updateProfile={props.updateProfile} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Relationship Status: {status.status}  {toggleEdit ? <button name="status" onClick={handleEdit}>Edit Status</button> : null}<br/> </div>}
    {toggleForm.birthday ? <div> <EditUser data={"birthday"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Bithday: {birthday}  {toggleEdit ? <button name="birthday" onClick={handleEdit}>Edit Birthday</button> : null}<br/> </div>}
    {toggleForm.gender ? <div> <EditUser data={"gender"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Gender: {gender}  {toggleEdit ? <button name="gender" onClick={handleEdit}>Edit Gender</button> : null}<br/> </div>}
    {toggleForm.phone ? <div> <EditUser data={"phone"} updateUser={props.updateUser} profile={props.profile} toggle={setToggleForm}/> </div> :  <div> Phone: {phone}  {toggleEdit ? <button name="phone" onClick={handleEdit}>Edit Phone</button> : null}<br/> </div>}

    </div>
  )
}

export default ProfileCardBody;
