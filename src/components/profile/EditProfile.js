import React, { useState } from 'react';


function EditProfile(props) {

  const [state, setState] = useState({
    id: props.profile.id,
    user_id: props.profile.user.id,
    bio: props.profile.bio,
    cover_image: props.profile.cover_image,
    hometown: {
      hometown: props.profile.hometown.hometown,
      visable: props.profile.hometown.visable
    },
    status: {
      status: props.profile.status.status,
      visable: props.profile.status.visable
    },
    headline: {
      headline: props.profile.headline.headline,
      visable: props.profile.headline.visable
    },
    city: {
      city: props.profile.city.city,
      visable: props.profile.city.visable
    }

  });




  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // debugger
    props
      .updateProfile(state)
      .then(() => {
        props.toggle(false)
      })
      .catch((error) => {
        alert(error);
      });

  };

  let input;
  if(props.data === "bio"){
    input =
    <div>
      <input type="text" name="bio" placeholder="Bio" value={state.bio} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({bio: false})}>Cancel</button> <input type="submit" value="Update Bio"/>
    </div>
  } else if (props.data === "hometown"){

    input =
    <div>
      <input type="text" name="hometown" placeholder="Hometown" value={state.hometown.hometown} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({hometown: false})}>Cancel</button> <input type="submit" value="Update Hometown"/>
    </div>
  } else if (props.data === "status"){
    input =
    <div>
      <input type="text" name="status" placeholder="Relationship Status" value={state.status.status} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({status: false})}>Cancel</button> <input type="submit" value="Update Status"/>
    </div>
  }else if (props.data === "headline"){
    input =
    <div>
      <input type="text" name="headline" placeholder="Headline" value={state.headline.headline} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({headline: false})}>Cancel</button> <input type="submit" value="Update Headline"/>
    </div>
  }else if (props.data === "city"){
    input =
    <div>
      <input type="text" name="city" placeholder="Current Location" value={state.city.city} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({headline: false})}>Cancel</button> <input type="submit" value="Update Location"/>
    </div>
  }

    return(
      <form onSubmit={onSubmit}>
        {input}<br/>

      </form>
    )

}


export default EditProfile;
