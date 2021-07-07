import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { FormContext } from "../context/FormState";
import { ADD_EMAIL, CLEAR_EMAIL_FIELD, EMAIL_ERROR } from "../context/Types";

function EmailField() {
  const { formData, dispatch } = useContext(FormContext);
  const { email } = formData;

  const isValidEmail = (value) => {
    if (value === "") {
      dispatch({
        type: EMAIL_ERROR,
        payload: "Email is required",
      });
      return false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
      dispatch({
        type: EMAIL_ERROR,
        payload: "Email is not valid",
      });
      return false;
    }
    return true;
  };
  return (
    <TextField
      fullWidth
      type="text"
      label="Email"
      name="email"
      placeholder="Enter email address"
      value={email.value}
      error={email.error}
      helperText={email.errorText}
      autoComplete="off"
      onChange={(e) => {
        dispatch({
          type: ADD_EMAIL,
          payload: e.target.value,
        });
      }}
      onBlur={(e) => isValidEmail(e.target.value)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_EMAIL_FIELD,
        });
      }}
    />
  );
}

export default EmailField;
