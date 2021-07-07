import {
  ADD_NAME,
  ADD_EMAIL,
  ADD_PHONENUMBER,
  ADD_PASSWORD,
  ADD_CONFIRM_PASSWORD,
  NAME_ERROR,
  EMAIL_ERROR,
  PASSWORD_ERROR,
  PHONENUMBER_ERROR,
  CONFIRM_PASSWORD_ERROR,
  CLEAR_CONFIRMPASSWORD_FIELD,
  CLEAR_NAME_FIELD,
  CLEAR_EMAIL_FIELD,
  CLEAR_PASSWORD_FIELD,
  CLEAR_PHONENUMBER_FIELD,
  CLEAR_FIELDS,
} from "../context/Types";

const formReducer = (state, action) => {
  switch (action.type) {
    // Name field
    case ADD_NAME:
      return {
        ...state,
        name: {
          ...state.name,
          value: action.payload,
          isValid: true,
        },
      };
    case NAME_ERROR:
      return {
        ...state,
        name: {
          ...state.name,
          error: true,
          errorText: action.payload,
        },
      };

    case CLEAR_NAME_FIELD:
      return {
        ...state,
        name: {
          ...state.name,
          error: false,
          errorText: "",
          isValid: false,
        },
      };

    // email field
    case ADD_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
          isValid: true,
        },
      };
    case EMAIL_ERROR:
      return {
        ...state,
        email: {
          ...state.email,
          error: true,
          errorText: action.payload,
        },
      };
    case CLEAR_EMAIL_FIELD:
      return {
        ...state,
        email: {
          ...state.email,
          error: false,
          errorText: "",
          isValid: false,
        },
      };
    // phone number field
    case ADD_PHONENUMBER:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          value: action.payload,
          isValid: true,
        },
      };
    case PHONENUMBER_ERROR:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          error: true,
          errorText: action.payload,
        },
      };
    case CLEAR_PHONENUMBER_FIELD:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          error: false,
          errorText: "",
          isValid: false,
        },
      };

    // password field
    case ADD_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          value: action.payload,
          isValid: true,
        },
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        password: {
          ...state.password,
          error: true,
          errorText: action.payload,
        },
      };
    case CLEAR_PASSWORD_FIELD:
      return {
        ...state,
        password: {
          ...state.password,
          error: false,
          errorText: "",
          isValid: false,
        },
      };

    // Confirm password field
    case ADD_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          value: action.payload,
          isValid: true,
        },
      };
    case CONFIRM_PASSWORD_ERROR:
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          error: true,
          errorText: action.payload,
        },
      };
    case CLEAR_CONFIRMPASSWORD_FIELD:
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          error: false,
          errorText: "",
          isValid: false,
        },
      };

    case CLEAR_FIELDS:
      return {
        ...state,
        email: {
          ...state.email,
          value: "",
        },
        name: {
          ...state.name,
          value: "",
        },
        phoneNumber: {
          ...state.phoneNumber,
          value: "",
        },
        password: {
          ...state.password,
          value: "",
        },
        confirmPassword: {
          ...state.confirmPassword,
          value: "",
        },
      };
    default:
      return state;
  }
};

export default formReducer;
