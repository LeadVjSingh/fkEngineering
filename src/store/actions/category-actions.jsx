import { CategoryTypes } from "../types/category-types";
import { FakeApi } from "../../config";
import axios from "axios";

const productCategoryDone = (data) => {
  return {
    type: CategoryTypes.ITEM_CATEGORY_FETCH_DONE,
    payload: data,
  };
};

const productCategoryStart = () => {
  return {
    type: CategoryTypes.ITEM_CATEGORY_FETCH_START,
    payload: "",
  };
};

const productCategoryError = (error) => {
  return {
    type: CategoryTypes.ITEM_CATEGORY_FETCH_ERROR,
    payload: error,
  };
};

export const categoryFetchAll = () => {
  return (dispatch) => {
    dispatch(productCategoryStart());
    axios
      .get(FakeApi.GETITEMCATEGORIES)
      .then(({ data }) => {
        dispatch(productCategoryDone(data));
      })
      .catch((error) => {
        dispatch(productCategoryError(error));
      });
  };
};
