import { CategoryTypes } from "../types/category-types";

const initialCategoryState = {
  isLoading: false,
  categories: [],
  error: undefined,
};

const CategoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case CategoryTypes.ITEM_CATEGORY_FETCH_START:
      return {
        ...state,
        isLoading: true,
        categories: [],
        error: undefined,
      };
    case CategoryTypes.ITEM_CATEGORY_FETCH_DONE:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
        error: undefined,
      };
    case CategoryTypes.ITEM_CATEGORY_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        categories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
