import * as api from "../../api/index";

export const getAll = () => async () => {
  try {
    const { data } = await api.fetchAll();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const newIngredient = (formData) => async (dispatch) => {
  try {
    const { data } = await api.newIngredient(formData);
    dispatch({ type: "NEW", data });
  } catch (error) {
    console.log(error);
  }
};
