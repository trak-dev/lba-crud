import * as api from "../../api/index";

export const getAll = () => async () => {
  try {
    const { data } = await api.fetchAll();
    return data;
  } catch (error) {
    console.log(error);
  }
};
