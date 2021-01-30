export default (state = false, { type }) => {
  switch (type) {
    case "OPEN_PROFILE":
      return true;
    case "CLOSE_PROFILE":
      return false;
    default:
      return state;
  }
};
