export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export const addEmployee = (employee) => {
  //TODO request to send employee to the backend
  return { type: ADD_EMPLOYEE, employee };
};
