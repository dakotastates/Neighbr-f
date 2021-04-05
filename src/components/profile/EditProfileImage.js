import React, { useState } from 'react';


function EditProfileImage(props) {

  const [state, setState] = useState({

      featured_image: null,
      previewURL: null
  });


  // const objectURL = URL.createObjectURL(state.featured_image)
  // const url = reader.readAsDataURL(state.featured_image)
 // debugger



  // const handleOnChange = (e) => {
  //   this.setState({ [event.target.name]: e.target.value });
  //   // const { name, value } = e.target;
  //   // setState(state => ({ ...state, [name]: value }));
  // };

  const onImageChange = event => {
    // const preview = document.getElementById('preview');
    // const file = document.querySelector('input[type=file]').files[0];
    // debugger

    const reader = new FileReader()
    const file = event.target.files[0]
    // setState({ featured_image: event.target.files[0] });

    reader.onloadend = () => {
      setState({
        featured_image: file,
        previewURL: reader.result
      });
    }

    // reader.addEventListener("load", function () {
    // // convert image file to base64 string
    // // debugger
    //   preview.src = reader.result;
    // }, false);
  // console.log(state)
  // debugger
    //   if (file) {
    //   reader.readAsDataURL(file);
    //   // debugger
    // }
    reader.readAsDataURL(file)

  };

  const onSubmit = (e) => {
    e.preventDefault();
    // debugger
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


  let {previewURL} = state;
  let imagePreview = null;
  if (previewURL) {
    imagePreview = (<img src={previewURL} height="200" alt="Image preview..." width="130" class="rounded mb-2 img-thumbnail"/>);
  }


    return(
      <div>
      <form onSubmit={onSubmit}>

        <input type="file" onChange={onImageChange}/><br/>
        <button onClick={()=>props.toggle({image: false})}>Cancel</button>
        <input type="submit" value="Save"/><br/>
        {imagePreview}
      </form>
      </div>
    )

}


export default EditProfileImage;


// {state.featured_image ? <img src={state.featured_image.url} alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/> : <div> {props.selectedUser.featured_image ? <img src={props.selectedUser.featured_image.url} alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/>}</div> }

// <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />

// <div> {props.selectedUser.featured_image ? <img src={props.selectedUser.featured_image.url} alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/> : <img src='https://comotion.uw.edu/wp-content/uploads/2019/05/generic-profile.png' alt={props.selectedUser.profile.first_name} width="130" class="rounded mb-2 img-thumbnail"/>}
