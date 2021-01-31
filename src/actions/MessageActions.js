const _messageObject = (state) => ({
  message: {
    id: state.id,
    body: state.body,
    user_id: state.user_id,
  },

});

const _conversationObject = (state) => ({
  conversation: {
    id: state.id,
    sender_id: state.sender_id,
    receiver_id: state.receiver_id
  },

});

export const createConversation = (state) => {
  // debugger
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_conversationObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/conversations", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      // localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_CONVERSATION",
        payload: json,
      });
      // debugger
   }
};

export const storeConversations = (id) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/conversations", options);
    const json = await res.json();
    debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_CONVERSATIONS",
      payload: json,
    });
  };
};

export const createMessage = (id, state) => {

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_messageObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/conversations"+ `/${id}/messages`, configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      // localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_MESSAGE",
        payload: json,
      });
      // debugger
   }


};

export const storeMessages = (id) => {

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/conversations" + `/${id}/messages`, options);
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
