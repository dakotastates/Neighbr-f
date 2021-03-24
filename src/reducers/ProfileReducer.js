export default function ProfileReducer(
  state = { profile: {} },
  { type, payload }
) {
  switch (type) {

    case "GET_PROFILE":
    // debugger
    return {
      ...state,
      profile: payload,
    };



    // case "ADD_IMAGE":
    //   // debugger
    // return {
    //     ...state,
    //     profile: payload,
    //   };

      case "UPDATE_PROFILE":
        // debugger
      return {
          ...state,
          profile: payload,
        };


    default:
      return state;
  }
}
