import React from "react";
import { TextField } from "@material-ui/core";

function EmailField({ email, onChangeHandler, onBlurEmail, onEmailForcus }) {
  return (
    <TextField
      fullWidth
      type="text"
      label="Email"
      name="email"
      placeholder="Enter email address"
      error={email.error}
      helperText={email.errorText}
      onChange={onChangeHandler}
      onBlur={onBlurEmail}
      onFocus={onEmailForcus}
      autoComplete="off"
    />
  );
}

export default EmailField;
// import React, { useContext } from "react";
// import { TextField } from "@material-ui/core";
// import { FormContext } from "../context/FormState";
// import {
//   ADD_EMAIL,
//   CLEAR_EMAIL_FIELD,
//   EMAIL_ERROR,
//   VALID_EMAIL,
// } from "../context/Types";

// function EmailField() {
//   const { formData, dispatch } = useContext(FormContext);
//   const { email } = formData;

//   function onBlur(event) {
//     const value = event.target.value;
//     const valid = email.isValid(value);
//     if (!valid) {
//       dispatch({
//         type: EMAIL_ERROR,
//       });
//     } else {
//       dispatch({
//         type: VALID_EMAIL,
//       });
//     }
//   }

//   return (
//     <TextField
//       fullWidth
//       type="text"
//       label="Email"
//       name="email"
//       placeholder="Enter email address"
//       value={email.value}
//       error={email.error}
//       helperText={email.errorText}
//       autoComplete="off"
//       onChange={(e) => {
//         dispatch({
//           type: ADD_EMAIL,
//           payload: e.target.value,
//         });
//       }}
//       onBlur={(event) => onBlur(event)}
//       onFocus={(e) => {
//         dispatch({
//           type: CLEAR_EMAIL_FIELD,
//         });
//       }}
//     />
//   );
// }

// export default EmailField;
