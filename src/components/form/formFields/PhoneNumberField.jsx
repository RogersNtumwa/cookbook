import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { FormContext } from "../context/FormState";
import {
  ADD_PHONENUMBER,
  CLEAR_PHONENUMBER_FIELD,
  PHONENUMBER_ERROR,
  VALID_PHONENUMBER_FIELD,
} from "../context/Types";

function PhoneNumberField() {
  const { formData, dispatch } = useContext(FormContext);
  const { phoneNumber } = formData;

  function isValidNumber(value) {
    if (value === "") {
      dispatch({
        type: PHONENUMBER_ERROR,
        payload: "Phone Number is required",
      });
      return false;
    } else if (/^([0-9]{3}-)?([0-9]{3})([0-9]{4})(\/[0-9]{4})?$/.test(value)) {
      dispatch({
        type: PHONENUMBER_ERROR,
        payload: "Invalid Phone Number from regx",
      });
      return false;
    } else if (value.length < 10) {
      dispatch({
        type: PHONENUMBER_ERROR,
        payload: "Invalid Phone Number",
      });
      return false;
    }
    dispatch({
      type: VALID_PHONENUMBER_FIELD,
    });
    return true;
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
      onBlur={(e) => isValidNumber(e.target.value)}
      onFocus={(e) => {
        dispatch({
          type: CLEAR_PHONENUMBER_FIELD,
        });
      }}
    />
  );
}

export default PhoneNumberField;
