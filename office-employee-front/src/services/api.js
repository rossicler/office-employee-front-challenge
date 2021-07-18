import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const createEmployee = async (data) => {
  return await api.post("/employees", data);
};

export const getEmployee = async (token) => {
  return await api.get("/employee", { headers: getLoggedHeader(token) });
};

export const login = async (username, password) => {
  return api.post("/auth", { username, password });
};

const getLoggedHeader = (token) => {
  return { Authorization: `Bearer ${token}` };
};
