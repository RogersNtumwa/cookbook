import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { listheader, pos, root } from "./recipeStyle";

import { getRecipe } from "../Reducers/recipe";

const RecipeDetails = ({ match }) => {
  const recipe = useSelector((state) => getRecipe(state, match.params.id));
  const { data } = recipe;

  return (
    <Fragment>
      <p className={listheader}>Recipe Details</p>
      <Card className={root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography className={pos} color="textSecondary">
            By: {data.author}
          </Typography>
          <Typography variant="body2" component="p">
            Desc: {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default RecipeDetails;
