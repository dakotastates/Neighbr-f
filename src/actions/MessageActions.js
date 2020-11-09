const _MessageObject = (state) => ({
  message: {
    id: state.id,
    message: state.message,
    user_id: state.user.id,
    reciepent_id: state.reciepent.id
  },

});

export const createMessage = (state) => {
  // debugger
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_MessageObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/messages", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      // localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_MESSAGE",
        payload: json.board_message,
      });
      // debugger
   }


};

export const storeMessages = () => {
  const options = {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/messages", options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_MESSAGES",
      payload: json,
    });
  };
};
