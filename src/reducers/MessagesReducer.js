export default function MessagesReducer(
  state = { message: {}, messages: [], conversation:{}, conversations:[] },
  { type, payload }
) {
  switch (type) {


    case "CREATE_CONVERSATION":

      return {
        ...state,
        conversation: payload,

      };

      case "STORAGE_CONVERSATIONS":
      // debugger
      return {
        ...state,
        conversations: payload,
      };

    case "CREATE_MESSAGE":
    // debugger
      return {
        ...state,
        messages: [...state.messages, payload],
      };

      case "STORAGE_MESSAGES":
      // debugger
      return {
        ...state,
        messages: payload,
      };


    default:
      return state;
  }
}
