import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../actions/recipe";
import { headerText, listheader } from "./recipeStyle";
import styled from "@emotion/styled";
const Addbutton = styled(Link)({
  textDecoration: "none",
});

const Recipes = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.recipes.recipes);

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
      <Addbutton to="/addRecipe">
        <Button variant="contained" color="primary">
          Add New Recipe
        </Button>
      </Addbutton>
    </Fragment>
  );
};

export default Recipes;
