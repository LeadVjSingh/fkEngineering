import { ProductTypes } from "../types/product-types";

const initialProductState = {
  isLoading: false,
  products: [],
  error: undefined,
};

const ItemReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ProductTypes.ITEM_FETCH_START:
      return {
        ...state,
        isLoading: true,
        products: [],
        error: undefined,
      };
    case ProductTypes.ITEM_FETCH_DONE:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: undefined,
      };
    case ProductTypes.ITEM_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ItemReducer;
