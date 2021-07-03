const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...action.payload };
    case "NEW":
      return { ...action.payload };
    case "CHANGE":
      return { ...action.payload };
    case "DELETE":
      return { ...action.payload };
    default:
      return state;
  }
};
export default reducer;
