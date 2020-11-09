export default function MessagesReducer(
  state = { message: {}, messages: [] },
  { type, payload }
) {
  switch (type) {

    // case "STORAGE_BOARD_MESSAGE":
    // // debugger
    // return {
    //   ...state,
    //   message: payload,
    // };

    case "CREATE_MESSAGE":
    // debugger
      return {
        ...state,
        message: payload,
        messages: [...state.messages, payload]
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
