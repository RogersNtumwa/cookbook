import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../actions/recipe";
import { headerText, listheader } from "./recipeStyle";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { recipes: data } = recipes;

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <Fragment>
      <p className={listheader}>Recipe List</p>
      <List component="nav" aria-label="secondary mailbox folders">
        {data.map((recipe) => (
          <ListItem button key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className={headerText}>
              <ListItemText primary={recipe.data.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

export default Recipes;
