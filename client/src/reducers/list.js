const reducer = (data = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return data;
  }
};
export default reducer;
