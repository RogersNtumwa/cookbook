import { Grid } from "@material-ui/core";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import Recipes from "./Recipes";
import { header, rootMain } from "./recipeStyle";

const Main = () => {
  return (
    <div className={rootMain}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Link to="/" className={header}>
            <h2>RECIPE COOKBOOK</h2>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Recipes />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Switch>
            <Route path={`/recipe/:id`} component={RecipeDetails} exact />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
