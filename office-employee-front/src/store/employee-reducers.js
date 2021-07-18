import {
  ADD_EMPLOYEE,
  LOGIN_EMPLOYEE,
  LOGOUT_EMPLOYEE,
} from "./employee-actions";

const initialState = {
  employees: [],
  employeeToken: "",
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      state = {
        ...state,
        employees: state.employees.concat(action.employee),
      };
      break;
    case LOGIN_EMPLOYEE:
      state = {
        ...state,
        employeeToken: action.token,
      };
      break;
    case LOGOUT_EMPLOYEE:
      state = {
        ...state,
        employeeToken: "",
      };
      break;
    default:
      break;
  }
  console.log(state);
  return state;
};

export default employeeReducer;
