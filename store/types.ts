import { CategoryCardInterface, ProductItem } from "@/types";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";

export const GET_TOPSELLING = "GET_TOPSELLING";
export const TOPSELLING_ERROR = "TOPSELLING_ERROR";

export const GET_CATEGORYIMAGE = "GET_CATEGORYIMAGE";
export const CATEGORYIMAGE_ERROR = "CATEGORYIMAGE_ERROR";

export const GET_SEARCHED_ITEM = "GET_SEARCHED_ITEM";
export const SEARCHED_ITEM_ERROR = "SEARCHED_ITEM_ERROR";

export const GET_LOW_STOCK = "GET_LOW_STOCK";
export const LOW_STOCK_ERROR = "LOW_STOCK_ERROR";

export const GET_HISTORY = "GET_HISTORY";
export const HISTORY_ERROR = "HISTORY_ERROR";

export interface CategoriesInterface {
  type: typeof GET_CATEGORIES | typeof CATEGORIES_ERROR;
  payload: string;
}

export interface TopSellingInterface {
  type: typeof GET_TOPSELLING | typeof TOPSELLING_ERROR;
  payload: ProductItem | string;
}

export interface CategoryInterface {
  type: typeof GET_CATEGORYIMAGE | typeof CATEGORYIMAGE_ERROR;
  payload: CategoryCardInterface[] | string;
}

export interface SearchedInterface {
  type: typeof GET_SEARCHED_ITEM | typeof SEARCHED_ITEM_ERROR;
  payload: ProductItem | string;
}

export interface LowStockInterface {
  type: typeof GET_LOW_STOCK | typeof LOW_STOCK_ERROR;
  payload: ProductItem | string;
}

export interface HistoryInterface {
  type: typeof GET_HISTORY | typeof HISTORY_ERROR;
  payload: ProductItem[] | string;
}
