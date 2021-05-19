import {
  RECIPE_DETAILS_FAIL,
  RECIPES_LIST_SUCCESS,
  RECIPES_LIST_REQUEST,
  RECIPE_DETAILS_REQUEST,
  RECIPE_DETAILS_SUCCESS,
  RECIPES_LIST_FAIL,
} from "../actions/type";

const initialState = {
  recipes: [],
  error: {},
  loading: true,
};

export const recipeListReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case RECIPES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RECIPES_LIST_SUCCESS:
      return {
        ...state,
        recipes: payload,
        loading: false,
      };
    case RECIPES_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const recipeDetailsReducer = (
  state = { recipe: {}, loading: true },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case RECIPE_DETAILS_SUCCESS:
      return {
        recipe: payload,
        loading: false,
      };
    case RECIPE_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
