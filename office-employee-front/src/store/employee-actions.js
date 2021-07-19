import { createEmployee, getEmployee, login } from "../services/api";
import {
  loginGraphQL,
  getEmployeeGraphQL,
  addEmployeeGraphQL as addEmployeeGraphQLService,
} from "../services/graphql/api";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const GET_LOGGED_EMPLOYEE = "GET_LOGGED_EMPLOYEE";
export const LOGIN_EMPLOYEE = "LOGIN_EMPLOYEE";
export const LOGOUT_EMPLOYEE = "LOGOUT_EMPLOYEE";

export const addEmployee = (employeeData) => {
  return async (dispatch) => {
    try {
      const { data } = await createEmployee(employeeData);
      dispatch({ type: ADD_EMPLOYEE, employee: data });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

export const addEmployeeGraphQL = (employeeData) => {
  return async (dispatch) => {
    try {
      const { data } = await addEmployeeGraphQLService(employeeData);
      dispatch({ type: ADD_EMPLOYEE, employee: data.employee });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

export const getLoggedEmployee = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().employees.employeeToken;
      const { data } = await getEmployee(token);
      dispatch({ type: GET_LOGGED_EMPLOYEE, employee: data });
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

export const getLoggedEmployeeGraphQL = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().employees.employeeToken;
      const { data } = await getEmployeeGraphQL(token);
      dispatch({ type: GET_LOGGED_EMPLOYEE, employee: data.employee });
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

export const loginEmployeeGraphQL = (username, password) => {
  return async (dispatch) => {
    try {
      const { data } = await loginGraphQL(username, password);
      dispatch({
        type: LOGIN_EMPLOYEE,
        token: data.login.token,
        id: data.login.employee.id,
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

export const logoutEmployee = () => {
  return { type: LOGOUT_EMPLOYEE };
};
