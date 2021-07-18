import { createEmployee, login } from "../services/api";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const LOGIN_EMPLOYEE = "LOGIN_EMPLOYEE";
export const LOGOUT_EMPLOYEE = "LOGOUT_EMPLOYEE";

export const addEmployee = (employeeData) => {
  return async (dispatch) => {
    try {
      const employee = await createEmployee(employeeData);
      dispatch({ type: ADD_EMPLOYEE, employee });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

export const loginEmployee = (username, password) => {
  return async (dispatch) => {
    try {
      const { data } = await login(username, password);
      dispatch({ type: LOGIN_EMPLOYEE, token: data });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

export const logoutEmployee = () => {
  return { type: LOGOUT_EMPLOYEE };
};
