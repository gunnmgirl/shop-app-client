import { combineReducers } from "redux";

import allProducts from "../features/allProducts/reducers/allProductsReducer";
import myProducts from "../features/myProducts/reducers/myProductsReducer";
import productDetails from "../features/productDetails/reducers/productDetailsReducer";
import user from "../features/user/reducers/userReducer";

const rootReducer = combineReducers({
  allProducts,
  myProducts,
  productDetails,
  user,
});

export default rootReducer;
