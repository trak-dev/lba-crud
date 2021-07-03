import * as api from "../api/index.js";

//appel de l'api et du reducer pour récupérer les données
export const getAll = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAll();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export default getAll;
