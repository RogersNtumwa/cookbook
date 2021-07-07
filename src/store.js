import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import { data } from "./components/CardData";

import {
  recipeDetailsReducer,
  recipeListReducer,
  addRecipeReducer,
} from "./Reducers/recipe";

import { productDetailsReducer } from "./Reducers/products";

const middleware = [thunk];

const initialState = {};

const reducer = combineReducers({
  recipes: recipeListReducer,
  recipe: recipeDetailsReducer,
  addRecipe: addRecipeReducer,
  product: productDetailsReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
