const _bulletinObject = (state) => ({
  bulletin: {
    id: state.id,
    bulletin: state.bulletin,
    user_id: state.user_id
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
