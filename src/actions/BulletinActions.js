const _bulletinObject = (state) => ({
  bulletin: {
    id: state.bulletin_id,
    bulletin: state.bulletin,
    user_id: state.user_id,
    // likes_attributes: [{
    //   id: state.like.id,
    //   user_id: state.like.user_id,
    //   bulletin_id: state.like.bulletin_id,
    //   _destroy: state.like._destroy
    // }],
    // comments_attributes: [{
    //   id: state.comment.id,
    //   comment: state.comment.comment,
    //   user_id: state.comment.userId,
    //   bulletin_id: state.comment.bulletin_id,
    //   // _destroy: state._destroy
    // }]

  },

});

const _likeObject = (state) => ({
  bulletin: {
    id: state.bulletin_id,
    likes_attributes: [{
      id: state.id,
      user_id: state.user_id,
      bulletin_id: state.bulletin_id,
      _destroy: state._destroy
    }],
    // comments_attributes: [{
    //   id: state.comment.id,
    //   comment: state.comment.comment,
    //   user_id: state.comment.userId,
    //   bulletin_id: state.comment.bulletin_id,
    //   // _destroy: state._destroy
    // }]

  },

});



const _commentObject = (state) => ({
  bulletin: {
    id: state.bulletin_id,
    comments_attributes: [{
      id: state.id,
      comment: state.comment,
      user_id: state.user_id,
      bulletin_id: state.bulletin_id,
      _destroy: state._destroy
    }]

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




// export const createComment = (state) => {
//   // debugger
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(_bulletinObject(state)),
//   };
//
//    return async (dispatch) => {
//      const res = await fetch("http://localhost:3000/api/v1/bulletins" + `/${state.bulletin_id}/comments`, configObj);
//      const json = await res.json();
//      // debugger
//      if (json.error) {
//         throw new Error(json.error /*+ " " + json.message*/);
//       }
//       // localStorage.setItem("token", json.jwt);
//       dispatch({
//         type: "CREATE_COMMENT",
//         payload: json.comment,
//       });
//       // debugger
//    }
//
//
// };


export const createLike = (state) => {
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

export const createComment = (state) => {
  // debugger
  // console.log(state)
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(_commentObject(state)),
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
    body: JSON.stringify(_bulletinObject(state)),
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

export const deleteBulletin = (state) => {
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
    const res = await fetch("http://localhost:3000/api/v1/bulletins" + `/${state.bulletin_id}`, options);

    const json = await res.json();
    // debugger
    if (json.errors) {
      throw new Error(json.errors /*+ " " + json.message*/);
    }
    dispatch({
      type: "DELETE_BULLETIN",
      payload: json,
    });
  };
};
