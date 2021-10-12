import { combineReducers } from "redux";
import ItemReducer from "./product-reducer";
import CategoryReducer from "./category-reducer";

export default combineReducers({
  product: ItemReducer,
  category: CategoryReducer,
});
