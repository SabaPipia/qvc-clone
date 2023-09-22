import { CategoryCardInterface, ProductItem } from "@/types";

// categories
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";
export interface CategoriesInterface {
  type: typeof GET_CATEGORIES | typeof CATEGORIES_ERROR;
  payload: string;
}

// topSelling
export const GET_TOPSELLING = "GET_TOPSELLING";
export const TOPSELLING_ERROR = "TOPSELLING_ERROR";
export interface TopSellingInterface {
  type: typeof GET_TOPSELLING | typeof TOPSELLING_ERROR;
  payload: ProductItem | string;
}

// categoryCards
export const GET_CATEGORYIMAGE = "GET_CATEGORYIMAGE";
export const CATEGORYIMAGE_ERROR = "CATEGORYIMAGE_ERROR";
export interface CategoryInterface {
  type: typeof GET_CATEGORYIMAGE | typeof CATEGORYIMAGE_ERROR;
  payload: CategoryCardInterface[] | string;
}

// searched items
export const GET_SEARCHED_ITEM = "GET_SEARCHED_ITEM";
export const SEARCHED_ITEM_ERROR = "SEARCHED_ITEM_ERROR";
export interface SearchedInterface {
  type: typeof GET_SEARCHED_ITEM | typeof SEARCHED_ITEM_ERROR;
  payload: ProductItem | string;
}

// low in stock
export const GET_LOW_STOCK = "GET_LOW_STOCK";
export const LOW_STOCK_ERROR = "LOW_STOCK_ERROR";
export interface LowStockInterface {
  type: typeof GET_LOW_STOCK | typeof LOW_STOCK_ERROR;
  payload: ProductItem | string;
}

// history items
export const GET_HISTORY = "GET_HISTORY";
export const HISTORY_ERROR = "HISTORY_ERROR";
export interface HistoryInterface {
  type: typeof GET_HISTORY | typeof HISTORY_ERROR;
  payload: ProductItem[] | string;
}

// get item by category name
export const GET_ITEM_CATEGORY = "GET_ITEM_CATEGORY";
export const ITEM_CATEGORY_ERROR = "ITEM_CATEGORY_ERROR";
export interface CategoryItemInterface {
  type: typeof GET_ITEM_CATEGORY | typeof ITEM_CATEGORY_ERROR;
  payload: ProductItem | string;
}

// get single item
export const GET_SINGLE_ITEM = "GET_SINGLE_ITEM";
export const SINGLE_ITEM_ERROR = "SINGLE_ITEM_ERROR";
export interface SingleItemInterface {
  type: typeof GET_SINGLE_ITEM | typeof SINGLE_ITEM_ERROR;
  payload: ProductItem | string;
}

// get all products
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const ALL_PRODUCTS_ERROR = "ALL_PRODUCTS_ERROR";
export interface AllProductsInterface {
  type: typeof GET_ALL_PRODUCTS | typeof ALL_PRODUCTS_ERROR;
  payload: ProductItem | string;
}

export const GET_FAVOURITES = "GET_FAVOURITES";
export const FAVOURITES_ERROR = "FAVOURITES_ERROR";
export interface FavouritesInterface {
  type: typeof GET_FAVOURITES | typeof FAVOURITES_ERROR;
  payload: ProductItem[] | string;
}
