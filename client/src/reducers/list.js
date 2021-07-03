const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...action.payload };
    case "NEW":
      const size = Object.keys(state).length + 1;
      return { ...state, [size]: { ...action.payload } };
    case "CHANGE":
      return { ...action.payload };
    case "DELETE":
      return { ...action.payload };
    default:
      return state;
  }
};
export default reducer;
