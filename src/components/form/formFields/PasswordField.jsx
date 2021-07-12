import React from "react";
import { TextField } from "@material-ui/core";

function PasswordField({
  password,
  onChangeHandler,
  onBlurPassword,
  onPasswordFucus,
}) {
  return (
    <TextField
      fullWidth
      type="password"
      label="Password"
      name="password"
      placeholder="Enter password"
      error={password.error}
      helperText={password.errorText}
      onChange={onChangeHandler}
      onBlur={onBlurPassword}
      onFocus={onPasswordFucus}
      autoComplete="off"
    />
  );
}

export default PasswordField;
// import React, { useContext } from "react";
// import { TextField } from "@material-ui/core";
// import { FormContext } from "../context/FormState";
// import {
//   ADD_PASSWORD,
//   CLEAR_PASSWORD_FIELD,
//   PASSWORD_ERROR,
//   VALID_PASSWORD,
// } from "../context/Types";

// function PasswordField() {
//   const { formData, dispatch } = useContext(FormContext);
//   const { password } = formData;

//   function onBlur(event) {
//     const value = event.target.value;
//     const valid = password.isValid(value);
//     if (!valid) {
//       dispatch({
//         type: PASSWORD_ERROR,
//       });
//     } else {
//       dispatch({
//         type: VALID_PASSWORD,
//       });
//     }
//   }

//   return (
//     <TextField
//       fullWidth
//       type="password"
//       label="Password"
//       name="Password"
//       placeholder="Enter password"
//       value={password.value}
//       error={password.error}
//       helperText={password.errorText}
//       autoComplete="off"
//       onChange={(e) => {
//         dispatch({
//           type: ADD_PASSWORD,
//           payload: e.target.value,
//         });
//       }}
//       onBlur={(event) => onBlur(event)}
//       onFocus={(e) => {
//         dispatch({
//           type: CLEAR_PASSWORD_FIELD,
//         });
//       }}
//     />
//   );
// }

// export default PasswordField;
