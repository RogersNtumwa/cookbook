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
  VALID_NAME_FIELD,
  VALID_EMAIL_FIELD,
  VALID_PHONENUMBER_FIELD,
  VALID_PASSWORD_FIELD,
  VALID_CONFIRMPASSWORD_FIELD,
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

    case VALID_NAME_FIELD:
      return {
        ...state,
        name: {
          ...state.name,
          isValid: true,
        },
      };
    case CLEAR_NAME_FIELD:
      return {
        ...state,
        name: {
          ...state.name,
          error: false,
          errorText: "",
        },
      };

    // email field
    case ADD_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
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
    case VALID_EMAIL_FIELD:
      return {
        ...state,
        email: {
          ...state.email,
          isValid: true,
        },
      };
    case CLEAR_EMAIL_FIELD:
      return {
        ...state,
        email: {
          ...state.email,
          error: false,
          errorText: "",
        },
      };
    // phone number field
    case ADD_PHONENUMBER:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          value: action.payload,
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

    case VALID_PHONENUMBER_FIELD:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,

          isValid: true,
        },
      };
    case CLEAR_PHONENUMBER_FIELD:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          error: false,
          errorText: "",
        },
      };

    // password field
    case ADD_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          value: action.payload,
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

    case VALID_PASSWORD_FIELD:
      return {
        ...state,
        password: {
          ...state.password,

          isValid: true,
        },
      };
    case CLEAR_PASSWORD_FIELD:
      return {
        ...state,
        password: {
          ...state.password,
          error: false,
          errorText: "",
        },
      };

    // Confirm password field
    case ADD_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          value: action.payload,
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

    case VALID_CONFIRMPASSWORD_FIELD:
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          isValid: true,
        },
      };
    case CLEAR_CONFIRMPASSWORD_FIELD:
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          error: false,
          errorText: "",
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
