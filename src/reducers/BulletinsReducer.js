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


      return {
        ...state,
        bulletin: payload,
        bulletins: state.bulletins.map(bulletin => (bulletin.id === payload.id) ? payload : bulletin),
      };

      case "STORAGE_BULLETINS":
      // debugger
      return {
        ...state,
        bulletins: payload,
      };

      case "DELETE_BULLETIN":
       // debugger
      const bulletins = state.bulletins.filter(bulletin => bulletin.id !== payload.id);
      return {
        ...state,
        bulletins: bulletins
      };


    default:
      return state;
  }
}
