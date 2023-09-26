import { CartItem, CategoryCardInterface, ProductItem } from "@/types";
import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  GET_TOPSELLING,
  TOPSELLING_ERROR,
  CategoriesInterface,
  TopSellingInterface,
  CategoryInterface,
  GET_CATEGORYIMAGE,
  CATEGORYIMAGE_ERROR,
  SearchedInterface,
  GET_SEARCHED_ITEM,
  SEARCHED_ITEM_ERROR,
  LowStockInterface,
  GET_LOW_STOCK,
  GET_HISTORY,
  HISTORY_ERROR,
  HistoryInterface,
  CategoryItemInterface,
  GET_ITEM_CATEGORY,
  ITEM_CATEGORY_ERROR,
  GET_SINGLE_ITEM,
  SINGLE_ITEM_ERROR,
  SingleItemInterface,
  AllProductsInterface,
  GET_ALL_PRODUCTS,
  ALL_PRODUCTS_ERROR,
  FavouritesInterface,
  GET_FAVOURITES,
  FAVOURITES_ERROR,
  CartInterface,
  GET_CART_ITEMS,
  CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS,
  RemoveCartInterface,
  REMOVE_CART_ITEMS_ERROR,
  RemoveCartItemInterface,
  REMOVE_CART_ITEM,
  REMOVE_CART_ITEM_ERROR,
} from "../types";
import { Dispatch } from "redux";

export const getCategories =
  () => async (dispatch: Dispatch<CategoriesInterface>) => {
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

export const getSearchedItem =
  (searchValue: string) => async (dispatch: Dispatch<SearchedInterface>) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );
      const data = await response.json();

      dispatch({
        type: GET_SEARCHED_ITEM,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEARCHED_ITEM_ERROR,
        payload: "error",
      });
    }
  };
export const getCategoryImages =
  () => async (dispatch: Dispatch<CategoryInterface>) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=100&select=category,thumbnail"
      );
      const data = await response.json();

      const categoryArr: string[] = [];
      const items: CategoryCardInterface[] = [];

      data.products.map((item: CategoryCardInterface) => {
        if (!categoryArr.includes(item.category)) {
          categoryArr.push(item.category);
          items.push(item);
        }
      });

      dispatch({
        type: GET_CATEGORYIMAGE,
        payload: items,
      });
    } catch (error) {
      dispatch({
        type: CATEGORYIMAGE_ERROR,
        payload: "error",
      });
    }
  };

export const getTopSelling =
  () => async (dispatch: Dispatch<TopSellingInterface | LowStockInterface>) => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      const filteredItemsByRating = data.products.filter(
        (item: ProductItem) => item.rating >= 4.9
      );
      const filteredItemsByStock = data.products.filter(
        (item: ProductItem) => item.stock <= 10
      );

      dispatch({
        type: GET_TOPSELLING,
        payload: filteredItemsByRating,
      });
      dispatch({
        type: GET_LOW_STOCK,
        payload: filteredItemsByStock,
      });
    } catch (error) {
      dispatch({
        type: TOPSELLING_ERROR,
        payload: "error",
      });
    }
  };

export const getHistory =
  () => async (dispatch: Dispatch<HistoryInterface>) => {
    try {
      const getHistoryItems: any = localStorage.getItem("history");
      const parsedHistory = JSON.parse(getHistoryItems);
      const itemPromises = parsedHistory.map(async (item: any) => {
        const response = await fetch(`https://dummyjson.com/products/${item}`);
        const responseJson = await response.json();
        return responseJson;
      });
      const items = await Promise.all(itemPromises);

      dispatch({
        type: GET_HISTORY,
        payload: items,
      });
    } catch (error) {
      dispatch({
        type: HISTORY_ERROR,
        payload: "error",
      });
    }
  };

export const getFavourite =
  () => async (dispatch: Dispatch<FavouritesInterface>) => {
    try {
      const localStorageKeys = Object.keys(localStorage);
      const itemKeysHistory = localStorageKeys.filter((k) =>
        k.startsWith("favourite")
      );
      const itemPromises = itemKeysHistory.map(async (item) => {
        const itemId = item.split(" ")[1];
        const response = await fetch(
          `https://dummyjson.com/products/${itemId}`
        );
        const responseJson = await response.json();
        return responseJson;
      });
      const items = await Promise.all(itemPromises);

      dispatch({
        type: GET_FAVOURITES,
        payload: items,
      });
    } catch (error) {
      dispatch({
        type: FAVOURITES_ERROR,
        payload: "error",
      });
    }
  };

export const getItemByCategory =
  (pathname: string) => async (dispatch: Dispatch<CategoryItemInterface>) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category${pathname}`
      );
      const responseJson = await response.json();
      const data = await responseJson.products;
      dispatch({
        type: GET_ITEM_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ITEM_CATEGORY_ERROR,
        payload: "error",
      });
    }
  };

export const getSingleItem =
  (pathname: string) => async (dispatch: Dispatch<SingleItemInterface>) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${pathname}`
      );
      const data = await response.json();
      dispatch({
        type: GET_SINGLE_ITEM,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_ITEM_ERROR,
        payload: "error",
      });
    }
  };

export const getAllProducts =
  () => async (dispatch: Dispatch<AllProductsInterface>) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=100&skip=0`
      );
      const data = await response.json();
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_ERROR,
        payload: "error",
      });
    }
  };

export const getAllCartItems =
  (item: CartItem[]) => async (dispatch: Dispatch<CartInterface>) => {
    try {
      dispatch({
        type: GET_CART_ITEMS,
        payload: item,
      });
    } catch (error) {
      dispatch({
        type: CART_ITEMS_ERROR,
        payload: "error",
      });
    }
  };
export const removeAllCartItems =
  () => async (dispatch: Dispatch<RemoveCartInterface>) => {
    try {
      dispatch({
        type: REMOVE_CART_ITEMS,
        payload: [],
      });
    } catch (error) {
      dispatch({
        type: REMOVE_CART_ITEMS_ERROR,
        payload: "error",
      });
    }
  };

export const removeCartItem =
  (item: CartItem[]) => async (dispatch: Dispatch<RemoveCartItemInterface>) => {
    // console.log(...newCart);
    try {
      dispatch({
        type: REMOVE_CART_ITEM,
        payload: item,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_CART_ITEM_ERROR,
        payload: "error",
      });
    }
  };
