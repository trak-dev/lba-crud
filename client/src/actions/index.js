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
export const newIngredient = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addNewIng(formData);
    dispatch({ type: "NEW", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteItem = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteThis(id);

    dispatch({ type: "DELETE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const changeQuantity = (id, operation) => async (dispatch) => {
  try {
    const { data } = await api.changeThis(id, operation);
    dispatch({ type: "CHANGE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const searchItem = (search) => async (dispatch) => {
  try {
    if (search === "") {
      search = "*";
    }
    const { data } = await api.searchItem(search);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
