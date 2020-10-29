const _boardMessageObject = (state) => ({
  board_message: {
    id: state.id,
    message: state.message,
    user_id: state.user.id
  },

});

export const createBoardMessage = (state) => {
  // debugger
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_boardMessageObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/board_messages", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      // localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_BOARD_MESSAGE",
        payload: json.board_message,
      });
      // debugger
   }


};

export const storeBoardMessages = () => {
  const options = {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/board_messages", options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_BOARD_MESSAGES",
      payload: json,
    });
  };
};
