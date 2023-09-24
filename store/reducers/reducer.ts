import { CartItem, actionInterface } from "@/types";
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
  GET_SINGLE_ITEM,
  SINGLE_ITEM_ERROR,
  GET_ALL_PRODUCTS,
  ALL_PRODUCTS_ERROR,
  GET_FAVOURITES,
  FAVOURITES_ERROR,
  GET_CART_ITEMS,
  CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS,
  REMOVE_CART_ITEMS_ERROR,
} from "../types";

const initialState = {
  loading: true,
  categories: [],
  topSelling: [],
  categoryItem: [],
  searchedItem: [],
  lowStock: [],
  history: [],
  itemCategory: [],
  singleProduct: [],
  allProducts: [],
  favourites: [],
  cartItem: [],
};

const reducer = (state = initialState, action: actionInterface) => {
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
    case GET_SINGLE_ITEM:
      return {
        ...state,
        singleProduct: action.payload,
        loading: false,
      };
    case SINGLE_ITEM_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case ALL_PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
        loading: false,
      };
    case FAVOURITES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_CART_ITEMS:
      const updatedCartItem: CartItem[] = [...state.cartItem];
      const newItem: any = action.payload;
      const existingItemIndex = updatedCartItem.findIndex(
        (item) => item.id === newItem[0].id
      );

      if (existingItemIndex === -1) {
        updatedCartItem.push({
          id: newItem[0].id,
          cartI: [newItem],
          quantity: newItem[0].quantity,
        });
      } else {
        updatedCartItem[existingItemIndex].quantity = newItem[0].quantity;
      }
      return {
        ...state,
        cartItem: updatedCartItem,
        loading: false,
      };
    case CART_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: "error",
      };
    case REMOVE_CART_ITEMS:
      return {
        ...state,
        loading: false,
        cartItem: [],
      };
    case REMOVE_CART_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: "error",
      };
    default:
      return state;
  }
};

export default reducer;
