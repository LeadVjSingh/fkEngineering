import { ProductTypes } from "../types/product-types";
import { FakeApi } from "./../../config";
import axios from "axios";

const itemFetchStart = () => {
  return {
    type: ProductTypes.ITEM_FETCH_START,
    payload: "",
  };
};

const itemFetchError = (error) => {
  return {
    type: ProductTypes.ITEM_FETCH_ERROR,
    payload: error,
  };
};

const itemFetchDone = (data) => {
  console.log(data)
  return {
    type: ProductTypes.ITEM_FETCH_DONE,
    payload: data,
  };
};

export const fetchAllItems = () => {
  return (dispatch) => {
    dispatch(itemFetchStart());
    axios
      .get(FakeApi.GETALLITEMS)
      .then(({ data }) => dispatch(itemFetchDone(data)))
      .catch((error) => dispatch(itemFetchError(error)));
  };
};

export const fetchItemByCategory = (category) => {
  return (dispatch) => {
    dispatch(itemFetchStart());
    axios
      .get(`${FakeApi.GETITEMBYCATEGORY}${category}`)
      .then(({ data }) => dispatch(itemFetchDone(data)))
      .catch((error) => dispatch(itemFetchError(error)));
  };
};
