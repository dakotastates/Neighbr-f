import React, { useState } from 'react';


function EditUser(props) {

  const [state, setState] = useState({
    id: props.profile.user.id,
    first_name: props.profile.user.first_name,
    middle_name: props.profile.user.middle_name,
    last_name: props.profile.user.last_name,
    gender: props.profile.user.gender,
    email: props.profile.user.email,
    phone: props.profile.user.phone,
    birthday: props.profile.user.birthday

  });




  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props
      .updateUser(state.id, state)
      .then(() => {
        props.toggle(false)
      })
      .catch((error) => {
        alert(error);
      });

  };

  let input;
  if (props.data === "gender"){
    input =
    <div>
      <input type="text" name="gender" placeholder="Gender" value={state.gender} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({gender: false})}>Cancel</button> <input type="submit" value="Update Gender"/>
    </div>
  }else if (props.data === "phone"){
    input =
    <div>
      <input type="text" name="phone" placeholder="Phone" value={state.phone.phone} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({phone: false})}>Cancel</button> <input type="submit" value="Update Phone #"/>
    </div>
  }else if (props.data === "email"){
    input =
    <div>
      <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({email: false})}>Cancel</button> <input type="submit" value="Update Email"/>
    </div>
  }else if (props.data === "birthday"){

    input =
    <div>
      <input type="date" name="birthday" value={state.birthday} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({birthday: false})}>Cancel</button> <input type="submit" value="Update Birthday"/>
    </div>
  }else if (props.data === "name"){

    input =
    <div>
      <input type="text" name="first_name" value={state.first_name} onChange={handleOnChange}  />
      <input type="text" name="middle_name" value={state.middle_name} onChange={handleOnChange}  />
      <input type="text" name="last_name" value={state.last_name} onChange={handleOnChange}  />
      <button onClick={()=>props.toggle({name: false})}>Cancel</button> <input type="submit" value="Update Name"/>
    </div>
  }


    return(
      <form onSubmit={onSubmit}>
        {input}<br/>

      </form>
    )

}


export default EditUser;
