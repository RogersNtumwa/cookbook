import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../actions/recipe";
import { listheader, pos, root } from "./recipeStyle";

const RecipeDetails = ({ match }) => {
  const dispatch = useDispatch();
  const recipeData = useSelector((state) => state.recipe);

  const { recipe } = recipeData;

  useEffect(() => {
    dispatch(getRecipe(match.params.id));
  }, [dispatch, match]);

  return (
    <Fragment>
      <p className={listheader}>Recipe Details</p>
      <Card className={root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.name}
          </Typography>
          <Typography className={pos} color="textSecondary">
            By: {recipe.author}
          </Typography>
          <Typography variant="body2" component="p">
            Desc: {recipe.description}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default RecipeDetails;
