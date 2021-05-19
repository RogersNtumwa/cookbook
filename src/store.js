import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


import { recipeDetailsReducer, recipeListReducer } from "./Reducers/recipe";

const middleware = [thunk];

const initialState = {};

const reducer = combineReducers({
  recipes: recipeListReducer,
  recipe: recipeDetailsReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
