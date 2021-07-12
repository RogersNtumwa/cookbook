import React from "react";
import { TextField } from "@material-ui/core";

function ConfirmPasswordField({
  confirmPassword,
  onChangeHandler,
  onConfirmpasswordFocus,
  onBlurConfirm,
}) {
  return (
    <TextField
      fullWidth
      type="password"
      label="Confirm Password"
      name="confirmPassword"
      placeholder="Confirm your password"
      onChange={onChangeHandler}
      error={confirmPassword.error}
      helperText={confirmPassword.errorText}
      onBlur={onBlurConfirm}
      onFocus={onConfirmpasswordFocus}
    />
  );
}

export default ConfirmPasswordField;
// import React, { useContext } from "react";
// import { TextField } from "@material-ui/core";
// import { FormContext } from "../context/FormState";
// import {
//   ADD_CONFIRM_PASSWORD,
//   CLEAR_CONFIRMPASSWORD_FIELD,
//   CONFIRM_PASSWORD_ERROR,
//   VALID_CONFIRMPASSWORD,
// } from "../context/Types";

// function ConfirmPasswordField() {
//   const { formData, dispatch } = useContext(FormContext);
//   const { confirmPassword, password } = formData;

//   function onBlur(event) {
//     const value = event.target.value;
//     const valid = confirmPassword.isValid(value, password);
//     if (!valid) {
//       dispatch({
//         type: CONFIRM_PASSWORD_ERROR,
//       });
//     } else {
//       dispatch({
//         type: VALID_CONFIRMPASSWORD,
//       });
//     }
//   }

//   return (
//     <TextField
//       fullWidth
//       type="password"
//       label="Confirm Password"
//       name="ConfirmPassword"
//       placeholder="Confirm your password"
//       value={confirmPassword.value}
//       error={confirmPassword.error}
//       helperText={confirmPassword.errorText}
//       autoComplete="off"
//       onChange={(e) => {
//         dispatch({
//           type: ADD_CONFIRM_PASSWORD,
//           payload: e.target.value,
//         });
//       }}
//       onBlur={(event) => onBlur(event)}
//       onFocus={(e) => {
//         dispatch({
//           type: CLEAR_CONFIRMPASSWORD_FIELD,
//         });
//       }}
//     />
//   );
// }

// export default ConfirmPasswordField;
