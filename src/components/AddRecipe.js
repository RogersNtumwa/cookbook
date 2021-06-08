import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { addRecipe } from "../actions/recipe";
import Progress from "./Progress";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledPaper = styled(Paper)({
  padding: "30px 20px",
  width: "300",
  margin: "20px auto",
});

const AddRecipe = () => {
  const classes = useStyles();
  const [formData, setformData] = useState({
    name: "",
    author: "",
    description: "",
  });

  const [Errors, setErrors] = useState({});
  const { name, author, description } = formData;
  const [showSpinner, setShowSpinner] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const validateOnChange = true;

  const validate = (fieldValues = formData) => {
    const test = { ...Errors };
    if ("name" in fieldValues) {
      test.name = name ? "" : "Recipe name is required";
    }
    if ("author" in fieldValues)
      test.author = author ? "" : "Author is required";
    if ("description" in fieldValues)
      test.description = description ? "" : "Description is required";
    setErrors({ ...test });
    if (fieldValues === formData)
      return Object.values(test).every((x) => x === "");
  };

  const { loading } = useSelector((state) => state.addRecipe);
  useEffect(() => {
    if (!loading) {
      setShowSpinner(false);
      setformData({
        name: "",
        author: "",
        description: "",
      });
      setActiveBtn(false);
    }
  }, [loading]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
    if (validateOnChange) {
      validate({ [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setShowSpinner(true);
      setActiveBtn(true);
      dispatch(addRecipe(formData));
    } else {
      console.log(Errors);
    }
  };

  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <h2>Add Recipe</h2>
        </Grid>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Recipe name"
            fullWidth
            placeholder="Enter recipe title"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleChange}
            {...(Errors.name && { error: true, helperText: Errors.name })}
            autoFocus={true}
          />
          <TextField
            label="Author"
            fullWidth
            placeholder="Enter Author"
            name="author"
            value={author}
            autoComplete="off"
            onChange={handleChange}
            {...(Errors.author && { error: true, helperText: Errors.author })}
          />
          <TextField
            label="Description"
            fullWidth
            placeholder="Enter recipe description"
            name="description"
            value={description}
            autoComplete="off"
            onChange={handleChange}
            multiline={true}
            rows="4"
            {...(Errors.description && {
              error: true,
              helperText: Errors.description,
            })}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={activeBtn}
          >
            Add Recipe
          </Button>
          {showSpinner && <Progress />}
        </form>
      </StyledPaper>
    </Grid>
  );
};

export default AddRecipe;
