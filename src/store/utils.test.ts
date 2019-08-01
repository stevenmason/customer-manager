import { Customer } from "./types";
import { customerContainsFilter } from "./utils";

const CUSTOMER: Customer = {
  id: "1",
  firstName: "Bob",
  lastName: "the BUILDER",
  dateOfBirth: "1990-12-12"
};

describe("customerContainsFilter", () => {
  it("correctly matches firstName filter to customer", () => {
    expect(customerContainsFilter(CUSTOMER, "Bob")).toBe(true);
  });

  it("correctly matches lastName filter to customer", () => {
    expect(customerContainsFilter(CUSTOMER, "the builder")).toBe(true);
  });

  it("correctly matches firstName and lastName filter to customer", () => {
    expect(customerContainsFilter(CUSTOMER, "Bob the")).toBe(true);
  });

  it("correctly does not match filter to customer", () => {
    expect(customerContainsFilter(CUSTOMER, "Bobby")).toBe(false);
  });
});
