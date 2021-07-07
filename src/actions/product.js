import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "./type";
import { data } from "../components/CardData";

export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });

  try {
    const response = await data.find((product) => product.id === id);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
    });
  }
};
