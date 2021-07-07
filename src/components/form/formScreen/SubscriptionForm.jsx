import React, { useContext, useState, useEffect } from "react";

import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import styled from "@emotion/styled";

import NameField from "../formFields/NameField";
import EmailField from "../formFields/EmailField";
import PhoneNumberField from "../formFields/PhoneNumberField";
import PasswordField from "../formFields/PasswordField";
import ConfirmPasswordField from "../formFields/ConfirmPasswordField";

import { FormContext } from "../context/FormState";
// import { CLEAR_FIELDS } from "../context/Types";

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

function AddSubscriptionForm() {
  const classes = useStyles();
  const { formData } = useContext(FormContext);
  const [btnActive, setbtnActive] = useState(true);

  const { name, email, phoneNumber, password, confirmPassword } = formData;
  useEffect(() => {
    if (
      name.isValid &&
      email.isValid &&
      phoneNumber.isValid &&
      password.isValid &&
      confirmPassword.isValid
    ) {
      setbtnActive(false);
    }
  }, [name, email, phoneNumber, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      console.log(formData);
    }
  };

  function isValidForm() {
    const test = {};
    test.name = name.value ? "" : name.isValid;
    test.email = email.value ? "" : email.isValid;
    test.phoneNumber = phoneNumber.value ? "" : phoneNumber.isValid;
    test.password = password.value ? "" : password.isValid;
    test.confiemPassword = confirmPassword.value ? "" : confirmPassword.isValid;
    return Object.values(test).every((x) => x === "");
  }

  return (
    <Grid>
      <StyledPaper elevation={5}>
        <Grid align="center">
          <h2>Add Plan </h2>
        </Grid>

        <form className={classes.root} onSubmit={handleSubmit}>
          <NameField />
          <EmailField />
          <PhoneNumberField />
          <PasswordField />
          <ConfirmPasswordField />
          <Button type="submit" variant="contained" disabled={btnActive}>
            Submit
          </Button>
        </form>
      </StyledPaper>
    </Grid>
  );
}

export default AddSubscriptionForm;
