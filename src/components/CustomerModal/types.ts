import { Customer } from "../../store/types";
import {
  setEditingCustomer,
  setEditingCustomerValue,
  setCustomer
} from "../../store/actions";

interface Props {
  customer: Customer;
  setEditingCustomer: typeof setEditingCustomer;
  setEditingCustomerValue: typeof setEditingCustomerValue;
  setCustomer: typeof setCustomer;
}

export default Props;
