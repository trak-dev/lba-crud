import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchAll = () => API.get("/inventory");
export const newIngredient = (formData) => API.post("/inventory", formData);

export default fetchAll;
