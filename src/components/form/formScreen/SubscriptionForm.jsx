import React, { useContext, useEffect, Fragment } from "react";

import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import styled from "@emotion/styled";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import NameField from "../formFields/NameField";
import EmailField from "../formFields/EmailField";
import PhoneNumberField from "../formFields/PhoneNumberField";
import PasswordField from "../formFields/PasswordField";
import ConfirmPasswordField from "../formFields/ConfirmPasswordField";

import { getProduct } from "../../../actions/product";
import { FormContext } from "../context/FormState";

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

  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const { interval, id } = useParams();

  let prices = {};
  if (!loading) {
    prices = product.prices.find((item) => item.interval === interval);
  }

  useEffect(() => {
    dispatch(getProduct(parseInt(id)));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      console.log(formData);
    }
  };

  const { name, email, phoneNumber, password, confirmPassword } = formData;
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
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        {!loading && (
          <Fragment>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{prices.currency}</p>
            <p>{prices.interval}</p>
            <p>{prices.unit_amount}</p>
          </Fragment>
        )}
      </StyledPaper>
    </Grid>
  );
}

export default AddSubscriptionForm;
