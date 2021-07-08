import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { FormContext } from "../context/FormState";
import {
  ADD_PASSWORD,
  CLEAR_PASSWORD_FIELD,
  PASSWORD_ERROR,
  VALID_PASSWORD_FIELD,
} from "../context/Types";

function PasswordField() {
  const { formData, dispatch } = useContext(FormContext);
  const { password } = formData;
  function isValidPassword(value) {
    if (value === "") {
      dispatch({
        type: PASSWORD_ERROR,
        payload: "Password is required",
      });
      return false;
    } else if (value.indexOf(" ") >= 0) {
      dispatch({
        type: PASSWORD_ERROR,
        payload: "Password can't contain spaces",
      });
      return false;
    }
    dispatch({
      type: VALID_PASSWORD_FIELD,
    });
    return true;
  }
  return (
    <TextField
      fullWidth
      type="password"
      label="Password"
      name="Password"
      placeholder="Enter password"
      value={password.value}
      error={password.error}
      helperText={password.errorText}
      autoComplete="off"
      onChange={(e) => {
        dispatch({
          type: ADD_PASSWORD,
          payload: e.target.value,
        });
      }}
      onBlur={(e) => isValidPassword(e.target.value)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_PASSWORD_FIELD,
        });
      }}
    />
  );
}

export default PasswordField;
