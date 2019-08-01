import { uniqueId } from "lodash";

import { ACTIONS, DEFAULT_CUSTOMER } from "./constants";
import { Customer } from "./types";

const setCustomers = (customers: Customer[]) => ({
  type: ACTIONS.SET_CUSTOMERS as ACTIONS.SET_CUSTOMERS,
  customers
});

const setCustomer = (customer: Customer) => ({
  type: ACTIONS.SET_CUSTOMER as ACTIONS.SET_CUSTOMER,
  customer
});

const deleteCustomer = (id: string) => ({
  type: ACTIONS.DELETE_CUSTOMER as ACTIONS.DELETE_CUSTOMER,
  id
});

const setEditingCustomer = (editingCustomer: Customer | null) => ({
  type: ACTIONS.SET_EDITING_CUSTOMER as ACTIONS.SET_EDITING_CUSTOMER,
  editingCustomer
});

const addNewEditingCustomer = () => ({
  type: ACTIONS.SET_EDITING_CUSTOMER as ACTIONS.SET_EDITING_CUSTOMER,
  editingCustomer: {
    ...DEFAULT_CUSTOMER,
    id: uniqueId()
  }
});

const setEditingCustomerValue = (value: string, name: string) => ({
  type: ACTIONS.SET_EDITING_CUSTOMER_VALUE as ACTIONS.SET_EDITING_CUSTOMER_VALUE,
  name,
  value
});

const setLoading = (loading: boolean) => ({
  type: ACTIONS.SET_LOADING as ACTIONS.SET_LOADING,
  loading
});

const setFilter = (filter: string) => ({
  type: ACTIONS.SET_FILTER as ACTIONS.SET_FILTER,
  filter
});

export {
  setCustomers,
  setCustomer,
  setEditingCustomer,
  setEditingCustomerValue,
  setLoading,
  setFilter,
  addNewEditingCustomer,
  deleteCustomer
};
