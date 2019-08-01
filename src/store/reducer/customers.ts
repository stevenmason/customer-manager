import { keyBy, uniqueId } from "lodash";
import { Actions, KeyedCustomers } from "../types";
import { ACTIONS } from "../constants";

const customers = (state: KeyedCustomers = {}, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_CUSTOMERS:
      return keyBy(action.customers, "id");
    case ACTIONS.SET_CUSTOMER:
      const customer = {
        ...action.customer,
        id: action.customer.id || uniqueId()
      };
      return {
        ...state,
        [customer.id]: customer
      };
    case ACTIONS.DELETE_CUSTOMER:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
  }
  return state;
};

export default customers;
