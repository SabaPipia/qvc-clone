import { usePathname } from "next/navigation";
import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  GET_TOPSELLING,
  TOPSELLING_ERROR,
  GET_CATEGORYIMAGE,
  GET_SEARCHED_ITEM,
  SEARCHED_ITEM_ERROR,
  GET_LOW_STOCK,
  LOW_STOCK_ERROR,
  GET_HISTORY,
  HISTORY_ERROR,
  GET_ITEM_CATEGORY,
  ITEM_CATEGORY_ERROR,
} from "../types";

const initialState = {
  // data: [],
  loading: true,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case CATEGORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_TOPSELLING:
      return {
        ...state,
        topSelling: action.payload,
        loading: false,
      };
    case TOPSELLING_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_CATEGORYIMAGE:
      return {
        ...state,
        categoryItem: action.payload,
        loading: false,
      };
    case CATEGORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_SEARCHED_ITEM:
      return {
        ...state,
        searchedItem: action.payload,
        loading: false,
      };
    case SEARCHED_ITEM_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_LOW_STOCK:
      return {
        ...state,
        lowStock: action.payload,
        loading: false,
      };
    case LOW_STOCK_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_HISTORY:
      return {
        ...state,
        history: action.payload,
        loading: false,
      };
    case HISTORY_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_ITEM_CATEGORY:
      return {
        ...state,
        itemCategory: action.payload,
        loading: false,
      };
    case ITEM_CATEGORY_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
