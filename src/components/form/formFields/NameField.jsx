import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { FormContext } from "../context/FormState";
import { ADD_NAME, CLEAR_NAME_FIELD, NAME_ERROR } from "../context/Types";

function NameField() {
  const { formData, dispatch } = useContext(FormContext);

  const { name } = formData;
  function isValidName(value) {
    if (value === "") {
      dispatch({
        type: NAME_ERROR,
        payload: "Name is required",
      });
      return false;
    } else if (value.length < 3) {
      dispatch({
        type: NAME_ERROR,
        payload: " Name should be atleast three characters long",
      });
      return false;
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
      dispatch({
        type: NAME_ERROR,
        payload: "Invalid Name. Avoid Special characters",
      });
      return false;
    }
    return true;
  }

  return (
    <TextField
      fullWidth
      type="text"
      label="Name"
      name="name"
      placeholder="Enter your name"
      value={name.value}
      error={name.error}
      helperText={name.errorText}
      autoComplete="off"
      onChange={(e) => {
        dispatch({
          type: ADD_NAME,
          payload: e.target.value,
        });
      }}
      onBlur={(e) => isValidName(e.target.value)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_NAME_FIELD,
        });
      }}
    />
  );
}

export default NameField;
