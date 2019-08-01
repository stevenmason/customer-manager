import { Actions, Customer } from "../types";
import { ACTIONS } from "../constants";

const editingCustomer = (state: Customer | null = null, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_EDITING_CUSTOMER:
      return action.editingCustomer;
    case ACTIONS.SET_EDITING_CUSTOMER_VALUE:
      console.log("actions");
      return (
        state && {
          ...state,
          [action.name]: action.value
        }
      );
  }
  return state;
};

export default editingCustomer;
