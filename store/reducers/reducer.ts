import { GET_CATEGORIES, CATEGORIES_ERROR } from "../types";

const initialState = {
  sample: [],
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

    default:
      return state;
  }
};

export default reducer;
