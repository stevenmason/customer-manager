import { createSelector } from "reselect";

import { State, Customer } from "./types";
import { customerContainsFilter } from "./utils";

const customers = (state: State) => state.customers;
const loading = (state: State) => state.loading;
const filter = (state: State) => state.filter;
const editingCustomer = (state: State) => state.editingCustomer;

const filteredCustomers = createSelector(
  [customers, filter],
  (customers, filter) =>
    Object.values(customers).filter((customer: Customer) =>
      customerContainsFilter(customer, filter)
    )
);

export { filteredCustomers, loading, filter, editingCustomer };
