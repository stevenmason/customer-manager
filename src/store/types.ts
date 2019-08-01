import {
  setCustomers,
  setLoading,
  setCustomer,
  setEditingCustomer,
  setEditingCustomerValue,
  setFilter,
  deleteCustomer
} from "./actions";
import rootReducer from "./reducer";

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface KeyedCustomers {
  [key: string]: Customer;
}

export type State = ReturnType<typeof rootReducer>;

export type Actions =
  | ReturnType<typeof setCustomers>
  | ReturnType<typeof setCustomer>
  | ReturnType<typeof deleteCustomer>
  | ReturnType<typeof setEditingCustomer>
  | ReturnType<typeof setEditingCustomerValue>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setFilter>;
