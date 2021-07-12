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
  VALID_CONFIRMPASSWORD,
  VALID_EMAIL,
  VALID_NAME,
  VALID_PASSWORD,
  VALID_PHONENUMBER,
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
        },
      };
    case NAME_ERROR:
      return {
        ...state,
        name: {
          ...state.name,
          error: true,
          errorText: "Name is invalid",
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

    case VALID_NAME:
      return {
        ...state,
        name: {
          ...state.name,
          valid: true,
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
          errorText: "Email is invalid",
        },
      };

    case VALID_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          valid: true,
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
          errorText: "Invalid phone Number",
        },
      };
    case VALID_PHONENUMBER:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          valid: true,
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
          errorText: "Invalid password",
        },
      };
    case VALID_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          valid: true,
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
          errorText: "passwords don't match",
        },
      };

    case VALID_CONFIRMPASSWORD:
      return {
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          valid: true,
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
