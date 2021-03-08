const _bulletinObject = (state) => ({
  bulletin: {
    id: state.id,
    bulletin: state.bulletin,
    user_id: state.user_id
  },

});

const _likeObject = (state) => ({
  bulletin: {
    user_id: state.user_id,
    bulletin_id: state.bulletin_id,

  },

});

export const createBulletin = (state) => {
  // debugger
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_bulletinObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/bulletins", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      // localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_BULLETIN",
        payload: json.bulletin,
      });
      // debugger
   }


};

export const updateBulletin = (state) => {
  // debugger
  // console.log(state)
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(_likeObject(state)),
  };

  return async (dispatch) => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3000/api/v1/bulletins" + `/${state.bulletin_id}`, options);

    const json = await res.json();
    // debugger
    if (json.errors) {
      throw new Error(json.errors /*+ " " + json.message*/);
    }
    dispatch({
      type: "UPDATE_BULLETIN",
      payload: json,
    });
  };
};


export const storeBulletins = (state) => {
  const options = {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${localStorage.token}`,
    },
  };


  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/bulletins", options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_BULLETINS",
      payload: json,
    });
  };
};
