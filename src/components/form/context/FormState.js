import React, { createContext, useReducer } from "react";
import formReducer from "./formReducer";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const initialState = {
    name: {
      value: "",
      error: false,
      errorText: "",
      isValid: false,
    },
    email: {
      value: "",
      error: false,
      errorText: "",
      isValid: false,
    },
    phoneNumber: {
      value: "",
      error: false,
      errorText: "",
      isValid: false,
    },
    password: {
      value: "",
      error: false,
      errorText: "",
      isValid: false,
    },
    confirmPassword: {
      value: "",
      error: false,
      errorText: "",
      isValid: false,
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
