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
      <form onSubmit={onSubmit}>
        <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
        <input type="submit" value="Save"/>
      </form>
    )

}


export default EditProfileImage;
