import { createEmployee } from "../services/api";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export const addEmployee = (employeeData) => {
  return async (dispatch) => {
    //TODO request to send employee to the backend
    try {
      const employee = await createEmployee(employeeData);
      dispatch({ type: ADD_EMPLOYEE, employee });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};
