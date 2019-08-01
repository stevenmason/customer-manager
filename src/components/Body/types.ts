import { Customer } from "../../store/types";
import {
  setEditingCustomer,
  setFilter,
  addNewEditingCustomer,
  deleteCustomer
} from "../../store/actions";

export interface Props {
  customers: Customer[];
  loading: boolean;
  filter: string;
  setEditingCustomer: typeof setEditingCustomer;
  setFilter: typeof setFilter;
  addNewEditingCustomer: typeof addNewEditingCustomer;
  deleteCustomer: typeof deleteCustomer;
}
