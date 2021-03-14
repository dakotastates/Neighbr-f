export default function BulletinsReducer(
  state = { bulletin: {}, bulletins: [], comment: {}, comments:[] },
  { type, payload }
) {
  switch (type) {

    // case "STORAGE_BOARD_MESSAGE":
    // // debugger
    // return {
    //   ...state,
    //   message: payload,
    // };

    case "CREATE_BULLETIN":
    // debugger
      return {
        ...state,
        bulletin: payload,
        bulletins: [...state.bulletins, payload]
      };

      case "CREATE_COMMENT":
      // debugger
        return {
          ...state,
          comment: payload,
          comments: [...state.comments, payload]
        };

      case "UPDATE_BULLETIN":
      // debugger
      return {
        ...state,
        bulletin: payload,
        bulletins: [],
      };

      case "STORAGE_BULLETINS":
      // debugger
      return {
        ...state,
        bulletins: payload,
      };


    default:
      return state;
  }
}
