import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { rootMain } from "../recipeStyle";
import PlanPricing from "./PlanPricing";
import AddSubscriptionForm from "../form";
import FormProvider from "../form/context/FormState";

import { getProducts } from "../../actions/product";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
    }, 2000);
  }, [dispatch]);

  return (
    <div className={rootMain}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Switch>
            <Route path="/" component={PlanPricing} exact />
            <FormProvider>
              <Route
                path="/subscription-form/:interval?/:id?"
                component={AddSubscriptionForm}
                exact
              />
            </FormProvider>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
