import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { addRecipe } from "../actions/recipe";
import { paperStyle } from "./recipeStyle";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const AddRecipe = () => {
  const classes = useStyles();
  const [formData, setformData] = useState({
    name: "",
    author: "",
    description: "",
  });
  const { name, author, description } = formData;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      dispatch(addRecipe(formData));

      setformData({
        name: "",
        author: "",
        description: "",
      });
    }
  };

  return (
    <Grid>
      <Paper elevation={10} className={paperStyle}>
        <Grid align="center">
          <h2>Add Recipe</h2>
        </Grid>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Recipe Name"
            fullWidth
            placeholder="Enter recipe title"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleChange}
          />
          <TextField
            label="Author"
            fullWidth
            placeholder="Enter Author"
            name="author"
            value={author}
            autoComplete="off"
            onChange={handleChange}
          />
          <TextField
            label="Description"
            fullWidth
            placeholder="Enter recipe description"
            name="description"
            value={description}
            autoComplete="off"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Recipe
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddRecipe;
