const _neighborshipObject = (state) => ({
  neighborship: {
    id: state.neighborship_id,
    user_id: state.user_id,
    neighbor_id: state.neighbor_id
  },

});



export const createNeighborship = (state) => {
  // debugger
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_neighborshipObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/neighborships", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      // localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_NEIGHBORSHIP",
        payload: json.neighborship,
      });
      // debugger
   }


};





export const storeNeighborships = (state) => {
  const options = {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${localStorage.token}`,
    },
  };


  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/neighborships", options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_NEIGHBORSHIPS",
      payload: json,
    });
  };
};


export const deleteNeighborship = (state) => {
  // debugger
  // console.log(state)
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${localStorage.token}`,
    },
    // body: JSON.stringify(_problemObject(state)),
  };

  return async (dispatch) => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3000/api/v1/neighborships" + `/${state.id}`, options);

    const json = await res.json();
    // debugger
    if (json.errors) {
      throw new Error(json.errors /*+ " " + json.message*/);
    }
    dispatch({
      type: "DELETE_NEIGHBORSHIP",
      payload: json,
    });
  };
};
