import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../actions/type";


export const productDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        product: payload,
        loading: false,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
