import { CUSTOMERS } from "./mock";

const SERVER = "http://localhost:8001";
const CUSTOMERS_API = `${SERVER}/customers`;
const MOCK_DATA = true;

async function getCustomers() {
  if (MOCK_DATA) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return CUSTOMERS;
  }
  const customers = await (await fetch(CUSTOMERS_API)).json();
  return customers;
}

export { getCustomers };
