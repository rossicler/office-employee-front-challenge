import {
  ADD_EMPLOYEE,
  GET_LOGGED_EMPLOYEE,
  LOGIN_EMPLOYEE,
  LOGOUT_EMPLOYEE,
} from "./employee-actions";

const initialState = {
  currentEmployee: {},
  employeeToken: "",
  employeeId: "",
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      state = {
        ...state,
        currentEmployee: action.employee,
      };
      break;
    case GET_LOGGED_EMPLOYEE:
      state = {
        ...state,
        currentEmployee: action.employee,
      };
      break;
    case LOGIN_EMPLOYEE:
      state = {
        ...state,
        employeeToken: action.token,
        employeeId: action.id ? action.id : "",
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
