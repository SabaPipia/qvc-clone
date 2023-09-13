export const GET_CATEGORIES = "GET_CATEGORIES";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";

export interface Categories {
  type: typeof GET_CATEGORIES | typeof CATEGORIES_ERROR;
  payload: any;
}
