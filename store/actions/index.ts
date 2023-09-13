import { GET_CATEGORIES, CATEGORIES_ERROR, Categories } from "../types";
import { Dispatch } from "redux";

export const getCategories = () => async (dispatch: Dispatch<Categories>) => {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: "error",
    });
  }
};
