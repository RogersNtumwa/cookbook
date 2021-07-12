import React from "react";
import { TextField } from "@material-ui/core";

function NameField({ onChangeHandler, name, onBlurName, onNameForcus }) {
  return (
    <TextField
      fullWidth
      type="text"
      label="Name"
      name="name"
      placeholder="Enter your name"
      onChange={onChangeHandler}
      onBlur={onBlurName}
      error={name.error}
      helperText={name.errorText}
      onFocus={onNameForcus}
      autoComplete="off"
    />
  );
}

// import React, { useContext } from "react";
// import { TextField } from "@material-ui/core";
// import { FormContext } from "../context/FormState";
// import {
//   ADD_NAME,
//   CLEAR_NAME_FIELD,
//   NAME_ERROR,
//   VALID_NAME,
// } from "../context/Types";

// function NameField() {
//   const { formData, dispatch } = useContext(FormContext);
//   const { name } = formData;

//   function onBlur(event) {
//     const value = event.target.value;
//     const valid = name.isValid(value);
//     if (!valid) {
//       dispatch({
//         type: NAME_ERROR,
//       });
//     } else {
//       dispatch({
//         type: VALID_NAME,
//       });
//     }
//   }

//   return (
//     <TextField
//       fullWidth
//       type="text"
//       label="Name"
//       name="name"
//       placeholder="Enter your name"
//       value={name.value}
//       error={name.error}
//       helperText={name.errorText}
//       autoComplete="off"
//       onChange={(e) => {
//         dispatch({
//           type: ADD_NAME,
//           payload: e.target.value,
//         });
//       }}
//       onBlur={(event) => onBlur(event)}
//       onFocus={(e) => {
//         dispatch({
//           type: CLEAR_NAME_FIELD,
//         });
//       }}
//     />
//   );
// }

export default NameField;
