export default function UsersReducer(
  state = { user: {}, users: [], profile: {}, location: {} },
  { type, payload }
) {
  switch (type) {

    case "STORAGE_USER":
    // debugger
    return {
      ...state,
      user: payload,
    };

    case "FETCH_USER_LOCATION_SUCCESS":
    // debugger
    return {
      ...state,
      location: payload
    };

    case "CREATE_USER":
    // debugger
      return {
        ...state,
        user: payload,
      };

      case "STORAGE_USERS":
      // debugger
      return {
        ...state,
        users: payload,
      };

      case "UPDATE_USER":
      // debugger
      return {
        ...state,
        user: payload,
        profile: payload,
        users: [],
      };

      case "SHOW_USER":
       // debugger
      return {
        ...state,
        profile: payload
      };
      // debugger

    default:
      return state;
  }
}
