import { setCustomers, setLoading } from "./store/actions";
import { Customer } from "./store/types";

export interface Props {
  setCustomers: typeof setCustomers;
  setLoading: typeof setLoading;
  editingCustomer: Customer | null;
}
