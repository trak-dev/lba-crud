import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchAll = () => API.get("/inventory");
export const addNewIng = (formData) => API.post("/inventory", formData);
export const deleteThis = (id) => API.delete(`/inventory/${id}`);
export const changeThis = (id, operation) =>
  API.patch(`/inventory/${id}`, operation);
