import { ADD_EMPLOYEE } from "./employee-actions";

const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      state = {
        ...state,
        employees: state.employees.concat(action.employee),
      };
      break;
    default:
      break;
  }
  return state;
};

export default employeeReducer;
