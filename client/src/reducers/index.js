import { combineReducers } from "redux";

import cart from "./cart-reducer";
import items from "./items-reducer";
import currItem from "./currItem-reducer";
import order from "./order-reducer";
import companies from "./companies-reducer";

//TEST-KENNY
import search from "./search-reducer";

export default combineReducers({
  order,
  cart,
  items,
  currItem,
  companies,
  search,
});
