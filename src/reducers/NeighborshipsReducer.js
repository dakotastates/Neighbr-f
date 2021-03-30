export default function NeighborshipsReducer(
  state = { neighborship: {}, neighborships: [] },
  { type, payload }
) {
  switch (type) {


    case "CREATE_NEIGHBORSHIP":

      return {
        ...state,
        neighborship: payload,

      };

      case "STORAGE_NEIGHBORSHIP":
      // debugger
      return {
        ...state,
        neighborships: payload,
      };

    

    default:
      return state;
  }
}
