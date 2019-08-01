import { Customer } from "../../../store/types";
import { setEditingCustomer, deleteCustomer } from "../../../store/actions";

export interface Props {
  customer: Customer;
  setEditingCustomer: typeof setEditingCustomer;
  deleteCustomer: typeof deleteCustomer;
}
