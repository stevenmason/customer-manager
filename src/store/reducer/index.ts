import { combineReducers } from "redux";

import customers from "./customers";
import editingCustomer from "./editingCustomer";
import filter from "./filter";
import loading from "./loading";

const rootReducer = combineReducers({
  customers,
  filter,
  editingCustomer,
  loading
});

export default rootReducer;
