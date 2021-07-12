import React, { useState } from "react";

import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import styled from "@emotion/styled";

import NameField from "./formFields/NameField";
import EmailField from "./formFields/EmailField";
import PhoneNumberField from "./formFields/PhoneNumberField";
import PasswordField from "./formFields/PasswordField";
import ConfirmPasswordField from "./formFields/ConfirmPasswordField";

import {
  isValidName,
  isValidEmail,
  isValidPhoneNumber,
  isValidPassword,
  passwordsMatch,
} from "../form/context/validateFields";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledPaper = styled(Paper)({
  padding: "30px 20px",
  width: "500px",
  margin: "20px auto",
});
const AddSubscriptionForm = () => {
  const classes = useStyles();

  const [formData, setformData] = useState({
    name: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidName,
    },
    email: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidEmail,
    },
    phoneNumber: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidPhoneNumber,
    },
    password: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: isValidPassword,
    },
    confirmPassword: {
      value: "",
      error: false,
      errorText: "",
      valid: false,
      isValid: passwordsMatch,
    },
  });

  const { name, email, password, phoneNumber, confirmPassword } = formData;

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: {
        ...formData[event.target.name],
        value: event.target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  function onBlurHandler(event) {
    const value = event.target.value;
    let valid = null;

    if (event.target.name === "confirmPassword") {
      valid = formData[event.target.name].isValid(value, password);
    } else {
      valid = formData[event.target.name].isValid(value);
    }
    if (!valid) {
      setformData({
        ...formData,
        [event.target.name]: {
          ...formData[event.target.name],
          error: true,
          errorText:
            event.target.name === "confirmPassword"
              ? "Passwords don't match"
              : `${event.target.name} is not valid`,
        },
      });
    } else {
      setformData({
        ...formData,
        [event.target.name]: {
          ...formData[event.target.name],
          valid: true,
        },
      });
    }
  }

  function OnFucusHandler(event) {
    setformData({
      ...formData,
      [event.target.name]: {
        ...formData[event.target.name],
        error: false,
        errorText: "",
      },
    });
  }

  let disabled = true;
  function validfields() {
    if (
      name.valid &&
      email.valid &&
      phoneNumber.valid &&
      password.valid &&
      confirmPassword.valid
    ) {
      disabled = false;
    }
    return disabled;
  }

  return (
    <Grid>
      <StyledPaper elevation={5}>
        <Grid align="center">
          <h2>Add Plan </h2>
        </Grid>
        <form className={classes.root} onSubmit={handleSubmit}>
          <NameField
            onChangeHandler={handleChange}
            name={name}
            onBlurName={onBlurHandler}
            onNameForcus={OnFucusHandler}
          />
          <EmailField
            email={email}
            onChangeHandler={handleChange}
            onBlurEmail={onBlurHandler}
            onEmailForcus={OnFucusHandler}
          />
          <PhoneNumberField
            phoneNumber={phoneNumber}
            onChangeHandler={handleChange}
            onBlurPhone={onBlurHandler}
            onPhoneFocus={OnFucusHandler}
          />
          <PasswordField
            password={password}
            onChangeHandler={handleChange}
            onBlurPassword={onBlurHandler}
            onPasswordFucus={OnFucusHandler}
          />
          <ConfirmPasswordField
            confirmPassword={confirmPassword}
            onChangeHandler={handleChange}
            onBlurConfirm={onBlurHandler}
            onConfirmpasswordFocus={OnFucusHandler}
          />

          <Button type="submit" variant="contained" disabled={validfields()}>
            Submit
          </Button>
        </form>
      </StyledPaper>
    </Grid>
  );
};

// import React, { useContext, Fragment } from "react";

// import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
// import styled from "@emotion/styled";

// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// import NameField from "./formFields/NameField";
// import EmailField from "./formFields/EmailField";
// import PhoneNumberField from "./formFields/PhoneNumberField";
// import PasswordField from "./formFields/PasswordField";
// import ConfirmPasswordField from "./formFields/ConfirmPasswordField";

// import { FormContext } from "./context/FormState";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// const StyledPaper = styled(Paper)({
//   padding: "30px 20px",
//   width: "500px",
//   margin: "20px auto",
// });

// function AddSubscriptionForm() {
//   const classes = useStyles();
//   const { formData } = useContext(FormContext);
//   const { interval, id } = useParams();

//   const { products, loading } = useSelector((state) => state.product);

//   const data =
//     !loading && products.find((product) => product.id === parseInt(id));

//   const prices =
//     !loading && data.prices.find((item) => item.interval === interval);

//   const { name, email, phoneNumber, password, confirmPassword } = formData;

//   let disabled = true;
//   function validfields() {
//     if (
//       name.valid &&
//       email.valid &&
//       phoneNumber.valid &&
//       password.valid &&
//       confirmPassword.valid
//     ) {
//       disabled = false;
//     }
//     return disabled;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isValidForm()) {
//       console.log(formData);
//     }
//   };

//   function isValidForm() {
//     if (
//       name.isValid &&
//       email.isValid &&
//       phoneNumber.isValid &&
//       password.isValid &&
//       confirmPassword.isValid
//     ) {
//       return true;
//     }
//   }

//   return (
//     <Grid>
//       <StyledPaper elevation={5}>
//         <Grid align="center">
//           <h2>Add Plan </h2>
//         </Grid>
//         <form className={classes.root} onSubmit={handleSubmit}>
//           <NameField />
//           <EmailField />
//           <PhoneNumberField />
//           <PasswordField />
//           <ConfirmPasswordField />
//           <Button type="submit" variant="contained" disabled={validfields()}>
//             Submit
//           </Button>
//         </form>
//         {!loading && (
//           <Fragment>
//             <p>ID: {data.id}</p>
//             <p>PlanName: {data.name}</p>
//             <p>Currency: {prices.currency}</p>
//             <p>Interval: {prices.interval}</p>
//             <p>Amount: {prices.unit_amount}</p>
//           </Fragment>
//         )}
//       </StyledPaper>
//     </Grid>
//   );
// }

export default AddSubscriptionForm;
