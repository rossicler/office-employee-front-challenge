import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const createEmployee = async (data) => {
  return await api.post("/employees", data);
};
