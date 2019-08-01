import faker from "faker";

import { Customer } from "../store/types";
const NUMBER_OF_CUSTOMERS = 100;

const CUSTOMERS: Customer[] = [...Array(NUMBER_OF_CUSTOMERS)].map(i => ({
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  dateOfBirth: faker.date
    .past(faker.random.number(100))
    .toISOString()
    .substr(0, 10)
}));

export { CUSTOMERS };
