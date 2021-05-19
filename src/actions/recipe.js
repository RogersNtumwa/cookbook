import Firebase from "../firebase";
import {
  RECIPES_LIST_FAIL,
  RECIPES_LIST_REQUEST,
  RECIPES_LIST_SUCCESS,
  RECIPE_DETAILS_SUCCESS,
  RECIPE_DETAILS_REQUEST,
  RECIPE_DETAILS_FAIL,
} from "./type";

export const getRecipes = () => async (dispatch) => {
  dispatch({ type: RECIPES_LIST_REQUEST });
  try {
    const response = await Firebase.getRecipes();

    dispatch({
      type: RECIPES_LIST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: RECIPES_LIST_FAIL,
    });
  }
};

export const getRecipe = (id) => async (dispatch) => {
  dispatch({ type: RECIPE_DETAILS_REQUEST });

  try {
    const response = await Firebase.getRecipeDetails(id);
    dispatch({
      type: RECIPE_DETAILS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: RECIPE_DETAILS_FAIL,
    });
  }
};
