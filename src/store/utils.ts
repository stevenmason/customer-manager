import { Customer } from "./types";

const customerContainsFilter = (customer: Customer, filter: string) =>
  `${customer.firstName.toLowerCase()} ${customer.lastName.toLowerCase()}`.includes(
    filter.toLowerCase()
  );

export { customerContainsFilter };
