export default function NeighborshipsReducer(
  state = { neighborship: {}, neighborships: [] },
  { type, payload }
) {
  switch (type) {


    case "CREATE_NEIGHBORSHIP":

      return {
        ...state,
        neighborship: payload,
        neighborships: [...state.neighborships, payload]

      };

      case "STORAGE_NEIGHBORSHIPS":
      // debugger
      return {
        ...state,
        neighborships: payload,
      };

      case "DELETE_NEIGHBORSHIP":
       // debugger
      const neighborships = state.neighborships.filter(neighborship => neighborship.id !== payload.id);
      return {
        ...state,
        neighborships: neighborships
      };



    default:
      return state;
  }
}
