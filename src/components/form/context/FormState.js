import React, { createContext, useReducer } from "react";
import formReducer from "./formReducer";

import {
  isValidName,
  isValidEmail,
  isValidPhoneNumber,
  isValidPassword,
  passwordsMatch,
} from "./validateFields";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const initialState = {
    name: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidName,
    },
    email: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidEmail,
    },
    phoneNumber: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidPhoneNumber,
    },
    password: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidPassword,
    },
    confirmPassword: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: passwordsMatch,
    },
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider
      value={{
        formData: state,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
