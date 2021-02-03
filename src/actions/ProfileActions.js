const _profileObject = (state) => ({
  profile: {
    id: state.id,
    bio: state.bio,
    cover_image: state.cover_image,
    headline_attributes: {
      headline: state.headline.headline,
      visable: state.headline.visable
    },
    hometown_attributes:{
      hometown: state.hometown.hometown,
      visable: state.hometown.visable
    },
    status_attributes:{
      status: state.status.status,
      visable: state.status.visable
    }
  },

});


export const getProfile = (id) => {
  // debugger
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/users" + `/${id}/profiles`, options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "GET_PROFILE",
      payload: json,
    });
  };
};

export const updateProfile = (state) => {
  
  // console.log(state)
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(_profileObject(state)),
  };

  return async (dispatch) => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3000/api/v1/users" + `/${state.user_id}/profiles` + `/${state.id}`, options);

    const json = await res.json();

    if (json.errors) {
      throw new Error(json.errors /*+ " " + json.message*/);
    }
    dispatch({
      type: "UPDATE_PROFILE",
      payload: json,
    });
  };
};
