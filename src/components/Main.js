import { Grid } from "@material-ui/core";
import React from "react";
// import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

// import AddRecipe from "./AddRecipe";
// import RecipeDetails from "./RecipeDetails";
// import Recipes from "./Recipes";
// import { header, rootMain } from "./recipeStyle";
import { rootMain } from "./recipeStyle";
import PlanPricing from "./PlanPricing";
import AddSubscriptionForm from "./form/formScreen/SubscriptionForm";
import FormProvider from "./form/context/FormState";

const Main = () => {
  return (
    <div className={rootMain}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={12}>
          <Link to="/" className={header}>
            <h2>RECIPE COOKBOOK</h2>
          </Link>
        </Grid> */}
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
        {/* <Grid item xs={12} sm={6}>
          <Recipes />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Switch>
        <Route path="/cart/:id?" component={CartScreen} exact />
            <Route path={`/addRecipe`} component={AddRecipe} exact />
            <Route path={`/recipe/:id`} component={RecipeDetails} exact />
            <Route path={`/plans`} component={PlanPricing} exact />
          </Switch>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Main;
