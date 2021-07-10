import React, { useContext, Fragment } from "react";

import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import styled from "@emotion/styled";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import NameField from "./formFields/NameField";
import EmailField from "./formFields/EmailField";
import PhoneNumberField from "./formFields/PhoneNumberField";
import PasswordField from "./formFields/PasswordField";
import ConfirmPasswordField from "./formFields/ConfirmPasswordField";

import { FormContext } from "./context/FormState";

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
  const { interval, id } = useParams();

  const { products, loading } = useSelector((state) => state.product);

  const data =
    !loading && products.find((product) => product.id === parseInt(id));

  const prices =
    !loading && data.prices.find((item) => item.interval === interval);

  const { name, email, phoneNumber, password, confirmPassword } = formData;

  let disabled = true;
  function validfiels() {
    if (
      name.isValid &&
      email.isValid &&
      phoneNumber.isValid &&
      password.isValid &&
      confirmPassword.isValid
    ) {
      disabled = false;
    }
    return disabled;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      console.log(formData);
    }
  };

  function isValidForm() {
    if (
      name.isValid &&
      email.isValid &&
      phoneNumber.isValid &&
      password.isValid &&
      confirmPassword.isValid
    ) {
      return true;
    }
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
          <Button type="submit" variant="contained" disabled={validfiels()}>
            Submit
          </Button>
        </form>
        {!loading && (
          <Fragment>
            <p>ID: {data.id}</p>
            <p>PlanName: {data.name}</p>
            <p>Currency: {prices.currency}</p>
            <p>Interval: {prices.interval}</p>
            <p>Amount: {prices.unit_amount}</p>
          </Fragment>
        )}
      </StyledPaper>
    </Grid>
  );
}

export default AddSubscriptionForm;
