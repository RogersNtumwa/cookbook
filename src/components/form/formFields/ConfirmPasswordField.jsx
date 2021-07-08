import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { FormContext } from "../context/FormState";
import {
  ADD_CONFIRM_PASSWORD,
  CLEAR_CONFIRMPASSWORD_FIELD,
  CONFIRM_PASSWORD_ERROR,
  VALID_CONFIRMPASSWORD_FIELD,
} from "../context/Types";

function ConfirmPasswordField() {
  const { formData, dispatch } = useContext(FormContext);
  const { confirmPassword, password } = formData;

  function passwordsMatch(value) {
    if (value !== password.value) {
      dispatch({
        type: CONFIRM_PASSWORD_ERROR,
        payload: "Passwords don't match",
      });
      return false;
    } else if (value === "") {
      dispatch({
        type: CONFIRM_PASSWORD_ERROR,
        payload: "Confirm password is required",
      });
    } else {
      dispatch({
        type: VALID_CONFIRMPASSWORD_FIELD,
      });
      return true;
    }
  }

  return (
    <TextField
      fullWidth
      type="password"
      label="Confirm Password"
      name="ConfirmPassword"
      placeholder="Confirm your password"
      value={confirmPassword.value}
      error={confirmPassword.error}
      helperText={confirmPassword.errorText}
      autoComplete="off"
      onChange={(e) => {
        dispatch({
          type: ADD_CONFIRM_PASSWORD,
          payload: e.target.value,
        });
      }}
      onBlur={(e) => passwordsMatch(e.target.value)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_CONFIRMPASSWORD_FIELD,
        });
      }}
    />
  );
}

export default ConfirmPasswordField;
