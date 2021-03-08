export default function BulletinsReducer(
  state = { bulletin: {}, bulletins: [] },
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
