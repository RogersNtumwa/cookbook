import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from "./type";
import { data } from "../components/subscription/CardData";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  try {
    const response = await data;
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAIL,
    });
  }
};
