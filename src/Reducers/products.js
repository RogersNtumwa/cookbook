import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from "../actions/type";

export const productDetailsReducer = (
  state = { products: [], loading: true },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_REQUEST:
      return { loading: true, ...state };
    case PRODUCTS_SUCCESS:
      return {
        products: payload,
        loading: false,
      };
    case PRODUCTS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
