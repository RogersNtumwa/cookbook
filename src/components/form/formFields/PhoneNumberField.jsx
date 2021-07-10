import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { FormContext } from "../context/FormState";
import {
  ADD_PHONENUMBER,
  CLEAR_PHONENUMBER_FIELD,
  PHONENUMBER_ERROR,
  VALID_PHONENUMBER,
} from "../context/Types";

function isValidPhoneNumber(value) {
  if (
    value === "" ||
    value.length < 10 ||
    /^([0-9]{3}-)?([0-9]{3})([0-9]{4})(\/[0-9]{4})?$/.test(value)
  ) {
    return false;
  } else {
    return true;
  }
}

function PhoneNumberField() {
  const { formData, dispatch } = useContext(FormContext);
  const { phoneNumber } = formData;

  function onBlur(event) {
    const value = event.target.value;
    const valid = isValidPhoneNumber(value);
    if (!valid) {
      dispatch({
        type: PHONENUMBER_ERROR,
      });
    } else {
      dispatch({
        type: VALID_PHONENUMBER,
      });
    }
  }

  return (
    <TextField
      fullWidth
      type="text"
      label="Phone Number"
      name="phoneNumber"
      placeholder="Enter phone number"
      value={phoneNumber.value}
      error={phoneNumber.error}
      helperText={phoneNumber.errorText}
      autoComplete="off"
      onChange={(e) => {
        dispatch({
          type: ADD_PHONENUMBER,
          payload: e.target.value,
        });
      }}
      onBlur={(event) => onBlur(event)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_PHONENUMBER_FIELD,
        });
      }}
    />
  );
}

export default PhoneNumberField;
