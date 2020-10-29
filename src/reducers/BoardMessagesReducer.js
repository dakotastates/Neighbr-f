export default function BoardMessagesReducer(
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

    case "CREATE_BOARD_MESSAGE":
    // debugger
      return {
        ...state,
        message: payload,
      };

      case "STORAGE_BOARD_MESSAGES":
      // debugger
      return {
        ...state,
        messages: payload,
      };


    default:
      return state;
  }
}
