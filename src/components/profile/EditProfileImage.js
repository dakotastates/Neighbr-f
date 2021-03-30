import React, { useState } from 'react';


function EditProfileImage(props) {

  const [state, setState] = useState({


      featured_image: null


  });
 // debugger



  // const handleOnChange = (e) => {
  //   this.setState({ [event.target.name]: e.target.value });
  //   // const { name, value } = e.target;
  //   // setState(state => ({ ...state, [name]: value }));
  // };

  const onImageChange = event => {
    setState({ featured_image: event.target.files[0] });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

      formData.append('profile[featured_image]', state.featured_image);
    // debugger
    props
      .updateProfileImage(formData, props.profile.user.id, props.profile.id)
      .then(() => {
        props.toggle(false)
      })
      .catch((error) => {
        alert(error);
      });

  };



    return(
      <div> {props.selectedUser.featured_image ? <img src={props.selectedUser.featured_image.url} alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/>}
      <form onSubmit={onSubmit}>
        <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
        <button onClick={()=>props.toggle({image: false})}>Cancel</button>
        <input type="submit" value="Save"/>
      </form>
      </div>
    )

}


export default EditProfileImage;
